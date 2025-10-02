import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Boxes } from '@/components/ui/background-boxes';

export default function Hero() {
  return (
    <section className="h-screen relative w-full overflow-hidden bg-slate-50 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-50 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border" data-testid="text-badge">
                Fee-Only Fiduciary Advisors
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight" data-testid="text-hero-title">
              Build Wealth Beyond Limits
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mx-auto" data-testid="text-hero-description">
              Comprehensive financial planning for high-net-worth individuals and families in Vancouver, BC. Over 3,000 clients served with tax-efficient expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" data-testid="button-get-started">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-learn-more">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-foreground" data-testid="text-stat-clients">3000+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground" data-testid="text-stat-rating">A+</div>
                <div className="text-sm text-muted-foreground">BBB Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground" data-testid="text-stat-experience">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
