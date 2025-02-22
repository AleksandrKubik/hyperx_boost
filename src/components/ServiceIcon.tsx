// src/components/ServiceIcon.tsx
"use client";

import { motion } from "framer-motion";

interface ServiceIconProps {
    id: string;
    isSelected: boolean;
    onClick: () => void;
}

export const ServiceIcon = ({ id, isSelected, onClick }: ServiceIconProps) => {
    return (
        <motion.div
            layoutId={`service-icon-${id}`}
            onClick={onClick}
            initial={{ scale: 1 }}
            animate={isSelected ? { scale: 2, transition: { duration: 0.5 } } : {}}
            exit={{ opacity: 0 }}
            style={{ cursor: "pointer" }}
        >
            {/* Здесь содержимое иконки */}
            <img src={`/icons/${id}.svg`} alt={id} />
        </motion.div>
    );
};