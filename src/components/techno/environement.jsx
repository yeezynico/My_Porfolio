import './card_techno.css'

export default function Card_environement({ icon }) {
    return (
        <>
            <div className="relative w-50 h-50  rounded-2xl flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl custom-environement"></div>
                <div className="relative">
                    {icon}
                </div>
            </div>
            
        </>
    );
}