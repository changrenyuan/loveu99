"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoveLetterPage() {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const fullText: string = "在你离开的日子里，我才发现生活中到处都是你的影子。我想念我们一起走过的街道，想念你的笑容。这份网页是我亲手为你写的代码，每一行都代表我的思念。希望能给我一个机会，让我们重新开始，好吗？";

  // 打字机逻辑
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 100); // 调整打字速度
      return () => clearTimeout(timeout);
    } else {
      setIsFinished(true);
    }
  }, [displayedText, fullText]);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-6">
      {/* 顶部漂浮的心形装饰 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        className="absolute top-10 text-red-300 text-6xl"
      >
        ❤
      </motion.div>

      {/* 主体信件卡片 */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-white"
      >
        <motion.h1 
          className="text-3xl font-bold text-red-500 mb-6 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          致 [她的名字]
        </motion.h1>

        <div className="text-gray-700 text-lg leading-loose min-h-[160px] font-medium">
          {displayedText}
          {!isFinished && (
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-6 bg-red-400 ml-1 align-middle"
            />
          )}
        </div>

        {/* 底部互动部分 */}
        <AnimatePresence>
          {isFinished && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 flex flex-col items-center"
            >
              <p className="text-sm text-gray-400 mb-4 italic">—— 永远爱你的 [你的名字]</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: ["0px 0px 0px rgba(239, 68, 68, 0)", "0px 0px 20px rgba(239, 68, 68, 0.4)", "0px 0px 0px rgba(239, 68, 68, 0)"] 
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-10 rounded-full transition-colors"
                onClick={() => alert("我一直在等你消息。")}
              >
                点亮我的心 ❤️
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 底部装饰 */}
      <footer className="mt-12 text-red-400/60 text-sm">
        Made with love & code
      </footer>
    </main>
  );
}