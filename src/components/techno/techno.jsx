import CardLogo from "./card_techno"
import technos from "./asset_techno"
import Card_environement from "./environement"
import environements from "./asset_environnement"

export default function Techno() {
    return (
        <>
            <section id="Techno" className="pt-[40px]">

                <div className="flex justify-center items-center gap-3 mt-5">
                    <div className="w-5 h-5 bg-perso-vert rounded-full"></div>
                    <h2 className="text-2xl font-bold mt-15 mb-15 tektur">Technos :</h2>
                </div>
                <div className="flex justify-center flex-wrap gap-15 mr-5 ml-5">
                    {technos.map((techno, index) => <CardLogo icon={techno} key={index} />)}
                </div>

                {/* animation  */}
                {/* <div className="relative w-full">
                    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black backdrop-blur-md z-90"></div>
                    <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black backdrop-blur-md h-full z-90"></div>

                    <div className="marquee-container">
                        <div className="marquee-track">
                            {technos.concat(technos).map((techno) => (
                                <CardLogo icon={techno} />
                            ))}
                        </div>
                    </div>
                </div> */}
                {/* animation  */}


                <div className="flex justify-center items-center gap-3 mt-5">
                    <div className="w-5 h-5 dot rounded-full"></div>
                    <h2 className="text-2xl font-bold mt-15 mb-15 tektur">Environnements :</h2>
                </div>
                <div className="flex justify-center flex-wrap gap-15 mr-5 ml-5">
                    {environements.map((techno, index) => <Card_environement icon={techno} key={index} />)}
                </div>

                <div className="bg-perso-vert w-full h-1 mt-12"></div>
            </section>

        </>
    )
}