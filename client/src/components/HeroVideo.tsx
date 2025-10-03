export default function HeroVideo() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <video
            src="/videos/coins-hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
            aria-label="Financial Success Hero Video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
