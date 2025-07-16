import Card from "../CardSkills"

export default function AboutSection() {
   return(  
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-6">Sobre mim</h2>
        <div className="flex gap-6 mx-auto items-center">
            <div className="">
                <h1 className="text-xl font-bold mb-4">Minha Jornada</h1>
                <div className="flex">
                    <div>
                    <img
                        src="/images/perfil.png"
                        alt="Foto de perfil"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-orange-300"
                    />
                </div>
                <div>
                    <p className="text-lg mb-4">
                        Sou um desenvolvedor apaixonado com amor por criar aplicações web dinâmicas e envolventes.
                    </p>
                    <p className="text-lg">
                        Minha jornada no desenvolvimento web tem sido alimentada pela curiosidade e pelo desejo de aprender novas tecnologias.
                    </p>
                </div>
                </div>
            </div>
            <div className="">
                <h1 className="text-xl font-bold mb-4">Minhas Habilidades</h1>
                <div className="flex gap-6">
                    {/* Usar um map para o card de habilidades */}
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
      </div>
    </section>
   )
}