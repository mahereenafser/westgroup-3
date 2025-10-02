import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-ring">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6" data-testid="text-cta-title">
          Ready to Build Your Financial Future?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
          Schedule a complimentary consultation with our expert advisors and discover how we can help you achieve your financial goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="group" data-testid="button-cta-schedule">
            Schedule Consultation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" data-testid="button-cta-call">
            Call (604) 588-9688
          </Button>
        </div>
      </div>
    </section>
  );
}
