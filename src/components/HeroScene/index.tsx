"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, MeshReflectorMaterial, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Tamanho da moeda (raio) e espessura
const COIN_RADIUS = 6.2;
const COIN_THICKNESS = 0.25;
// Velocidade da rotação automática (rad por frame)
const ROTATION_SPEED = 0.006;
// Fundo atrás do recorte da foto (mesma dupla laranja/amarelo do .bg-custom-gradient)
const PHOTO_BG_FROM = "#f97316";
const PHOTO_BG_TO = "#facc15";
// Anel decorativo em volta da foto (frente e verso), amarelo mais claro que o fundo
const RING_COLOR = "#fef08a";
const RING_WIDTH = 14;
// Cores da textura serrilhada da lateral (alternando escuro/claro)
const RIM_STRIPE_DARK = "#7a3b0a";
const RIM_STRIPE_LIGHT = "#ffb35c";
const RIM_STRIPE_COUNT = 40;
// Cor e intensidade do brilho que a lateral emite por conta própria (tipo LED)
const RIM_EMISSIVE_COLOR = "#fff4d6";
const RIM_EMISSIVE_INTENSITY = 1.1;

// Câmera: distância fixa e fov mínimo (calibrados pra manter ~40% de margem
// em volta da moeda); o fov abre mais em telas estreitas (retrato) pra ela
// não cortar nas bordas, calculado dinamicamente em ResponsiveCamera
const BASE_Z = 21.6;
const BASE_FOV = 44;
const MAX_FOV = 100;
const COIN_MARGIN = 0.4;
// Câmera elevada e inclinada pra baixo: revela mais área de piso na tela e,
// com isso, muito mais do reflexo da moeda (com a câmera na altura do centro
// dela, o piso era visto quase de perfil e sobrava só uma faixa fina)
const CAMERA_Y = 3.5;
const CAMERA_DISTANCE = Math.hypot(BASE_Z, CAMERA_Y);

// Reflexo do piso e brilho da face (valores de calibragem visual)
const FLOOR_MIRROR = 0.75;
const FLOOR_MIX_STRENGTH = 20;
const FACE_NORMAL_STRENGTH = 0.35;

// Nível do chão espelhado (usado pelo piso e pela sombra)
const FLOOR_Y = -COIN_RADIUS - 0.3;

// Névoa: mesma cor do fundo da Hero, começando depois da moeda pra não afetá-la
const HERO_BG_COLOR = "#171717";
const FOG_NEAR = 40;
const FOG_FAR = 150;


function computeFov(aspect: number) {
  const requiredFovRad = 2 * Math.atan((COIN_RADIUS * (1 + COIN_MARGIN)) / (CAMERA_DISTANCE * aspect));
  const requiredFovDeg = requiredFovRad * (180 / Math.PI);
  return Math.min(Math.max(BASE_FOV, requiredFovDeg), MAX_FOV);
}

function computeFrustumHalfExtents(fovDeg: number, aspect: number, distance: number) {
  const halfHeight = distance * Math.tan((fovDeg * Math.PI) / 180 / 2);
  const halfWidth = halfHeight * aspect;
  return { halfWidth, halfHeight };
}

// Em telas largas (paisagem) a moeda desliza pra direita, liberando o lado
// esquerdo pro texto sobreposto; em telas estreitas (retrato/celular) ela fica
// centralizada, já que ali o texto fica acima dela e não ao lado
function useCoinOffsetX() {
  const { size } = useThree();
  return useMemo(() => {
    const aspect = size.width / size.height;
    if (aspect < 1.2) return 0;
    const fov = computeFov(aspect);
    const { halfWidth } = computeFrustumHalfExtents(fov, aspect, CAMERA_DISTANCE);
    return halfWidth * 0.38;
  }, [size]);
}

// Ajusta o fov da câmera conforme a proporção da tela, pra moeda nunca cortar
function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const aspect = size.width / size.height;
    const perspectiveCamera = camera as THREE.PerspectiveCamera;
    perspectiveCamera.fov = computeFov(aspect);
    perspectiveCamera.aspect = aspect;
    perspectiveCamera.updateProjectionMatrix();
    // câmera elevada precisa apontar de volta pra moeda, senão ela sai do centro
    perspectiveCamera.lookAt(0, 0, 0);
  }, [camera, size]);

  return null;
}

// Textura branca/neutra com um brilho radial suave, reaproveitada pro halo
// (brilho da moeda) e pra sombra no chão, só trocando a cor do material
function useRadialTexture() {
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }, []);
}

