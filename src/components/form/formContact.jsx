import './formContact.css'

export default function FormContact() {
    return (
        <>
            <div className="w-full flex justify-center items-center">

                <div className="w-100 max-w-sm p-6 bg-secondaire border border-green-300 rounded-lg shadow-sm">

                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label for="name" className="block mb-2 text-sm font-medium">Votre nom</label>
                            <input type="text" id="name" className="border border-green-300 text-sm rounded-lg focus:outline-1 focus:outline-offset-0 focus:outline-green-300 w-full p-2.5" placeholder="Nom"></input>
                        </div>

                        <div className="mb-5">
                            <label for="email" className="block mb-2 text-sm font-medium">Votre email</label>
                            <input type="text" id="email" className="border border-green-300 text-sm rounded-lg focus:outline-1 focus:outline-offset-0 focus:outline-green-300 w-full p-2.5" placeholder="Email"></input>
                        </div>

                        <label for="message" className="block mb-2 text-sm font-medium">Votre message</label>
                        <textarea id="message" rows="4" className="p-2.5 mb-10 w-full text-sm rounded-lg border border-green-300 focus:outline-1 focus:outline-offset-0 focus:outline-green-300" placeholder="votre message..."></textarea>
                    </form>

                    <div className="bg-perso-vert hover:bg-perso-vert text-center rounded-full cursor-pointer">
                        <button type="submit" >
                            <p className="text-sm font-medium text-black cursor-pointer">
                                Validé
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}