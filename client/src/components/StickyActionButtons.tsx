'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

export default function StickyActionButtons() {
  const handleCall = () => {
    window.location.href = 'tel:+16045889688';
  };

  const handleMessage = () => {
    // Opens SMS on mobile, can be customized for web chat
    window.location.href = 'sms:+16045889688';
  };

  return (
    <div className="fixed right-6 bottom-24 sm:bottom-6 z-50 flex flex-col gap-4">
      <LiquidButton
        size="xl"
        onClick={handleCall}
        className="shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all border-2 border-primary/30 bg-card/80 backdrop-blur-md"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-foreground stroke-[2.5] drop-shadow-[0_0_12px_rgba(216,249,184,0.8)]" />
      </LiquidButton>

      <LiquidButton
        size="xl"
        onClick={handleMessage}
        className="shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all border-2 border-primary/30 bg-card/80 backdrop-blur-md"
        aria-label="Send message"
      >
        <MessageCircle className="h-6 w-6 text-foreground stroke-[2.5] drop-shadow-[0_0_12px_rgba(216,249,184,0.8)]" />
      </LiquidButton>
    </div>
  );
}
