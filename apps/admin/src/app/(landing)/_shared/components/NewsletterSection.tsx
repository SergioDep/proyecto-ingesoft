"use client";

import { useState } from "react";

import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    // Here you would typically send the email to your backend
    setEmail("");
    alert("¡Gracias por suscribirte a nuestro newsletter!");
  };

  return (
    <section className="bg-gradient-to-r from-primary to-accent py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Recibe las mejores ofertas
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
          Suscríbete a nuestro newsletter y no te pierdas ninguna promoción
          especial, descuentos exclusivos y nuevas rutas.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto max-w-md">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Tu email aquí..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-white/30 bg-white/20 text-white placeholder:text-white/70"
            />
            <Button
              type="submit"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Suscribirse
            </Button>
          </div>
        </form>

        <p className="mt-4 text-sm opacity-80">
          No spam. Puedes darte de baja en cualquier momento.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
