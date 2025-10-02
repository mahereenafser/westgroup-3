import dashboardImage from '@assets/generated_images/Wealth_management_dashboard_interface_ca584d43.png';

export default function PortfolioDashboard() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio Growth Analytics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your wealth journey with comprehensive dashboard insights
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative transform hover:scale-105 transition-transform duration-500">
            <img
              src={dashboardImage}
              alt="Wealth Management Dashboard - Portfolio Growth"
              className="rounded-3xl shadow-2xl border-4 border-primary/30 w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-primary/20 to-accent/30 rounded-3xl mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-400/10 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
