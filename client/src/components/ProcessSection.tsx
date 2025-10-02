import { Search, Lightbulb, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'We start by understanding your financial goals, current situation, and long-term objectives.',
  },
  {
    number: 2,
    icon: Lightbulb,
    title: 'Strategy Development',
    description: 'Our experts craft a personalized financial plan tailored to your unique needs and circumstances.',
  },
  {
    number: 3,
    icon: Rocket,
    title: 'Implementation',
    description: 'We put your plan into action with precision and care, coordinating all necessary steps.',
  },
  {
    number: 4,
    icon: BarChart,
    title: 'Ongoing Management',
    description: 'Regular reviews and adjustments ensure your plan stays aligned with your evolving goals.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-process-title">
            Our Proven 4-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-description">
            A systematic approach to building and preserving your wealth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative" data-testid={`card-process-${step.number}`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center text-background text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {step.number < 4 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border -z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
