"use client";

import { memo, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useMediaQuery } from '@/components/ui/3d-carousel';

const awards = [
  {
    name: 'BBB Accredited',
    image: '/images/awards/bbb-accredited.webp',
    description: 'Better Business Bureau accreditation demonstrates our commitment to ethical business practices and superior customer service standards.',
  },
  {
    name: 'ThreeBestRated',
    image: '/images/awards/three-best-rated.webp',
    description: 'Recognized as one of the top three financial planning firms based on customer reviews, satisfaction, and service excellence.',
  },
  {
    name: 'MDRT Top of Table',
    image: '/images/awards/mdrt-logo.webp',
    description: "Million Dollar Round Table's most prestigious recognition, reserved for top 1% of financial professionals worldwide.",
  },
  {
    name: 'Consumer Choice Award',
    image: '/images/awards/consumer-choice.webp',
    description: 'Voted by consumers as an outstanding business demonstrating excellence in financial advisory services in our local market.',
  },
  {
    name: 'Top 100 Magazine',
    image: '/images/awards/top-100.webp',
    description: 'Featured in Top 100 Magazine for excellence in financial services and commitment to client success.',
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
              <div className="relative w-full h-full bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-border/20">
                <div className="h-20 p-2 flex items-center justify-center">
                  <motion.img
                    src={award.image}
                    alt={award.name}
                    layoutId={`img-${award.name}`}
                    className="pointer-events-none max-h-full w-auto object-contain"
                    initial={{ filter: 'blur(4px)' }}
                    layout="position"
                    animate={{ filter: 'blur(0px)' }}
                    transition={transition}
                  />
                </div>
                <div className="flex-1 p-3 bg-background/50 flex flex-col">
                  <h3 className="text-foreground font-semibold text-xs mb-1 text-center">{award.name}</h3>
                  <p className="text-muted-foreground text-[9px] leading-tight text-center">{award.description}</p>
                </div>
              </div>
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
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const cards = useMemo(() => awards, []);

  useEffect(() => {
    if (isCarouselActive && !isHovered) {
      controls.start({
        rotateY: -360,
        transition: {
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isCarouselActive, isHovered, controls]);

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
                <div className="relative max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="p-12 flex items-center justify-center bg-white">
                    <motion.img
                      layoutId={`img-${activeAward.name}`}
                      src={activeAward.image}
                      alt={activeAward.name}
                      className="max-h-64 w-auto object-contain"
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
                  </div>
                  <div className="p-8 bg-background/80 border-t border-border">
                    <h3 className="text-foreground font-bold text-2xl mb-3 text-center">{activeAward.name}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed text-center">{activeAward.description}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="relative h-[150px] md:h-[180px] w-full overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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
