"use client"
import { motion } from "motion/react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return(
    
        <div className="p-5 z-50 fixed bottom-0 left-0 right-0 w-full">
            <motion.dfn 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "mirror"}}>
            <FontAwesomeIcon icon={faTerminal} />
            </motion.dfn>

            <Link href="/" className="px-5 font-['Comfortaa']">Home</Link>
            <Link href="/portfolio" className="px-5 font-['Comfortaa']">Portfolio</Link>
            <Link href="/misc" className="px-5 font-['Comfortaa']">Misc</Link>
            
        </div>

    );
};

export {Navbar};