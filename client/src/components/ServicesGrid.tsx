import { TrendingUp, Shield, PiggyBank, FileText, Briefcase, Calculator, Building, Home } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
            Expert guidance across all aspects of wealth management and financial planning
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden p-8 md:p-12">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: 'url(/images/money-1.jpg)',
            }}
          />

          {/* Very dark blackish emerald green overlay */}
          <div className="absolute inset-0 bg-[#051910] opacity-70 z-[1]" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all duration-200 cursor-pointer group bg-card/95 backdrop-blur-sm"
                  data-testid={`card-service-${index}`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/40 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
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
    </section>
  );
}
