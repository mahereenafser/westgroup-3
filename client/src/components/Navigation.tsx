import { Home, Briefcase, Calculator, FileText, Users, Mail, Phone } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

export default function Navigation() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'About', url: '/about', icon: Users },
    { name: 'Calculators', url: '/calculator', icon: Calculator },
    { name: 'Blog', url: '/blog', icon: FileText },
    { name: 'Contact', url: '/contact', icon: Mail },
  ];

  return <NavBar items={navItems} />;
}
