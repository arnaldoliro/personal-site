'use client'

import { motion } from "framer-motion";
import SectionDescription from "../SectionDescription";
import SectionTitle from "../SectionTitle";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { sendContactMessage } from "@/services/api/contact";

const WHATSAPP_MESSAGE = "Olá! Vi seu portfólio e gostaria de conversar.";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.51 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.32-1.93 1.4-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.11-4.85-4.3-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.38.26-.28.57-.35.76-.35h.55c.18 0 .41-.07.64.49.24.58.81 2 .88 2.15.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.7-.81.88-1.09.18-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Enviando...");
    setStatusType("");

    try {
      await sendContactMessage(form);
      setStatus("Mensagem enviada com sucesso!");
      setStatusType("success");
      setForm({ name: "", email: "", message: "" }); // limpa campos
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      if (message === "RATE_LIMITED") {
        setStatus("Você enviou muitas mensagens. Tente novamente em instantes.");
      } else if (message === "VALIDATION_ERROR") {
        setStatus("Verifique os dados informados (nome, e-mail e mensagem) e tente novamente.");
      } else {
        setStatus("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      }
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#171717] to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle highlight="Contato">Entre em</SectionTitle>
          <SectionDescription>
            Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto interessante ou apenas quer conversar, sinta-se à vontade para me enviar uma mensagem!
          </SectionDescription>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-start">
          <motion.form 
           onSubmit={handleSubmit}
           className="w-full h-full max-w-lg bg-[#1e1e1e] p-6 rounded-2xl shadow-lg mx-auto"
           initial={{ opacity: 0, x: -100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.7 }}
           viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-2xl font-semibold text-center mb-6">Envie uma mensagem</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold" htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={handleChange}
                  required
                  maxLength={80}
                  className="p-3 w-full rounded-lg bg-[#1e1e1e] border border-[#333] focus:outline-none focus:border-[1px] focus:border-[#f97416] focus:shadow-sm shadow-[#f97416] transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg bg-[#1e1e1e] border border-[#333] focus:outline-none focus:border-[1px] focus:border-[#f97416] focus:shadow-sm shadow-[#f97416] transition-all duration-300"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              <label className="text-sm font-semibold" htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                placeholder="Sua mensagem"
                value={form.message}
                onChange={handleChange}
                required
                maxLength={2000}
                className="textarea-scrollbar resize-none p-3 rounded-lg bg-[#1e1e1e] border border-[#333] focus:outline-none focus:border-[1px] focus:border-[#f97416] focus:shadow-sm shadow-[#f97416] transition-all duration-300"
                rows={5}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-block bg-custom-gradient text-[#171717] font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-[#f974165b] transition-all duration-500 w-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </button>
            {status && (
              <p
                className={`mt-4 text-sm text-center ${
                  statusType === "success"
                    ? "text-green-400"
                    : statusType === "error"
                    ? "text-red-400"
                    : "text-gray-400"
                }`}
              >
                {status}
              </p>
            )}
          </motion.form>
          <div className="space-y-11 w-full max-w-md mx-auto">
            <motion.div 
             className="bg-[#1e1e1e] p-6 rounded-2xl shadow-lg"
             initial={{ opacity: 0, x: 100 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7 }}
             viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-xl font-semibold font-grotesk mb-8">Informações de Contato</h1>
              <div className="flex items-center gap-5 mb-5">
                <span className="bg-gray-800 rounded-full p-4"><Mail size={20}/></span>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>dinholiro@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <span className="bg-gray-800 rounded-full p-4"><Phone size={20}/></span>
               <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <p>+55 71 98668-8603</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <span className="bg-gray-800 rounded-full p-4"><MapPin size={20}/></span>
                <div>
                  <p className="text-sm text-gray-400">Localização</p>
                  <p>Salvador, Brasil</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
             className="bg-[#1e1e1e] p-6 rounded-2xl shadow-lg"
             initial={{ opacity: 0, x:100 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7 }}
             viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-xl font-semibold mb-8">Redes Sociais</h1>
              <div className="flex gap-4 justify-center">
                <a className="rounded-full bg-[#333333] p-4 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 hover:text-gray-900 hover:shadow-lg shadow-[#ff901288] hover:scale-102 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" href="https://github.com/arnaldoliro" target="_blank" rel="noopener noreferrer"><Github size={20}/></a>
                <a className="rounded-full bg-[#333333] p-4 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 hover:text-gray-900 hover:shadow-lg shadow-[#ff901288] hover:scale-102 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" href="https://linkedin.com/in/arnaldoliro" target="_blank" rel="noopener noreferrer"><Linkedin size={20}/></a>
                <a className="rounded-full bg-[#333333] p-4 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 hover:text-gray-900 hover:shadow-lg shadow-[#ff901288] hover:scale-102 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" href="mailto:dinholiro@gmail.com" aria-label="Enviar e-mail"><Mail size={20}/></a>
                <a
                  className="rounded-full bg-[#333333] p-4 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 hover:text-gray-900 hover:shadow-lg shadow-[#ff901288] hover:scale-102 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  href={
                    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
                      ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
                      : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar no WhatsApp"
                >
                  <WhatsAppIcon size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
