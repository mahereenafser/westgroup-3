import { Award, Shield, Star, TrendingUp } from 'lucide-react';

const badges = [
  { icon: Award, label: 'BBB A+ Rating' },
  { icon: Star, label: 'MDRT Top of Table' },
  { icon: Shield, label: 'ThreeBestRated' },
  { icon: TrendingUp, label: 'Consumer Choice Award' },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                data-testid={`badge-${index}`}
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
