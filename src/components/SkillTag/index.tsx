import SkillTagProps from "@/types/SkillTagProps";

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <h3
      className="bg-[#4d4d4d] hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 hover:text-black text-md rounded-2xl px-2 py-1 w-fit text-gray-300 hover:shadow-sm shadow-gray-900 hover:scale-102 transition-all duration-300 cursor-default transform hover:-translate-y-0.5"
    >
      {skill}
    </h3>
  );
}
