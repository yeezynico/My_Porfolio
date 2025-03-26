import './nav.css'
import '../../App.css'

export default function BtnNav({props}) {
    return (
        <>
            <button className='cursor-pointer'>
                <p>{props}</p>
                <div id="clip">
                    <div id="leftTop" className="corner tektur"></div>
                    <div id="rightBottom" className="corner"></div>
                    <div id="rightTop" className="corner"></div>
                    <div id="leftBottom" className="corner"></div>
                </div>
                <span id="rightArrow" className="arrow"></span>
                <span id="leftArrow" className="arrow"></span>
            </button>
        </>
    )
}