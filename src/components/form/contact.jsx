import { ContactUs } from "./testEmail"

export default function Contact() {
    return (
        <>
        <section id="Contact" className="pt-[20px]">

            <div className="relative">

                <div className="flex justify-center items-center gap-3 mt-9">
                    <div className="w-5 h-5 bg-perso-vert rounded-full"></div>
                    <h2 className="text-2xl font-bold mt-15 mb-15 tektur">Contact :</h2>
                </div>

                <div className="absolute w-50 h-50 animation max-[904px]:w-40 max-[904px]:h-40 max-[777px]:w-30 max-[777px]:h-30 max-[546px]:w-20 max-[546px]:h-20 bg-perso-vert rounded-full blur-3xl top-[20%] left-[10%]"></div>

                <ContactUs />

                <div className="absolute w-50 h-50 animation max-[904px]:w-40 max-[904px]:h-40 max-[777px]:w-30 max-[777px]:h-30 max-[546px]:w-20 max-[546px]:h-20 bg-green-400 rounded-full blur-3xl top-[60%]  left-[78%] max-[777px]:left-[78%] max-[370px]:left-[75%]"></div>

            </div>
        </section>
        </>
    )
}