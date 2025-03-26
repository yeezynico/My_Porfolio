import './card_techno.css'

export default function CardLogo({icon}) {
    return (
        <>
            <div className="relative w-50 h-50 max-[1246px]:w-40 max-[1245px]:h-40 max-[640px]:w-30 max-[640px]:h-30 bg-segondaire rounded-2xl flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl custom-border"></div>
                <div className="relative">
                    {icon}
                </div>
            </div>
        </>
    );
}