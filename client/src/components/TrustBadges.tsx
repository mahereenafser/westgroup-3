"use client";

import { memo, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useMediaQuery } from '@/components/ui/3d-carousel';

const awards = [
  {
    name: 'BBB A+ Rating',
    image: '/awards/bbb-accredited.webp',
  },
  {
    name: 'MDRT Top of Table',
    image: '/awards/mdrt-logo.webp',
  },
  {
    name: 'ThreeBestRated',
    image: '/awards/three-best-rated.webp',
  },
  {
    name: 'Consumer Choice Award',
    image: '/awards/consumer-choice.webp',
  },
];

const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1] };
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };

const AwardsCarousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (award: typeof awards[0], index: number) => void;
    controls: any;
    cards: typeof awards;
    isCarouselActive: boolean;
  }) => {
    const isScreenSizeSm = useMediaQuery('(max-width: 640px)');
    const cylinderWidth = isScreenSizeSm ? 800 : 1200;
    const faceCount = cards.length;
    const faceWidth = isScreenSizeSm ? 200 : 250;
    const radius = cylinderWidth / (2 * Math.PI);
    const rotation = useMotionValue(0);
    const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`);

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <motion.div
          drag={isCarouselActive ? 'x' : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d',
          }}
          onDrag={(_, info) => isCarouselActive && rotation.set(rotation.get() + info.offset.x * 0.05)}
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((award, i) => (
            <motion.div
              key={`key-${award.name}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(award, i)}
            >
              <Card className="relative w-full h-full bg-card border-2 border-primary/20 hover:border-primary/40 transition-all overflow-hidden group flex flex-col">
                <div className="flex-1 p-4 flex items-center justify-center bg-white">
                  <motion.img
                    src={award.image}
                    alt={award.name}
                    layoutId={`img-${award.name}`}
                    className="pointer-events-none max-w-full max-h-full object-contain"
                    initial={{ filter: 'blur(4px)' }}
                    layout="position"
                    animate={{ filter: 'blur(0px)' }}
                    transition={transition}
                  />
                </div>
                <div className="p-3 bg-card border-t border-border">
                  <h3 className="text-foreground font-semibold text-sm text-center">{award.name}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);

export default function TrustBadges() {
  const [activeAward, setActiveAward] = useState<typeof awards[0] | null>(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();
  const cards = useMemo(() => awards, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCarouselActive) {
      interval = setInterval(() => {
        controls.start({
          rotateY: '-=60',
          transition: {
            duration: 2,
            ease: 'linear',
          },
        });
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCarouselActive, controls]);

  const handleClick = (award: typeof awards[0]) => {
    setActiveAward(award);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveAward(null);
    setIsCarouselActive(true);
  };

  return (
    <section className="py-20 md:py-32 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trusted & Awarded Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized for our commitment to client success and professional standards
          </p>
        </div>

        <motion.div layout className="relative">
          <AnimatePresence mode="sync">
            {activeAward && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                layoutId={`img-container-${activeAward.name}`}
                layout="position"
                onClick={handleClose}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-5 md:p-36"
                style={{ willChange: 'opacity' }}
                transition={transitionOverlay}
              >
                <Card className="relative max-w-2xl max-h-[80vh] overflow-hidden">
                  <motion.img
                    layoutId={`img-${activeAward.name}`}
                    src={activeAward.image}
                    alt={activeAward.name}
                    className="w-full h-full object-cover rounded-lg"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    style={{
                      willChange: 'transform',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09342B]/90 to-transparent flex items-end p-8">
                    <h3 className="text-white font-bold text-3xl">{activeAward.name}</h3>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-2xl">
            <AwardsCarousel
              handleClick={handleClick}
              controls={controls}
              cards={cards}
              isCarouselActive={isCarouselActive}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
