import './project_card.css'
import { FaGithub } from "react-icons/fa"

export default function Project_card({ src, alt, href, path, path_name }) {
    return (
        <>
            <div className="myCard">
                <div className="innerCard">
                    <div className="frontSide">
                        <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl"></img>
                    </div>
                    <div className="backSide">
                        <div className='flex gap-2'>
                            <div className=''><FaGithub size={30}/></div>
                            <a href={href} target="_blank">Github</a>
                        </div>
                        <a href={path} target="_blank">{path_name}</a>
                    </div>
                </div>
            </div>
        </>
    )
}