// Halo pulsante bem rente à moeda, como se ela mesma estivesse emitindo luz
function Glow() {
  const ref = useRef<THREE.Mesh>(null);
  const texture = useRadialTexture();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const pulse = 0.3 + Math.sin(t * 1.2) * 0.12;
    (ref.current.material as THREE.MeshBasicMaterial).opacity = pulse;
    const scale = 1 + Math.sin(t * 1.2) * 0.06;
    ref.current.scale.set(scale, scale, 1);
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      {/* rente à moeda: maior que ela só o suficiente pro brilho vazar pelas
          bordas, sem se espalhar até o chão espelhado embaixo */}
      <planeGeometry args={[COIN_RADIUS * 1.7, COIN_RADIUS * 1.7]} />
      <meshBasicMaterial
        map={texture}
        color="#fbbf24"
        transparent
        opacity={0.32}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

// Sombra escura e sutil rente ao chão, embaixo da moeda
function GroundShadow() {
  const texture = useRadialTexture();

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, FLOOR_Y + 0.02, 0]}>
      <planeGeometry args={[COIN_RADIUS * 1.6, COIN_RADIUS * 0.9]} />
      <meshBasicMaterial map={texture} color="#000000" transparent opacity={0.35} depthWrite={false} />
    </mesh>
  );
}

// Monta a textura da foto num canvas: preenche o fundo com o gradiente da marca
// e desenha a foto em modo "cover" ancorado embaixo (evita esticar a foto vertical)
function usePhotoTexture(rawTexture: THREE.Texture) {
  return useMemo(() => {
    const img = rawTexture.image as HTMLImageElement;
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;

    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, PHOTO_BG_FROM);
    gradient.addColorStop(1, PHOTO_BG_TO);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const scale = Math.max(size / img.width, size / img.height);
    const drawWidth = img.width * scale;
    const drawHeight = img.height * scale;
    const dx = (size - drawWidth) / 2;
    const dy = size - drawHeight; // ancora embaixo, igual ao object-bottom usado antes
    ctx.drawImage(img, dx, dy, drawWidth, drawHeight);

    // Anel decorativo perto da borda, antes da aresta metálica (frente e verso,
    // já que o verso é derivado desta mesma textura)
    ctx.strokeStyle = RING_COLOR;
    ctx.lineWidth = RING_WIDTH;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - RING_WIDTH / 2 - 6, 0, Math.PI * 2);
    ctx.stroke();

    const canvasTexture = new THREE.CanvasTexture(canvas);
    canvasTexture.colorSpace = THREE.SRGBColorSpace;
    return canvasTexture;
  }, [rawTexture]);
}

// O verso do cilindro tem o V da UV invertido em relação à frente (convenção do
// three.js pras duas tampas do cilindro) — clonamos a textura da frente e
// invertemos o V de volta, pra foto do verso sair em pé também, não de cabeça pra baixo
function useBackPhotoTexture(photoTexture: THREE.Texture) {
  return useMemo(() => {
    const backTexture = photoTexture.clone();
    backTexture.repeat.y = -1;
    backTexture.offset.y = 1;
    backTexture.needsUpdate = true;
    return backTexture;
  }, [photoTexture]);
}

// Gera a textura (cor) e o bump map (relevo) da lateral serrilhada da moeda,
// pra ela ganhar ranhuras que reagem à luz conforme gira
function useRimTextures() {
  const gl = useThree((state) => state.gl);
  return useMemo(() => {
    // filtragem anisotrópica: essencial numa superfície vista quase de perfil,
    // sem ela as ranhuras viram padrões irregulares (moiré) ao girar
    const anisotropy = gl.capabilities.getMaxAnisotropy();
    const width = RIM_STRIPE_COUNT * 4;
    const height = 32;
    const stripeWidth = width / RIM_STRIPE_COUNT;

    const colorCanvas = document.createElement("canvas");
    colorCanvas.width = width;
    colorCanvas.height = height;
    const colorCtx = colorCanvas.getContext("2d")!;

    const bumpCanvas = document.createElement("canvas");
    bumpCanvas.width = width;
    bumpCanvas.height = height;
    const bumpCtx = bumpCanvas.getContext("2d")!;

    for (let i = 0; i < RIM_STRIPE_COUNT; i++) {
      const x = i * stripeWidth;
      const isDark = i % 2 === 0;
      colorCtx.fillStyle = isDark ? RIM_STRIPE_DARK : RIM_STRIPE_LIGHT;
      colorCtx.fillRect(x, 0, stripeWidth, height);
      bumpCtx.fillStyle = isDark ? "#202020" : "#e6e6e6";
      bumpCtx.fillRect(x, 0, stripeWidth, height);
    }

    const map = new THREE.CanvasTexture(colorCanvas);
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = anisotropy;
    const bumpMap = new THREE.CanvasTexture(bumpCanvas);
    bumpMap.anisotropy = anisotropy;

    return { map, bumpMap };
  }, [gl]);
}

