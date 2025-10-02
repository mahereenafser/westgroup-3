import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const serviceAreas = [
    'Vancouver', 'Surrey', 'Burnaby', 'Richmond',
    'North Vancouver', 'West Vancouver', 'Coquitlam', 'Langley',
    'Delta', 'New Westminster', 'Fraser Valley'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">WestGroup Financial</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Fee-only fiduciary advisors providing comprehensive financial planning for high-net-worth individuals and families.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors" data-testid="link-footer-wealth">Wealth Management</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors" data-testid="link-footer-investment">Investment Management</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors" data-testid="link-footer-retirement">Retirement Planning</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors" data-testid="link-footer-tax">Tax Strategies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span data-testid="text-footer-address">Suite #210 – 2411 160 St, South Surrey, BC, V3Z 0C8</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:6045889688" className="hover:text-primary-foreground transition-colors" data-testid="link-footer-phone">
                  (604) 588-9688
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@westgroupfinancial.com" className="hover:text-primary-foreground transition-colors" data-testid="link-footer-email">
                  info@westgroupfinancial.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <div className="text-sm text-primary-foreground/80">
              <p className="leading-relaxed" data-testid="text-footer-areas">
                {serviceAreas.join(', ')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p data-testid="text-footer-copyright">
              © {new Date().getFullYear()} WestGroup Financial Management Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors" data-testid="link-footer-privacy">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors" data-testid="link-footer-terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
