"use client";

import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Search } from "lucide-react";

import { Button } from "@repo/ui/components/button";
import { Calendar } from "@repo/ui/components/calendar";
import { Input } from "@repo/ui/components/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui/components/popover";
import { cn } from "@repo/ui/lib/utils";

const HeroSection = () => {
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/5"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="animate-fade-in-up mx-auto mb-12 max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            <span className="gradient-text">Encuentra fácil, viaja fácil</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Llega a tu destino en el bus que necesites, cuando lo necesites y al
            mejor precio
          </p>
        </div>

        <div className="animate-scale-in mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
              <div className="lg:col-span-1">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Origen
                </label>
                <Input
                  placeholder="Agrega un lugar..."
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="lg:col-span-1">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Destino
                </label>
                <Input
                  placeholder="Agrega un lugar..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="lg:col-span-1">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Fecha de ida
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !departureDate && "text-muted-foreground",
                      )}
                    >
                      {departureDate
                        ? format(departureDate, "dd/MM/yyyy", { locale: es })
                        : "dd/mm/aaaa"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="lg:col-span-1">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Fecha de vuelta
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !returnDate && "text-muted-foreground",
                      )}
                    >
                      {returnDate
                        ? format(returnDate, "dd/MM/yyyy", { locale: es })
                        : "dd/mm/aaaa"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex items-end lg:col-span-1">
                <Button className="h-10 w-full bg-primary hover:bg-primary/90">
                  <Search className="mr-2 h-4 w-4" />
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