// Normal map sutil pras faces: sem ele a face é um disco perfeitamente plano,
// então todos os pontos têm a mesma inclinação e a face inteira acende de uma
// vez ao girar, parecendo uma chapa de luz. O ruído quebra essa uniformidade e
// o brilho vira uma mancha que desliza pela superfície.
function useFaceNormalTexture() {
  const gl = useThree((state) => state.gl);
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const image = ctx.createImageData(size, size);

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = (y * size + x) * 4;
        // variação suave e aleatória em torno do normal neutro (128,128,255)
        const nx = 128 + (Math.random() - 0.5) * 60;
        const ny = 128 + (Math.random() - 0.5) * 60;
        image.data[i + 0] = nx;
        image.data[i + 1] = ny;
        image.data[i + 2] = 255;
        image.data[i + 3] = 255;
      }
    }
    ctx.putImageData(image, 0, 0);
    // borra o ruído pra virar ondulação suave em vez de granulado duro
    ctx.filter = "blur(2px)";
    ctx.drawImage(canvas, 0, 0);
    ctx.filter = "none";

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3);
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    return texture;
  }, [gl]);
}

// Estado do arraste, compartilhado entre a área de arraste (DOM, fora do Canvas)
// e a moeda (dentro da cena). Só a moeda usa isso — a câmera nunca se move, então
// átomos, chão espelhado e halo ficam parados independente do que o usuário faça.
type DragState = {
  isDragging: boolean;
  // giro horizontal acumulado pelo arraste, consumido a cada frame
  pendingSpin: number;
  // inclinação vertical atual (volta sozinha pra 0 quando solta o mouse)
  tilt: number;
};

const DRAG_SPIN_SENSITIVITY = 0.008;
const DRAG_TILT_SENSITIVITY = 0.006;
const MAX_TILT = 0.6;

