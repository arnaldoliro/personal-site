import CardProps from "@/types/CardProps";

export default function Card({ title, skills }: CardProps) {
  return (
    <div className="bg-[#353535] p-4 rounded-2xl hover:shadow-[#353535] hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <h3
            key={index}
            className="bg-[#4d4d4d]  hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 hover:text-black text-md rounded-2xl px-2 py-1 w-fit text-gray-300 hover:shadow-sm shadow-gray-900 hover:scale-102 transition-all duration-300 cursor-default transform hover:-translate-y-0.5"
          >
            {skill}
          </h3>
        ))}
      </div>
    </div>
  );
}