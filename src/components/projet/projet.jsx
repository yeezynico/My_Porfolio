import Project_card from "./projet_card"

export default function Projet() {
    return (
        <>
        <section id="Projet" className="pt-[40px]">

            <div className="flex justify-center items-center gap-3 mt-5 mb-5">
                <div className="w-5 h-5 bg-perso-vert rounded-full"></div>
                <h2 className="text-2xl font-bold mt-15 mb-15 tektur">Projets :</h2>
            </div>

            <div className="flex justify-center flex-wrap gap-26">
                <Project_card title="Puisssance 4 :" text="Création d'un site de jeu de puissance 4." src="puissance4.png" alt="puissance4" href='https://github.com/yeezynico/Puissance-4' path="https://puissance-4-two.vercel.app/" path_name="Lien vercel"/>
                <Project_card title="Chapatte :" text="Site pour acheter des photos de chat." src="chapate.png" alt="site de photo de chat" href='https://github.com/yeezynico/chapatte' />
                <Project_card title="Epitweet :" text="Reproduction du site X anciennement Twitter."src="epitweet.png" alt="site epitweet" href='https://github.com/yeezynico/Epitweet' />
                <Project_card title="Menu :" text="Ce site permet de voir les cartes des restaurateurs pour savoir ce que le restaurant propose au menu." src="menu.png" alt="site d'un menu" href='https://github.com/yeezynico/MENU_V2' />
                <Project_card text="projet en cours !" src="" alt="" />
            </div>
            <div className="bg-perso-vert w-full h-1 mt-12"></div>
        </section>

        </>
    )
}