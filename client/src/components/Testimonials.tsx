import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import amanImage from '@assets/generated_images/Tech_entrepreneur_professional_headshot_429f40d9.png';
import davidImage from '@assets/generated_images/Business_owner_professional_portrait_b295fbd0.png';
import sumeetImage from '@assets/generated_images/Investment_professional_headshot_portrait_bf9df8b6.png';

const testimonials = [
  {
    name: 'Aman Patel',
    designation: 'Tech Entrepreneur',
    src: amanImage,
    quote: 'The professional service and financial clarity provided by WestGroup has been exceptional. They truly understand the needs of entrepreneurs and have helped me optimize my wealth strategy.',
  },
  {
    name: 'David Lau',
    designation: 'Business Owner',
    src: davidImage,
    quote: 'The personalized planning and significant tax savings have exceeded my expectations. WestGroup\'s expertise has been invaluable in growing and protecting my wealth.',
  },
  {
    name: 'Sumeet Badhan',
    designation: 'Investment Professional',
    src: sumeetImage,
    quote: 'As an investment professional myself, I appreciate WestGroup\'s transparent fee-only approach. Their advice is unbiased and always in my best interest.',
  },
];

export default function Testimonials() {
  return (
    <section className="pt-10 pb-20 md:pt-12 md:pb-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-description">
            Trusted by thousands of high-net-worth individuals and families
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
