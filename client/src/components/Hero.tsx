import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dashboardImage from '@assets/generated_images/Wealth_management_dashboard_interface_ca584d43.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary" data-testid="text-badge">
                Fee-Only Fiduciary Advisors
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight" data-testid="text-hero-title">
              Build Wealth{' '}
              <span className="text-primary">Beyond Limits</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl" data-testid="text-hero-description">
              Comprehensive financial planning for high-net-worth individuals and families in Vancouver, BC. Over 3,000 clients served with tax-efficient expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" data-testid="button-get-started">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-learn-more">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary" data-testid="text-stat-clients">3000+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary" data-testid="text-stat-rating">A+</div>
                <div className="text-sm text-muted-foreground">BBB Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary" data-testid="text-stat-experience">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block" data-testid="img-hero-dashboard">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <img
                src={dashboardImage}
                alt="Wealth Management Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
