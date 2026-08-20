import SkillTagProps from "@/types/SkillTagProps";

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <p
      className="bg-[#444] hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 hover:text-black text-sm rounded-2xl px-4 py-2 w-fit text-[#fff] hover:shadow-sm shadow-gray-900 hover:scale-102 transition-all duration-300 cursor-default transform hover:-translate-y-0.5"
    >
      {skill}
    </p>
  );
}
