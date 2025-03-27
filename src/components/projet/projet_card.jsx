import './project_card.css'
import { FaGithub } from "react-icons/fa"

export default function Project_card({ src, alt, href, path, path_name, title, text}) {
    return (
        <>
            <div className="myCard">
                <div className="innerCard">
                    <div className="frontSide">
                        <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl"></img>
                    </div>
                    <div className="backSide">
                        <div className='flex gap-2'>
                            <div className=''><FaGithub size={30} className='text-backCard'/></div>
                            <a href={href} target="_blank" className='text-backCard'>Github</a>
                        </div>
                        <h2 className='text-backCard'>{title}</h2>
                        <p className='text-backCard'>{text}</p>
                        <a href={path} target="_blank" className='text-backCard'>{path_name}</a>
                    </div>
                </div>
            </div>
        </>
    )
}