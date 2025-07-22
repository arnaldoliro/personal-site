import SectionDescription from "../SectionDescription";
import SectionTitle from "../SectionTitle";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-[#171717] to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle highlight="Contato">Entre em</SectionTitle>
        <SectionDescription>
          Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto interessante ou apenas quer conversar, sinta-se à vontade para me enviar uma mensagem!
        </SectionDescription>
      </div>
      <div className="flex">
        <form className="w-full max-w-lg bg-[#1e1e1e] p-6 rounded-2xl shadow-lg">
            <h1 className="text-2xl font-semibold text-center mb-6">Envia uma mensagem</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="text-sm" htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Seu Nome" className="p-3 rounded-lg bg-[#1e1e1e] border border-[#333] focus:outline-none focus:ring-2 focus:ring-custom-gradient" />

                <label className="text-sm" htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Seu Email" className="p-3 rounded-lg bg-[#1e1e1e] border border-[#333] focus:outline-none focus:ring-2 focus:ring-custom-gradient" />
            </div>
                <label className="text-sm" htmlFor="message">Mensagem</label>
                <textarea id="message" placeholder="Sua Mensagem" className="w-full mt-4 p-3 rounded-lg bg-[#1e1e1e] border border-[#333] focus:outline-none focus:ring-2 focus:ring-custom-gradient" />
                <button type="submit" className="mt-4 inline-block bg-custom-gradient text-[#171717] font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-[#f974165b] transition-all duration-500">Enviar Mensagem</button>
        </form>
        <div>
            <div className="ml-10 bg-[#1e1e1e] p-6 rounded-2xl shadow-lg">
                <h1 className="text-lg font-semibold mb-4">Informações de Contato</h1>
                <p className="text-sm">Email: seuemail@example.com</p>
                <p className="text-sm">Telefone: (00) 12345-6789</p>
            </div>
            <div className="ml-10 mt-6 bg-[#1e1e1e] p-6 rounded-2xl shadow-lg">
                <h1 className="text-lg font-semibold mb-4">Redes Sociais</h1>
                <p className="text-sm">Twitter: @seutwitter</p>
                <p className="text-sm">LinkedIn: seu-linkedin</p>
            </div>
        </div>
      </div>
    </section>
  );
}