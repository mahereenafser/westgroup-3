import { Badge } from '@/components/ui/badge';

const designations = [
  { abbr: 'CFP®', full: 'Certified Financial Planner' },
  { abbr: 'CFA', full: 'Chartered Financial Analyst' },
  { abbr: 'PFP', full: 'Personal Financial Planner' },
  { abbr: 'FMA', full: 'Financial Management Advisor' },
];

export default function DesignationsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-designations-title">
            Professional Designations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-designations-description">
            Our advisors hold the highest professional credentials in the industry
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {designations.map((designation, index) => (
            <div
              key={index}
              className="group hover-elevate transition-all duration-200 p-6 rounded-xl border border-border bg-card cursor-pointer"
              data-testid={`card-designation-${index}`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {designation.abbr}
                </div>
                <div className="text-sm text-muted-foreground">{designation.full}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
