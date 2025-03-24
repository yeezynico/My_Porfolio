import '../../App.css'

export default function Biographie() {
    return (
        <>
            {/* TODO biographie*/}
            <div className="flex justify-center items-center gap-3">
                <div className="w-5 h-5 bg-perso-vert rounded-full"></div>
                <h2 id="À-propos" className="text-2xl font-bold mt-15 mb-15">À Propos de moi :</h2>
            </div>

            <section className="w-full flex justify-evenly items-center mb-25 flex-wrap">

                <div className="relative">
                    <div className="max-w-sm p-6 border border-gray-400 rounded-md bg-secondaire text-white p-16 relative z-20">
                        <h2>Avant :</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. ng elit. Consequuntur nemo veritatis perferendis quasi amet, repudiandae commodi, ab quas nobis ea voluptatibus totam harum cupiditate dolorum! Veritatis quis ad omnis necessitatibus. Consequuntur nemo veritatis perferendis quasi amet, repudiandae commodi, ab quas nobis ea voluptatibus totam harum cupiditate dolorum! Veritatis quis ad omnis necessitatibus.</p>
                    </div>
                    <div className="absolute -inset-1 rounded-md blur-sm bg-perso-vert z-10"></div>
                </div>
                <div className="relative">
                    <div className="max-w-sm p-6 border border-gray-400 rounded-md bg-secondaire text-white p-16 relative z-20">
                        <h2>actuellement :</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. ng elit. Consequuntur nemo veritatis perferendis quasi amet, repudiandae commodi, ab quas nobis ea voluptatibus totam harum cupiditate dolorum! Veritatis quis ad omnis necessitatibus. Consequuntur nemo veritatis perferendis quasi amet, repudiandae commodi, ab quas nobis ea voluptatibus totam harum cupiditate dolorum! Veritatis quis ad omnis necessitatibus.</p>
                    </div>
                    <div className="absolute -inset-1 rounded-md blur-md bg-perso-vert z-10"></div>
                </div>
                <div className="relative">
                    <div className="max-w-sm p-6 border border-gray-400 rounded-md bg-secondaire text-white p-16 relative z-20">
                        <h2>Après :</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. ng elit. Consequuntur nemo veritatis perferendis quasi amet, repudiandae commodi, ab quas nobis ea voluptatibus totam harum cupiditate dolorum! Veritatis quis ad omnis necessitatibus. Consequuntur nemo veritatis perferendis quasi amet, repudiandae commodi, ab quas nobis ea voluptatibus totam harum cupiditate dolorum! Veritatis quis ad omnis necessitatibus.</p>
                    </div>
                    <div className="absolute -inset-1 rounded-md blur-lg bg-perso-vert z-10"></div>
                </div>

            </section>

            <div className="bg-perso-vert w-full h-1 mt-12"></div>

        </>
    )
}