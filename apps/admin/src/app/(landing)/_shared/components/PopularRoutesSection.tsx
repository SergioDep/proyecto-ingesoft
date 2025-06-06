import { Button } from "@repo/ui/components/button";
import { Card, CardContent } from "@repo/ui/components/card";

const PopularRoutesSection = () => {
  const routes = [
    {
      from: "Lima",
      to: "Cusco",
      duration: "20h 30m",
      price: "S/85",
      image:
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      from: "Lima",
      to: "Arequipa",
      duration: "16h 45m",
      price: "S/65",
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      from: "Cusco",
      to: "Puno",
      duration: "6h 15m",
      price: "S/35",
      image:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      from: "Lima",
      to: "Trujillo",
      duration: "8h 20m",
      price: "S/45",
      image:
        "https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      from: "Lima",
      to: "Huancayo",
      duration: "7h 10m",
      price: "S/38",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      from: "Arequipa",
      to: "Tacna",
      duration: "5h 30m",
      price: "S/30",
      image:
        "https://images.unsplash.com/photo-1544030592-4a6d5c8e1b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section id="rutas" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="gradient-text">Rutas Populares</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Descubre los destinos más solicitados y planifica tu próximo viaje
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, index) => (
            <Card
              key={index}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm opacity-90">{route.duration}</div>
                </div>
                <div className="absolute right-4 top-4">
                  <div className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                    Desde {route.price}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {route.from} → {route.to}
                    </h3>
                    <p className="text-muted-foreground">
                      Viajes diarios disponibles
                    </p>
                  </div>
                </div>
                <Button className="w-full">Ver Horarios</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Ver Todas las Rutas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularRoutesSection;
