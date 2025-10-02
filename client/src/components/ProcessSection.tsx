import { Search, Lightbulb, Rocket, BarChart } from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';

const timelineData = [
  {
    id: 1,
    title: 'Discovery & Analysis',
    date: 'Step 1',
    content: 'Comprehensive review of your current financial situation, goals, and risk tolerance.',
    category: 'Analysis',
    icon: Search,
    relatedIds: [2],
    status: 'completed' as const,
    energy: 100,
  },
  {
    id: 2,
    title: 'Strategy Development',
    date: 'Step 2',
    content: 'Custom financial strategy design based on your unique circumstances and objectives.',
    category: 'Planning',
    icon: Lightbulb,
    relatedIds: [1, 3],
    status: 'in-progress' as const,
    energy: 85,
  },
  {
    id: 3,
    title: 'Implementation',
    date: 'Step 3',
    content: 'Systematic implementation of your financial plan with careful attention to tax efficiency.',
    category: 'Action',
    icon: Rocket,
    relatedIds: [2, 4],
    status: 'in-progress' as const,
    energy: 70,
  },
  {
    id: 4,
    title: 'Ongoing Management',
    date: 'Step 4',
    content: 'Continuous monitoring, rebalancing, and strategy adjustments as your life evolves.',
    category: 'Ongoing',
    icon: BarChart,
    relatedIds: [3],
    status: 'pending' as const,
    energy: 60,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-background">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-process-title">
          Our Proven 4-Step Process
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-description">
          A systematic approach to building and preserving your wealth
        </p>
      </div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
}
