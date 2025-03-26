import Project_card from "./projet_card"

export default function Projet() {
    return (
        <>
        <section id="Projet" className="pt-[20px]">

            <div className="flex justify-center items-center gap-3 mt-5">
                <div className="w-5 h-5 bg-perso-vert rounded-full"></div>
                <h2 className="text-2xl font-bold mt-15 mb-15 tektur">Projet :</h2>
            </div>

            <div className="flex justify-center flex-wrap gap-26">
                <Project_card src="puissance4.png" alt="puissance4" href='https://github.com/yeezynico/Puissance-4' path="https://puissance-4-two.vercel.app/" path_name="Lien vercel"/>
                <Project_card src="chapate.png" alt="site de chat" />
                <Project_card src="epitweet.png" alt="site epitweet" />
                <Project_card src="menu.png" alt="site d'un menu" />
                <Project_card src="" alt="" />
            </div>
            <div className="bg-perso-vert w-full h-1 mt-12"></div>
        </section>

        </>
    )
}