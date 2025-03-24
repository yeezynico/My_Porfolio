import FormContact from "./formContact"

export default function Contact() {
    return (
        <>
            <div className="relative">

                <div className="flex justify-center items-center gap-3 mt-5">
                    <div className="w-5 h-5 bg-perso-vert rounded-full"></div>
                    <h2 id="Contact" className="text-2xl font-bold mt-15 mb-15">Contact :</h2>
                </div>


                <div className="absolute w-50 h-50 max-[413px]:w-25 max-[413px]:h-25 max-[413px]:bg-red-200 bg-perso-vert rounded-full blur-3xl max-[413px]:blur-sm top-[10%] max-[413px]:top-[10%] left-[10%]"></div>

                <FormContact />

                <div className="absolute w-50 h-50 max-[320px]:w-12 max-[413px]:h-12 max-[413px]:bg-red-200 bg-green-400 rounded-full blur-3xl top-[60%] left-[78%]  max-[413px]:top-[10%]  max-[413px]:left-[10%]"></div>

            </div>
        </>
    )
}