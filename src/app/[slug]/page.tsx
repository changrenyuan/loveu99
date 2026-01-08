"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingHearts from "@/components/FloatingHearts";
import Gallery from "@/components/Gallery";

// 导入 JSON 数据 (TypeScript 会自动识别其结构)
import clientsData from "../../data/clients.json";

// 定义单条客户数据的接口
interface ClientConfig {
  toName: string;
  fromName: string;
  message: string;
  music: string;
  photos: string[];
}

export default function ClientReconciliationPage() {
  const params = useParams();
  const slug = params.slug as string;

  // 根据 URL 的 slug 从 JSON 中获取对应数据
  // 注意：这里我们将 clientsData 断言为 Record 类型以便使用 string 索引
  const data = (clientsData as Record<string, ClientConfig>)[slug];

  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (data && displayedText.length < data.message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(data.message.slice(0, displayedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (data) {
      setIsFinished(true);
    }
  }, [displayedText, data]);

  // 如果输入的 URL 在 JSON 中找不到对应标识符
  if (!data) {
    return (
      <div className="flex flex-col h-screen items-center justify-center text-gray-400 bg-[#fff5f5]">
        <p className="text-4xl mb-4">404</p>
        <p>抱歉，此专属页面尚未配置或已过期。</p>
      </div>
    );
  }

  return (
    <main className="relative flex flex-col items-center min-h-screen p-6 overflow-y-auto bg-[#fff5f5]">
      <MusicPlayer src={data.music} />
      <FloatingHearts />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-20 max-w-xl w-full bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl z-10 border border-white"
      >
        <h1 className="text-3xl font-bold text-red-500 mb-8 text-center">
          致 {data.toName}
        </h1>

        <div className="text-gray-700 text-lg leading-[2] min-h-[160px] font-medium">
          {displayedText}
          {!isFinished && (
            <span className="inline-block w-1 h-6 bg-red-400 ml-1 animate-pulse align-middle" />
          )}
        </div>

        <AnimatePresence>
          {isFinished && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 flex flex-col items-end"
            >
              <p className="text-gray-500 italic">—— 永远守护你的 {data.fromName}</p>

              <div className="w-full mt-10 text-center">
                <button className="bg-red-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-red-600 transition-all">
                  我们要一直在一起 ❤️
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 相册部分：根据 JSON 中的图片动态加载 */}
      {isFinished && data.photos.length > 0 && (
        <div className="z-10 w-full flex justify-center pb-20">
          <Gallery images={data.photos} />
        </div>
      )}

      <footer className="my-8 text-red-300 text-xs z-10">
        Special Memory For You
      </footer>
    </main>
  );
}
