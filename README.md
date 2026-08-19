# personal-site

Site de portfólio pessoal, single-page, construído com Next.js (App Router).

## Stack

- [Next.js](https://nextjs.org/) 15 / React 19
- Tailwind CSS 4
- `framer-motion` — animações
- `lucide-react` — ícones

## Estrutura da página

Seções renderizadas em `src/app/page.tsx`: **Hero**, **Sobre**, **Projetos** e **Contato** (formulário que envia para a API do `backend-arnaldoliro`). Conteúdo (skills, projetos, timeline, links) fica centralizado em `src/data/`.

## Configuração

Copie `.env.example` para `.env` e preencha:

| Variável                      | Descrição                                                        |
| ------------------------------ | ------------------------------------------------------------------ |
| `NEXT_PUBLIC_API_URL`          | URL base da API do backend (ex.: `http://localhost:3000`)        |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`  | Número de WhatsApp (com DDI+DDD, só dígitos) usado no link `wa.me` |

## Rodando o projeto

```bash
npm install
npm run dev    # sobe em http://localhost:3001
```

Em desenvolvimento, o frontend roda na porta `3001` e espera a API do `backend-arnaldoliro` na porta `3000`.

## Outros comandos

```bash
npm run build
npm run start
npm run lint
```
