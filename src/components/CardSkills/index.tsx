import CardProps from "@/types/CardProps";
import SkillTag from "../SkillTag";

export default function Card({ title, skills }: CardProps) {
  return (
    <div className="bg-[#353535] p-6 rounded-2xl hover:shadow-[#312923] hover:shadow-lg transition-all duration-300 w-full h-full">
      <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
