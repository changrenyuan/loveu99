"use client";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MusicPlayerProps {
  src: string; // 音乐文件路径
}

export default function MusicPlayer({ src }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error("播放失败，请检查文件路径或浏览器限制:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <audio ref={audioRef} src={src} loop />

      <motion.button
        onClick={togglePlay}
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-md shadow-lg border border-red-200 text-2xl ${isPlaying ? 'opacity-100' : 'opacity-60'}`}
      >
        {isPlaying ? '🎵' : '🔇'}
      </motion.button>

      {/* 简单的气泡提示 */}
      {!isPlaying && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-14 top-3 text-xs bg-red-400 text-white px-2 py-1 rounded-md whitespace-nowrap"
        >
          点击播放音乐
        </motion.span>
      )}
    </div>
  );
}
