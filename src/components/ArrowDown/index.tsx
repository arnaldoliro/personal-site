import { ChevronDown } from "lucide-react";

export default function ArrowDown() {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
      <a href="#about" className="text-gray-400 hover:text-yellow-200 transition-all duration-300">
        <ChevronDown size={50}/>
      </a>
    </div>
  );
}