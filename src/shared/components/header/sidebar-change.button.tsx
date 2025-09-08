'use client'

import {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";
import {motion} from "framer-motion";

const SidebarChangeButton = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const target = document.getElementById("global-sidebar");

        const valueToRemove = (!open ? "block" : "hidden")
        const value = (open ? "block" : "hidden")

        target?.classList.add(value)
        target?.classList.remove(valueToRemove)

    },[open])

    return (
        <button onClick={() => setOpen(prev => !prev)}>
            <motion.div
                key={open ? "x" : "menu"}
                initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
            >
                {open ? <X size={40} /> : <Menu size={40} />}
            </motion.div>
        </button>
    );
};

export default SidebarChangeButton;