import BtnNav from "../nav/btn_nav"

export default function Hero() {
    return (
        <>
            <div id="hero" className="relative">
                <div className="flex flex-col items-center">
                    {/* TODO image responsive */}
                    <div className="w-60 h-60 max-[413px]:w-35 max-[413px]:h-35 rounded-full overflow-hidden mt-35">
                        <img src="profil.jpg" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    {/* TODO sphère responsive */}
                    <div className="absolute w-50 h-50 max-[413px]:w-25 max-[413px]:h-25 max-[413px]:bg-red-200 bg-perso-vert rounded-full blur-3xl max-[413px]:blur-sm top-[20%] max-[413px]:top-[10%] left-[10%]"></div>
                    {/* TODO titre et sous-titre */}
                    <div className="flex gap-6">
                    <h1 className="text-4xl font-bold mt-7">Nicolas</h1>
                    <h1 className="text-4xl font-bold mt-7 text-green-300">Vanbreusegem</h1>

                    </div>
                    <p className="text-lg mt-6 mb-8">Développeur Web FullStack junior</p>
                    {/* TODO sphère responsive */}
                    <div className="absolute w-50 h-50 max-[320px]:w-12 max-[413px]:h-12 max-[413px]:bg-red-200 bg-green-400 rounded-full blur-3xl top-[50%] left-[78%]  max-[413px]:top-[10%]  max-[413px]:left-[10%]"></div>

                    {/* TODO responsive*/}
                    <div className="w-full flex justify-evenly mt-8">
                        <BtnNav props="Linkedin"/>
                        <BtnNav props="Cv"/>
                    </div>

                    <div className="bg-perso-vert w-full h-1 mt-12"></div>

                </div>
            </div>
        </>
    )
}