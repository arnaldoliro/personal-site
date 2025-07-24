'use client'

import { motion } from "framer-motion";
import SectionDescription from "../SectionDescription";
import SectionTitle from "../SectionTitle";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactSection() {
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
           className="w-full h-full max-w-lg bg-[#1e1e1e] p-6 rounded-2xl shadow-lg mx-auto md:mx-0"
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
                  id="name"
                  placeholder="Seu Nome"
                  className="p-3 w-full rounded-lg bg-[#1e1e1e] border border-[#333] focus:outline-none focus:border-[1px] focus:border-[#f97416] focus:shadow-sm shadow-[#f97416] transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Seu Email"
                  className="p-3 rounded-lg bg-[#1e1e1e] border border-[#333] focus:outline-none focus:border-[1px] focus:border-[#f97416] focus:shadow-sm shadow-[#f97416] transition-all duration-300"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              <label className="text-sm font-semibold" htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                placeholder="Sua Mensagem"
                className="textarea-scrollbar resize-none p-3 rounded-lg bg-[#1e1e1e] border border-[#333] focus:outline-none focus:border-[1px] focus:border-[#f97416] focus:shadow-sm shadow-[#f97416] transition-all duration-300"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-block bg-custom-gradient text-[#171717] font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-[#f974165b] transition-all duration-500 w-full cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </motion.form>
          <div className="space-y-11 w-full max-w-md mx-auto md:mx-0">
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
                <a className="rounded-full bg-[#333333] p-4 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 hover:text-gray-900 hover:shadow-lg shadow-[#ff901288] hover:scale-102 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" href="" target="_blank" rel="noopener noreferrer"><Mail size={20}/></a>
                <a className="rounded-full bg-[#333333] p-4 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 hover:text-gray-900 hover:shadow-lg shadow-[#ff901288] hover:scale-102 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" href="" target="_blank" rel="noopener noreferrer"><Send size={20}/></a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
