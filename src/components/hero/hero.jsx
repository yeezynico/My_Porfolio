import BtnNav from "../nav/btn_nav";
import './hero.css';

export default function Hero() {
    return (
        <>
            <div id="hero" className="relative">
                <div className="flex flex-col items-center">
                    <div className="w-60 h-60 max-[413px]:w-35 max-[413px]:h-35 max-[413px]:w-35 max-[413px]:h-35 max-[777px]:w-45 max-[777px]:h-45 rounded-full overflow-hidden mt-35 ">
                        <img src="profil.jpg" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute w-50 h-50 animation max-[904px]:w-40 max-[904px]:h-40 max-[777px]:w-30 max-[777px]:h-30 max-[546px]:w-20 max-[546px]:h-20 bg-perso-vert rounded-full blur-3xl top-[20%] left-[10%]"></div>
                    <div className="flex flex-col sm:flex-row sm:gap-4 text-center sm:text-left items-center sm:items-start">
                        <h1 className="text-4xl sm:text-3xl font-bold mt-7 tektur">Nicolas</h1>
                        <h1 className="text-4xl sm:text-3xl font-bold mt-7 text-green-300 tektur">Vanbreusegem</h1>
                    </div>
                    <p className="text-xl sm:text-lg mt-4 mb-6 raleway text-center">Développeur Web FullStack junior</p>
                    <div className="absolute w-50 h-50 animation max-[904px]:w-40 max-[904px]:h-40 max-[777px]:w-30 max-[777px]:h-30 max-[546px]:w-20 max-[546px]:h-20 bg-green-400 rounded-full blur-3xl top-[50%] left-[78%] max-[777px]:left-[78%] max-[370px]:left-[75%]"></div>

                    <div className="w-full flex justify-evenly mt-8">
                        <a href="https://www.linkedin.com/in/nicolas-vanbreusegem-569709325/" target="_blank"><BtnNav props="Linkedin" /></a>
                        <a href="CV_alternance.pdf" download="CV_Nicolas_Vanbreusegem"><BtnNav props="Cv" /></a>
                    </div>

                    <div className="bg-perso-vert w-full h-1 mt-12"></div>
                </div>
            </div>
        </>
    );
}
