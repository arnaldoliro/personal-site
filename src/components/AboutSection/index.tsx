import Card from "../CardSkills"
import Timeline from "../Timeline"

export default function AboutSection() {
   return(  
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="relative group text-4xl w-fit mx-auto text-center font-bold pb-2 mb-6 cursor-default">
            Sobre mim
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-yellow-400 group-hover:w-full transition-all duration-300 ease-out"></span>
        </h2>
        <div className="flex gap-6 mx-auto">
            <div className="">
                <h1 className="text-xl font-bold mb-4">Minha Jornada</h1>
                <Timeline />
            </div>
            <div className="">
                <h1 className="text-xl font-bold mb-4">Minhas Habilidades</h1>
                <div className="flex gap-6">
                    {/* Usar um map para o card de habilidades */}
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
      </div>
    </section>
   )
}