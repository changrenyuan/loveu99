import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "致我最爱的人",
  description: "写给你的话",
};

export default function LoveLetter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100 dark:from-purple-900 dark:via-pink-900 dark:to-purple-900">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-pulse">✨</div>
        <div className="absolute top-20 right-20 text-4xl animate-bounce">💕</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse">🌸</div>
        <div className="absolute bottom-40 right-10 text-6xl animate-bounce">💖</div>
        <div className="absolute top-1/2 left-5 text-3xl animate-pulse">✨</div>
        <div className="absolute top-1/3 right-5 text-4xl animate-bounce">🌟</div>
      </div>

      {/* 主容器 */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl">
          {/* 标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-4">
              致我最爱的人
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* 信件内容 */}
          <div className="bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
            <div className="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
              <p className="text-lg md:text-xl">
                你好，
              </p>

              <p className="text-lg md:text-xl">
                提笔写下这些话的时候，我的心里充满了对你的思念。这段时间以来，我一直在反思自己，也在想我们之间的点点滴滴。
              </p>

              <p className="text-lg md:text-xl">
                我知道自己有很多不足，可能有时候不够细心，不够体贴，甚至做了一些让你不开心的事。但我想告诉你，你是我在这个世界上最在乎的人，没有任何事情比失去你更让我害怕。
              </p>

              <p className="text-lg md:text-xl">
                和你在一起的每一天都是那么美好，你的笑容、你的声音、你的一切都深深印在我心里。那些温暖的时光，是我生命中最珍贵的回忆。
              </p>

              <p className="text-lg md:text-xl">
                我愿意为你改变，为你成为更好的人。我知道这需要时间，需要努力，但只要能重新走到你身边，我愿意付出一切。
              </p>

              <p className="text-lg md:text-xl">
                如果你还愿意给我一个机会，我会用行动证明我的真心。如果你需要时间思考，我会一直在这里等你。
              </p>

              <p className="text-lg md:text-xl">
                不管怎样，我希望你能知道，你在我心里永远占据着最重要的位置。
              </p>

              <p className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mt-8">
                爱你的人
              </p>
            </div>
          </div>

          {/* 底部心形装饰 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
              <span className="text-5xl">❤️</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
