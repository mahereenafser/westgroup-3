import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, DollarSign, Target, Award } from 'lucide-react';

const stats = [
  {
    icon: DollarSign,
    value: '$47,000',
    label: 'Average Annual Tax Savings',
    color: 'text-chart-4',
  },
  {
    icon: TrendingUp,
    value: '23%',
    label: 'Average Tax Rate Reduction',
    color: 'text-chart-4',
  },
  {
    icon: Target,
    value: '18',
    label: 'Strategies Implemented',
    color: 'text-primary',
  },
  {
    icon: Award,
    value: '847%',
    label: 'ROI on Planning Fees',
    color: 'text-chart-4',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-stats-title">
            Real Results for Our Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-stats-description">
            Our proven approach delivers measurable value and peace of mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover-elevate transition-all duration-200" data-testid={`card-stat-${index}`}>
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`} data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