function Coin({ dragRef }: { dragRef: React.RefObject<DragState> }) {
  const groupRef = useRef<THREE.Group>(null);
  const tiltRef = useRef<THREE.Group>(null);
  const isTabVisible = useRef(true);
  const offsetX = useCoinOffsetX();

  const rawTexture = useTexture("/images/perfil.png");
  const photoTexture = usePhotoTexture(rawTexture);
  const backPhotoTexture = useBackPhotoTexture(photoTexture);
  const { map: rimMap, bumpMap: rimBumpMap } = useRimTextures();
  const faceNormalMap = useFaceNormalTexture();

  // Cilindro nasce deitado (faces voltadas pro eixo Y); rotateX vira as faces
  // pra câmera (eixo Z) e rotateZ corrige o giro de 90° que essa virada causa
  // no mapeamento de UV das faces, deixando a foto em pé
  const geometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(COIN_RADIUS, COIN_RADIUS, COIN_THICKNESS, 64);
    geo.rotateX(Math.PI / 2);
    geo.rotateZ(Math.PI / 2);
    return geo;
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      isTabVisible.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const drag = dragRef.current;

    // Giro horizontal: rotação automática + o que o usuário arrastou desde o
    // último frame (consumido aqui). Só a moeda gira — a câmera fica parada.
    if (isTabVisible.current) {
      groupRef.current.rotation.y += ROTATION_SPEED;
    }
    groupRef.current.rotation.y += drag.pendingSpin;
    drag.pendingSpin = 0;

    // Inclinação vertical: enquanto arrasta segue o mouse; ao soltar, volta
    // sozinha e suavemente pra moeda ficar em pé de novo
    if (!drag.isDragging) {
      drag.tilt += (0 - drag.tilt) * 0.1;
      if (Math.abs(drag.tilt) < 0.0005) drag.tilt = 0;
    }
    if (tiltRef.current) {
      tiltRef.current.rotation.x = drag.tilt;
    }

    // Flutuação sutil (bob), antes feita em CSS/framer-motion no wrapper HTML
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = Math.sin(t * 1.05) * 0.3;
    groupRef.current.position.x = Math.sin(t * 1.05 + Math.PI / 2) * 0.15;
  });

  return (
    <>
      {/* deslocada pra direita em telas largas, liberando o lado esquerdo pro texto */}
      <group position={[offsetX, 0, 0]}>
        {/* grupo externo = inclinação vertical do arraste; interno = giro próprio */}
        <group ref={tiltRef}>
          <group ref={groupRef}>
            <mesh geometry={geometry}>
              {/* material-0 = aresta lateral, material-1 = frente (foto), material-2 = verso (foto) */}
              <meshStandardMaterial
                attach="material-0"
                map={rimMap}
                bumpMap={rimBumpMap}
                bumpScale={0.02}
                metalness={0.75}
                roughness={0.38}
                emissive={RIM_EMISSIVE_COLOR}
                emissiveIntensity={RIM_EMISSIVE_INTENSITY}
              />
              <meshStandardMaterial
                attach="material-1"
                map={photoTexture}
                normalMap={faceNormalMap}
                normalScale={new THREE.Vector2(FACE_NORMAL_STRENGTH, FACE_NORMAL_STRENGTH)}
                metalness={0.08}
                roughness={0.62}
              />
              <meshStandardMaterial
                attach="material-2"
                map={backPhotoTexture}
                normalMap={faceNormalMap}
                normalScale={new THREE.Vector2(FACE_NORMAL_STRENGTH, FACE_NORMAL_STRENGTH)}
                metalness={0.08}
                roughness={0.62}
              />
            </mesh>
            {/* halo dentro do grupo que gira: acompanha a moeda e se estreita
                junto com ela quando fica de perfil */}
            <Glow />
          </group>
        </group>

        <GroundShadow />
      </group>

      {/* "Chão" espelhado logo abaixo da moeda (fixo, não gira junto com ela) —
          grande o bastante pra refletir moeda + átomos, mas sem esticar demais
          a textura do reflexo (por isso a resolução também subiu) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, FLOOR_Y, 0]}>
        <planeGeometry args={[COIN_RADIUS * 30, COIN_RADIUS * 40]} />
        <MeshReflectorMaterial
          blur={[80, 40]}
          resolution={1024}
          mixBlur={1}
          mixStrength={FLOOR_MIX_STRENGTH}
          roughness={0.85}
          depthScale={1.6}
          minDepthThreshold={0.3}
          maxDepthThreshold={1.6}
          color="#050505"
          metalness={0.5}
          mirror={FLOOR_MIRROR}
        />
      </mesh>
    </>
  );
}

export default function HeroScene() {
  const dragAreaRef = useRef<HTMLDivElement>(null);
  // Estado do arraste, lido pela moeda dentro da cena a cada frame
  const dragRef = useRef<DragState>({ isDragging: false, pendingSpin: 0, tilt: 0 });
  // Acompanha o mesmo deslocamento que a moeda tem dentro da cena (useCoinOffsetX):
  // em paisagem ela sai do centro pra direita, então a área de arraste vai junto
  const [dragLeft, setDragLeft] = useState("50%");

  useEffect(() => {
    const update = () => {
      const aspect = window.innerWidth / window.innerHeight;
      setDragLeft(aspect < 1.2 ? "50%" : "69%");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Arraste manual: em vez de orbitar a câmera (que faria a cena inteira parecer
  // se mover), o movimento do mouse é aplicado direto na rotação da moeda
  useEffect(() => {
    const el = dragAreaRef.current;
    if (!el) return;

    let lastX = 0;
    let lastY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      dragRef.current.isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      el.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!dragRef.current.isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;

      dragRef.current.pendingSpin += dx * DRAG_SPIN_SENSITIVITY;
      dragRef.current.tilt = Math.max(
        -MAX_TILT,
        Math.min(MAX_TILT, dragRef.current.tilt + dy * DRAG_TILT_SENSITIVITY)
      );
    };

    const handlePointerUp = (e: PointerEvent) => {
      dragRef.current.isDragging = false;
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    };

    el.addEventListener("pointerdown", handlePointerDown);
    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerup", handlePointerUp);
    el.addEventListener("pointercancel", handlePointerUp);
    return () => {
      el.removeEventListener("pointerdown", handlePointerDown);
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerup", handlePointerUp);
      el.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Área de arraste isolada (só perto da moeda), pra não capturar
          arrastos/scroll no resto da Hero (texto, fundo, touch no celular).
          Precisa de z-index acima do canvas, senão o canvas fica por cima e
          engole os eventos de mouse antes de chegarem aqui. */}
      <div
        ref={dragAreaRef}
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem] rounded-full z-10 cursor-grab active:cursor-grabbing"
        style={{ touchAction: "none", left: dragLeft }}
      />

      <Canvas
        className="!absolute inset-0 z-0"
        dpr={[1, 1.5]}
        camera={{ position: [0, CAMERA_Y, BASE_Z], fov: BASE_FOV }}
      >
        {/* Névoa na cor do fundo: o piso vai sumindo com a distância em vez de
            terminar numa linha reta, dando sensação de profundidade */}
        <fog attach="fog" args={[HERO_BG_COLOR, FOG_NEAR, FOG_FAR]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 4]} intensity={0.55} />
        {/* Luz extra pra dar um brilho especular na borda metálica */}
        <pointLight position={[-2, 1, 3]} intensity={0.7} color="#ffdca8" />
        {/* Reflexo de ambiente real na borda metálica (HDRI público via drei) */}
        <Environment preset="city" />
        <ResponsiveCamera />
        <Suspense fallback={null}>
          <Coin dragRef={dragRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
