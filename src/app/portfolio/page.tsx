"use client"
import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const page = () => {
    return(
        <div className="flex flex-col w-full relative h-[94vh]">
            <div className="flex items-center">
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, ease: "easeInOut"}}>
            <div className="absolute bottom-0 left-0">
                <h1 className="text-8xl px-5 font-['UbuntuL']">Portfolio</h1>
            </div>
            </motion.div>
            
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, ease: "easeInOut"}}>
            <div className="absolute p-5 font-['Comfortaa']">
                <p><b>Commission Prices:</b><br/>Pay what you want! <sub>You as the client get to pay as much regardless of what you order :3</sub>
                
                <br/><br/><b>Minimum:</b> $15 USD <sub>per artwork</sub>
                
                <br/><br/><b>I accept:</b> Paypal, cashapp, kofi, steam credit/games, robux
                </p>
            </div>
            </motion.div>
            </div>
        </div>
    );
};

export default page