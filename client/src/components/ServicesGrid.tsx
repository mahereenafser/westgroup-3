import { TrendingUp, Shield, PiggyBank, FileText, Briefcase, Calculator, Building, Home, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

const services = [
  {
    icon: TrendingUp,
    title: 'Wealth Management',
    description: 'Portfolio diversification, tax-loss harvesting, and comprehensive risk management strategies.',
  },
  {
    icon: PiggyBank,
    title: 'Investment Management',
    description: 'Strategic asset allocation and portfolio optimization for long-term wealth growth.',
  },
  {
    icon: Shield,
    title: 'Insurance Planning',
    description: 'Comprehensive coverage analysis and protection strategies for you and your family.',
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    description: 'Trust structure optimization, estate tax minimization, and charitable giving strategies.',
  },
  {
    icon: Calculator,
    title: 'Retirement Planning',
    description: 'RRSP/RRIF optimization, pension maximization, and healthcare planning.',
  },
  {
    icon: TrendingUp,
    title: 'Tax Strategies',
    description: 'Tax structure optimization, capital gains minimization, and income splitting.',
  },
  {
    icon: Briefcase,
    title: 'Business Succession',
    description: 'Business succession planning, corporate financing, and executive compensation.',
  },
  {
    icon: Home,
    title: 'Mortgage Advisory',
    description: 'Strategic mortgage planning and financing solutions for your real estate needs.',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Section background image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: 'url(/images/money-1.jpg)',
            }}
          />

          {/* Dark green overlay on section */}
          <div className="absolute inset-0 bg-[#09342B]/60 z-[1]" />

          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" data-testid="text-services-title">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto" data-testid="text-services-description">
            Expert guidance across all aspects of wealth management and financial planning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="transition-all duration-300 cursor-pointer group bg-card/95 backdrop-blur-sm hover:scale-105 hover:shadow-2xl"
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#12664F]/30 flex items-center justify-center mb-4 group-hover:bg-[#12664F]/50 transition-colors">
                    <Icon className="w-6 h-6 text-[#12664F] group-hover:text-[#09342B]" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
          </div>
        </div>

        {/* View All Services Button - Outside the background image section */}
        <div className="flex justify-center mt-8">
          <LiquidButton
            size="xl"
            onClick={() => window.location.href = '/services'}
            className="shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all border-2 border-primary/30 bg-card/80 backdrop-blur-md group"
            aria-label="View All Our Services"
          >
            <span className="text-foreground font-semibold text-base">View All Our Services</span>
            <ArrowRight className="h-5 w-5 text-foreground stroke-[2.5] drop-shadow-[0_0_12px_rgba(216,249,184,0.8)] group-hover:translate-x-1 transition-transform" />
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
