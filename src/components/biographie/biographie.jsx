import '../../App.css'

export default function Biographie() {
    return (
        <section id="À-propos" className="pt-[60px]">
            <div className="flex justify-center items-center gap-3 mb-5">
                <div className="w-5 h-5 bg-perso-vert rounded-full"></div>
                <h2 className="text-2xl font-bold mt-15 mb-15 tektur">À propos de moi :</h2>
            </div>

            <section className="w-full flex justify-center mb-25">
                <div className="relative max-w-3xl w-full max-[781px]:max-w-2xl max-[693px]:max-w-xl max-[589px]:max-w-sm max-[414px]:w-90 max-[370px]:w-80">
                    <div className="p-6 border border-gray-400 rounded-md bg-secondaire text-white p-16 max-[693px]:p-8 max-[589px]:p-8 relative z-20" style={{ fontFamily: "'Smooch', sans-serif" }}>
                        <p>A 28 ans, je suis actuellement en reconversion pour travailler dans le milieu du développement web.</p>
                        <br />
                        <p>Je suis à la Web@academie à Epitech où je fais une formation de Développeur intégration web BAC+2.</p>
                        <p>J'ai pu acquérir les bases de plusieurs langages web (HTML, CSS, Javascript, PHP...), la gestion de bases de données avec MySql.</p>
                        <br />
                        <p>Je suis à la recherche d'une alternance à partir de septembre 2025, avec un rythme de 3 semaines en entreprise et 1 semaine à l'école.</p>
                        <br />
                        <p>Si le code parfait existait… c'est peut-être vous et moi.</p>
                    </div>
                    <div className="absolute -inset-1 rounded-md blur-sm bg-perso-vert"></div>
                </div>
            </section>

            <div className="bg-perso-vert w-full h-1 mt-12"></div>
        </section>
    )
}
