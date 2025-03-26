import { VscVscode } from "react-icons/vsc";
import { FaUbuntu } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { SiInsomnia } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";


export const environements = [
    <div className='w-[140px] h-[140px] max-[640px]:w-[100px] max-[640px]:h-[100px]'>
        <VscVscode className='bg-environnement w-full h-full' />
    </div>,
    <div className='w-[140px] h-[140px] max-[640px]:w-[100px] max-[640px]:h-[100px]'>
        <FaUbuntu className='bg-environnement w-full h-full' />
    </div>,
    <div className='w-[140px] h-[140px] max-[640px]:w-[100px] max-[640px]:h-[100px]'>
        <FaGithub className='bg-environnement w-full h-full' />
    </div>,
    <div className='w-[140px] h-[140px] max-[640px]:w-[100px] max-[640px]:h-[100px]'>
        <SiInsomnia className='bg-environnement w-full h-full' />
    </div>,
    <div className='w-[140px] h-[140px] max-[640px]:w-[100px] max-[640px]:h-[100px]'>
        <FaTrello className='bg-environnement w-full h-full' />
    </div>,

]

export default environements