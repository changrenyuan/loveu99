"use client";
import { motion } from "framer-motion";

const memories = [
  { url: "/memory1.jpg", caption: "第一次见面" },
  { url: "/memory2.jpg", caption: "一起看海" },
  { url: "/memory3.jpg", caption: "平淡的幸福" },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 w-full max-w-4xl">
      {memories.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="bg-white p-2 rounded-xl shadow-md"
        >
          <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100">
            {/* 提示：请将照片放入 public 文件夹，并替换 url */}
            <img
              src={item.url}
              alt={item.caption}
              className="object-cover w-full h-full"
              onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x300?text=Your+Memory")}
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-2 font-medium">{item.caption}</p>
        </motion.div>
      ))}
    </div>
  );
}
