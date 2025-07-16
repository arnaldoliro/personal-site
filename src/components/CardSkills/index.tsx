import CardProps from "@/types/CardProps";

export default function Card({ title, skills }: CardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-sm shadow-gray-950 hover:shadow-black hover:shadow-lg hover:scale-105 transition-all duration-300">
      <h2 className="text-lg font-semibold mb-2 text-white">{title}</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <h3
            key={index}
            className="bg-gray-600 text-sm rounded-2xl px-2 py-1 w-fit text-gray-300 hover:shadow-md shadow-gray-900 hover:scale-102 transition-all duration-300 cursor-default"
          >
            {skill}
          </h3>
        ))}
      </div>
    </div>
  );
}