'use client';

import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => (
    <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    </AnimatePresence>
);

export default PageTransition