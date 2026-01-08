"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingHearts from '@/components/FloatingHearts';
import Gallery from '@/components/Gallery';
import MusicPlayer from '@/components/MusicPlayer';

export default function LoveLetterPage() {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showGallery, setShowGallery] = useState<boolean>(false);

  const fullText: string = "在你离开的日子里，我才发现生活中到处都是你的影子。我想念我们一起走过的街道，想念你的笑容。这份网页是我亲手为你写的代码，每一行都代表我的思念。希望能给我一个机会，让我们重新开始，好吗？";

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsFinished(true);
    }
  }, [displayedText]);

  return (
    <main className="relative flex flex-col items-center min-h-screen p-6 overflow-y-auto">
      {/* 背景音乐：请确保在 public 文件夹下有 bg-music.mp3 文件 */}
      <MusicPlayer src="/bg-music.mp3" />

      {/* 动态背景 */}
      <FloatingHearts />

      {/* 主信件卡片 */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-20 max-w-xl w-full bg-white/70 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white z-10"
      >
        <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">致 [她的名字]</h1>

        <div className="text-gray-700 text-lg leading-loose min-h-[160px]">
          {displayedText}
          {!isFinished && <span className="inline-block w-1 h-6 bg-red-400 ml-1 animate-pulse" />}
        </div>

        <AnimatePresence>
          {isFinished && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-10 text-center">
              {!showGallery ? (
                <button
                  onClick={() => setShowGallery(true)}
                  className="bg-red-500 text-white font-bold py-3 px-10 rounded-full hover:bg-red-600 transition-all"
                >
                  点击查看我们的回忆 ❤️
                </button>
              ) : (
                <p className="text-sm text-gray-400 italic">—— 永远爱你的 [你的名字]</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 延迟显示的相册 */}
      {showGallery && <Gallery />}

      <footer className="my-12 text-red-400/60 text-sm z-10">
        Waiting for you...
      </footer>
    </main>
  );
}
