import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export default function CTASection() {
  const words = [
    {
      text: "Ready",
      className: "text-foreground",
    },
    {
      text: "to",
      className: "text-foreground",
    },
    {
      text: "Build",
      className: "text-foreground",
    },
    {
      text: "Your",
      className: "text-foreground",
    },
    {
      text: "Financial",
      className: "text-primary",
    },
    {
      text: "Future?",
      className: "text-primary",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <video
              src="/videos/coins-2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              aria-label="Financial Success Visualization"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Column - Card with Content */}
          <Card className="bg-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="mb-6">
                <TypewriterEffectSmooth
                  words={words}
                  className="justify-start"
                  cursorClassName="bg-primary"
                />
              </div>

              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-cta-description">
                Schedule a complimentary consultation with our expert advisors and discover how we can help you achieve your financial goals.
              </p>

              <div className="space-y-4">
                <Button size="lg" className="w-full group text-base" data-testid="button-cta-schedule">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button size="lg" variant="outline" className="w-full text-base" data-testid="button-cta-call">
                  <Phone className="mr-2 w-5 h-5" />
                  Call (604) 588-9688
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="font-semibold text-foreground">Fee-Only Fiduciary Advisors</span> - Your success is our only priority
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
