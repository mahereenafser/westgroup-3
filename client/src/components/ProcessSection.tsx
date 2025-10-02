import { Search, Lightbulb, Rocket, BarChart } from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';

const timelineData = [
  {
    id: 1,
    title: 'Discovery',
    date: 'Step 1',
    content: 'We start by understanding your financial goals, current situation, and long-term objectives.',
    category: 'Analysis',
    icon: Search,
    relatedIds: [2],
    status: 'completed' as const,
    energy: 100,
  },
  {
    id: 2,
    title: 'Strategy',
    date: 'Step 2',
    content: 'Our experts craft a personalized financial plan tailored to your unique needs and circumstances.',
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
    content: 'We put your plan into action with precision and care, coordinating all necessary steps.',
    category: 'Action',
    icon: Rocket,
    relatedIds: [2, 4],
    status: 'in-progress' as const,
    energy: 70,
  },
  {
    id: 4,
    title: 'Management',
    date: 'Step 4',
    content: 'Regular reviews and adjustments ensure your plan stays aligned with your evolving goals.',
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
