import Navigation from '@/components/Navigation';
import ProcessSection from '@/components/ProcessSection';
import StatsSection from '@/components/StatsSection';
import DesignationsSection from '@/components/DesignationsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { TrendingUp, PiggyBank, Shield, FileText, Calculator, Briefcase, Home as HomeIcon, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const detailedServices = [
  {
    icon: TrendingUp,
    title: 'Wealth Management',
    items: ['Portfolio diversification', 'Tax-loss harvesting', 'Risk management'],
  },
  {
    icon: Calculator,
    title: 'Retirement Planning',
    items: ['RRSP/RRIF optimization', 'Pension maximization', 'Healthcare planning'],
  },
  {
    icon: TrendingUp,
    title: 'Tax Planning',
    items: ['Tax structure optimization', 'Capital gains minimization', 'Income splitting strategies'],
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    items: ['Trust structure optimization', 'Estate tax minimization', 'Charitable giving strategies'],
  },
  {
    icon: Briefcase,
    title: 'Business Services',
    items: ['Business succession planning', 'Corporate financing', 'Executive compensation strategies'],
  },
  {
    icon: Shield,
    title: 'Insurance Planning',
    items: ['Coverage analysis', 'Protection strategies', 'Policy optimization'],
  },
  {
    icon: Heart,
    title: 'Charitable Giving',
    items: ['Tax-efficient donation strategies', 'Foundation planning', 'Legacy planning'],
  },
  {
    icon: HomeIcon,
    title: 'Mortgage Services',
    items: ['Strategic financing', 'Rate optimization', 'Real estate planning'],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/30 via-primary/15 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border" data-testid="text-services-badge">
                Comprehensive Financial Planning
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight" data-testid="text-services-hero-title">
              Expert Financial Services in Vancouver, BC
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-services-hero-description">
              Fee-only financial advisors specializing in comprehensive planning for high-net-worth individuals and families. Over 3,000 clients served with proven results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-detailed-services-title">
              Our Service Offerings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-detailed-services-description">
              Comprehensive solutions tailored to your unique financial situation
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {detailedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 hover-elevate transition-all duration-200"
                  data-testid={`accordion-service-${index}`}
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                      <span className="text-lg font-semibold text-left">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 mt-4 ml-14">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-foreground mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      <StatsSection />
      <ProcessSection />
      <DesignationsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
