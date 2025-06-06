import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Input } from "@repo/ui/components/input";
import { Textarea } from "@repo/ui/components/textarea";

const AboutContactSection = () => {
  return (
    <>
      {/* About Us Section */}
      <section id="sobre-nosotros" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                <span className="gradient-text">
                  Más de 15 años conectando el Perú
                </span>
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Desde 2008, Reserbus ha sido líder en transporte terrestre de
                pasajeros, conectando más de 80 destinos en todo el Perú con la
                mejor flota de autobuses y el servicio más confiable del país.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                  <span>Elige entre las mejores empresas de transporte</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                  <span>Usa el medio de pago que prefieras</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                  <span>Rutas a más de 80 destinos en el país</span>
                </li>
              </ul>
              <Button size="lg">Conoce Más Sobre Nosotros</Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Buses modernos"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 text-primary-foreground">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              <span className="gradient-text">Contáctanos</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-semibold">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-primary">📍</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Oficina Central</h4>
                    <p className="text-muted-foreground">
                      Av. Javier Prado Este 4200, San Borja, Lima, Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-primary">📞</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Teléfono</h4>
                    <p className="text-muted-foreground">+51 1 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-primary">✉️</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Email</h4>
                    <p className="text-muted-foreground">
                      contacto@reserbus.pe
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-primary">🕒</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Horario de Atención</h4>
                    <p className="text-muted-foreground">
                      Lun - Dom: 6:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Input placeholder="Nombre" />
                  <Input placeholder="Email" />
                </div>
                <Input placeholder="Asunto" />
                <Textarea placeholder="Mensaje" rows={5} />
                <Button className="w-full">Enviar Mensaje</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContactSection;
