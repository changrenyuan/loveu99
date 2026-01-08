"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// 定义爱心的类型
interface Heart {
  id: number;
  x: number; // 初始水平位置
  duration: number; // 动画持续时间
  size: number; // 大小
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // 生成 15 个随机分布的爱心
    const initialHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // 0-100% 的宽度
      duration: 10 + Math.random() * 20, // 10-30秒完成一次漂浮
      size: 10 + Math.random() * 30, // 10-40px 大小
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", opacity: 0, x: `${heart.x}vw` }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.7, 0],
            x: `${heart.x + (Math.random() * 10 - 5)}vw`, // 轻微摆动
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ fontSize: heart.size }}
          className="absolute text-red-200"
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
}
