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
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-stats-title">
            Real Results for Our Clients
          </h2>
        </div>

        {/* Background Image Container with Cards */}
        <div className="relative">
          {/* Background Image with Rounded Edges */}
          <div
            className="relative overflow-hidden rounded-3xl h-[500px] md:h-[600px]"
            style={{
              backgroundImage: 'url(/images/green-1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Optional overlay for better contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          </div>

          {/* Cards positioned at the bottom, half on/half off the image */}
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="text-center transition-all duration-300 hover:scale-110 animate-float shadow-xl hover:shadow-2xl"
                    data-testid={`card-stat-${index}`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
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
        </div>

        {/* Spacer to account for cards extending beyond image */}
        <div className="h-48 md:h-56" />
      </div>
    </section>
  );
}
