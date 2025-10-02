import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import amanImage from '@assets/generated_images/Tech_entrepreneur_professional_headshot_429f40d9.png';
import davidImage from '@assets/generated_images/Business_owner_professional_portrait_b295fbd0.png';
import sumeetImage from '@assets/generated_images/Investment_professional_headshot_portrait_bf9df8b6.png';

const testimonials = [
  {
    name: 'Aman Patel',
    role: 'Tech Entrepreneur',
    image: amanImage,
    quote: 'The professional service and financial clarity provided by WestGroup has been exceptional. They truly understand the needs of entrepreneurs and have helped me optimize my wealth strategy.',
  },
  {
    name: 'David Lau',
    role: 'Business Owner',
    image: davidImage,
    quote: 'The personalized planning and significant tax savings have exceeded my expectations. WestGroup\'s expertise has been invaluable in growing and protecting my wealth.',
  },
  {
    name: 'Sumeet Badhan',
    role: 'Investment Professional',
    image: sumeetImage,
    quote: 'As an investment professional myself, I appreciate WestGroup\'s transparent fee-only approach. Their advice is unbiased and always in my best interest.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-description">
            Trusted by thousands of high-net-worth individuals and families
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`card-testimonial-${index}`}>
              <CardContent className="pt-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
