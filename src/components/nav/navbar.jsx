// import { Link } from 'react-router-dom';
import './nav.css'
import BtnNav from './btn_nav'

export default function Nav() {

    return (
        <>
            <nav className='flex flex-wrap justify-around fixed left-0 right-0 z-90 bg-neutral-950/50 backdrop-blur-xs py-2'>
                <a href="#hero"> <BtnNav props="Accueil" /> </a>
                <a href="#À-propos"> <BtnNav props="À propos" /> </a>
                <a href="#Projet"> <BtnNav props="Projets" /> </a>
                <a href="#Techno"> <BtnNav props="Technos" /> </a>
                <a href="#Contact"> <BtnNav props="Contact" /> </a>
            </nav>
        </>
    )
}