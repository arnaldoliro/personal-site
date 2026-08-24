'use client'

import certificates, { achievements } from "@/data/CertificatesItems";
import SectionDescription from "../SectionDescription";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function CertificatesSection() {
  const { dict } = useDictionary();

  return (
    <section id="certificates" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-14">
          <SectionTitle highlight={dict.certificates.titleHighlight}>{dict.certificates.titleLead}</SectionTitle>
          <SectionDescription>
            {dict.certificates.description}
          </SectionDescription>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-[#1e1e1e] p-6 rounded-2xl shadow-lg w-full max-w-sm flex flex-col items-center text-center gap-4 hover:shadow-[#f9741631] hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-white rounded-xl p-4 w-full flex items-center justify-center">
                <Image
                  src={cert.logo}
                  alt={cert.institution}
                  width={200}
                  height={35}
                  className="h-9 w-auto"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{dict.certificates.items[cert.id].title}</h3>
                <p className="text-sm text-gray-400">{cert.institution}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {achievements.length > 0 && (
          <div className="mt-14">
            <h3 className="text-xl font-semibold text-center mb-6">{dict.certificates.achievementsHeading}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-[#1e1e1e] p-6 rounded-2xl shadow-lg flex items-center gap-4 max-w-md"
                >
                  <span className="bg-gray-800 rounded-full p-4 text-yellow-400">
                    <Award size={24} />
                  </span>
                  <div>
                    <h4 className="font-semibold">{dict.certificates.achievements[item.id].title}</h4>
                    <p className="text-sm text-gray-400">{dict.certificates.achievements[item.id].description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
