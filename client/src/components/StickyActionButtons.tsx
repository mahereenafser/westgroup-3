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
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      <LiquidButton
        size="icon"
        onClick={handleCall}
        className="shadow-lg hover:shadow-xl transition-shadow border-2 border-foreground/20"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5 text-foreground stroke-[2.5] drop-shadow-[0_0_8px_rgba(216,249,184,0.6)]" />
      </LiquidButton>

      <LiquidButton
        size="icon"
        onClick={handleMessage}
        className="shadow-lg hover:shadow-xl transition-shadow border-2 border-foreground/20"
        aria-label="Send message"
      >
        <MessageCircle className="h-5 w-5 text-foreground stroke-[2.5] drop-shadow-[0_0_8px_rgba(216,249,184,0.6)]" />
      </LiquidButton>
    </div>
  );
}
