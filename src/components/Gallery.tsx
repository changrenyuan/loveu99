"use client";
import { motion } from "framer-motion";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 w-full max-w-2xl px-4">
      {images.map((url, index) => (
        <motion.div
          key={index}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          className="rounded-xl overflow-hidden shadow-lg border-4 border-white"
        >
          <img
            src={url}
            alt="Memory"
            className="w-full h-48 object-cover"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x300?text=Your+Memory")}
          />
        </motion.div>
      ))}
    </div>
  );
}
