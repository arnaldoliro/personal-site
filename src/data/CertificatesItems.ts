// Instituição, data e logo não se traduzem; o título vem do dicionário
const certificates = [
  {
    id: "santander-backend" as const,
    institution: "Santander Coders",
    date: "2024.1",
    logo: "/images/santander-coders-logo.svg",
  },
];

export const achievements = [{ id: "onc" as const }];

export type CertificateId = (typeof certificates)[number]["id"];
export type AchievementId = (typeof achievements)[number]["id"];

export default certificates;
