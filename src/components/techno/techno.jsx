import CardLogo from "./card_techno"
import technos from "./asset_techno"
import Card_environement from "./environement"
import environements from "./asset_environnement"

export default function Techno() {
    return (
        <>
            <div className="flex justify-center items-center gap-3 mt-5">
                <div className="w-5 h-5 bg-perso-vert rounded-full"></div>
                <h2 id="Techno" className="text-2xl font-bold mt-15 mb-15">Techno :</h2>
            </div>
            <div className="flex justify-center flex-wrap gap-15 mr-5 ml-5">
                {technos.map((techno, index) => <CardLogo icon={techno} key={index} />)}
            </div>

            <div className="flex justify-center items-center gap-3 mt-5">
                <div className="w-5 h-5 dot rounded-full"></div>
                <h2 id="Techno" className="text-2xl font-bold mt-15 mb-15">Environment :</h2>
            </div>
            <div className="flex justify-center flex-wrap gap-15 mr-5 ml-5">
                {environements.map((techno, index) => <Card_environement icon={techno} key={index} />)}
            </div>

            <div className="bg-perso-vert w-full h-1 mt-12"></div>

        </>
    )
}