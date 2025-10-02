import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center space-x-2 hover-elevate px-2 py-1 rounded-md transition-all duration-200" data-testid="link-home">
              <div className="text-xl font-bold text-primary">WestGroup</div>
            </a>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === item.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:6045889688" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2" data-testid="link-phone">
              <Phone className="w-4 h-4" />
              (604) 588-9688
            </a>
            <Button size="default" data-testid="button-contact">
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover-elevate"
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`block text-sm font-medium transition-colors hover:text-primary ${
                    location === item.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <a href="tel:6045889688" className="block text-sm text-muted-foreground hover:text-primary" data-testid="link-mobile-phone">
              <Phone className="w-4 h-4 inline mr-2" />
              (604) 588-9688
            </a>
            <Button size="default" className="w-full" data-testid="button-mobile-contact">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
