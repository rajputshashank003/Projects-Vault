import { motion } from 'framer-motion';
import React from 'react'

export default function TypingEffect({text}) {
    const data = text.split("");
    return (
        <div className='text-sm text-gray-400'>
            {
                data.map((el, ind) => (
                    <motion.span
                        key={ind}
                        initial={{
                            opacity : 0,
                            filter : "blur(10px)"
                        }}
                        animate={{
                            opacity : 1,
                            filter : "blur(0px)"
                        }}
                        transition={{
                            delay : 0.03 * ind,
                        }}
                    >
                        {el}
                    </motion.span>
                ))
            }
        </div>
    )
}
