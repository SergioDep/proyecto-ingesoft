import { Card, CardContent } from "@repo/ui/components/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      location: "Lima",
      comment:
        "Excelente servicio, buses muy cómodos y puntuales. Lo recomiendo totalmente para viajes largos.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Carlos Ruiz",
      location: "Cusco",
      comment:
        "La reserva online es muy fácil y el proceso de check-in súper rápido. Viajo frecuentemente con ellos.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Ana Martín",
      location: "Arequipa",
      comment:
        "WiFi gratis durante todo el viaje y asientos muy cómodos. Definitivamente mi opción favorita.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="gradient-text">
              Lo que dicen nuestros clientes
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Miles de viajeros confían en nosotros para sus desplazamientos
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="mb-4">{renderStars(testimonial.rating)}</div>

                <p className="italic text-muted-foreground">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
