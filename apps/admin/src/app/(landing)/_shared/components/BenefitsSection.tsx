import { Card, CardContent } from "@repo/ui/components/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🚌",
      title: "Buses Modernos",
      description:
        "Flota renovada con tecnología de última generación y máximo confort",
    },
    {
      icon: "📶",
      title: "WiFi Gratuito",
      description:
        "Mantente conectado durante todo tu viaje con internet de alta velocidad",
    },
    {
      icon: "🛏️",
      title: "Asientos Cómodos",
      description:
        "Asientos reclinables con espacio extra para piernas y máximo confort",
    },
    {
      icon: "🧳",
      title: "Equipaje Incluido",
      description:
        "Transporte gratuito de equipaje de mano y bodega sin restricciones",
    },
    {
      icon: "🔒",
      title: "Viajes Seguros",
      description:
        "Conductores certificados y vehículos con todos los permisos de seguridad",
    },
    {
      icon: "💳",
      title: "Pago Flexible",
      description:
        "Múltiples métodos de pago: tarjeta, efectivo, transferencia y más",
    },
  ];

  return (
    <section id="servicios" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="gradient-text">Un viaje a tu gusto</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Reserbus te facilita el proceso de reservar un asiento sin esperar
            largas colas o papeleo. Reserva desde la comodidad de tu casa de la
            manera más rápida, práctica y segura.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-primary">500+</h3>
              <p className="text-muted-foreground">Rutas Disponibles</p>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-primary">98%</h3>
              <p className="text-muted-foreground">Satisfacción del Cliente</p>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-primary">1M+</h3>
              <p className="text-muted-foreground">Pasajeros Felices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
