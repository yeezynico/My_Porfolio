// import { Link } from 'react-router-dom';
import './nav.css'
import BtnNav from './btn_nav'

export default function Nav() {

    return (
        <>
            <nav className='bg-black flex justify-around fixed left-0 right-0 z-90'>
                <a href="#hero"> <BtnNav props="Accueil" /> </a>
                <a href="#À-propos"> <BtnNav props="À propos" /> </a>
                <a href="#Projet"> <BtnNav props="Projet" /> </a>
                <a href="#Techno"> <BtnNav props="Techno" /> </a>
                <a href="#Contact"> <BtnNav props="Contact" /> </a>
            </nav>
        </>
    )
}