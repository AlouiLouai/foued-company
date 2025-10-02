"use client";

import Image from "next/image";
import { Service } from "@/lib/services";
import { motion } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded-lg shadow-2xl w-[90vw] h-[90vh] max-w-6xl max-h-[90vh] relative overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-full h-[60%] mb-6"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-4 text-gray-900 leading-tight"
        >
          {service.title}
        </motion.h2>
        {service.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-700 leading-relaxed mb-6"
          >
            {service.description}
          </motion.p>
        )}
        <button
          onClick={onClose}
          className="bg-transparent hover:bg-gray-100 text-primary font-semibold py-2 px-4 border border-primary rounded"
        >
          <ArrowLeft size={30} />
        </button>
      </motion.div>
    </div>
  );
}
