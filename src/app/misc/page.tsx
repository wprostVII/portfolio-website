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
                <h1 className="text-8xl px-5 font-['UbuntuL']">Miscellaneous</h1>
            </div>
            </motion.div>
            
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, ease: "easeInOut"}}>
            <div className="absolute p-5 font-['Comfortaa']">
            <h2 className="text-4xl font-black font-['UbuntuL']">wprostVII (pronounced vprost 7)</h2>
            <h2 className="text-2xl font-bold text-muted-foreground font-['UbuntuL']">Also known as Cement Mix or Prost</h2>
            <p><br/>
            <i>From a very young age, I have been drawing constantly during any spare time I get.<br/>
            Art is a crucial part of my identity and without it I wouldn't be my true self.</i><br/><br/>

            I am a young, self-taught artist under the age of 18 who is in full-time education.<br/>
            My main inspirations for my art are 2000s-2010s animes and furries.<br/>
            I use Clip Studio Paint on my laptop with a wacom intuos 4100 drawing tablet.
            <br/><br/>
            I really love to listen to Brutal Slam Metal, Splittercore, and Polish Punk.<br/>
            Postal 2, Half life 2, and BlackLight Retribution are my favourite games!
            </p>
            </div>
            </motion.div>
            </div>
        </div>
    );
};

export default page