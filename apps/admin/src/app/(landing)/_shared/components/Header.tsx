"use client";

import { useState } from "react";
import { User } from "lucide-react";

import { Button } from "@repo/ui/components/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-bold text-primary-foreground">
                R
              </span>
            </div>
            <span className="text-xl font-bold text-primary">Reserbus</span>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            <a
              href="#inicio"
              className="text-foreground transition-colors hover:text-primary"
            >
              Inicio
            </a>
            <a
              href="#rutas"
              className="text-foreground transition-colors hover:text-primary"
            >
              Rutas
            </a>
            <a
              href="#servicios"
              className="text-foreground transition-colors hover:text-primary"
            >
              Servicios
            </a>
            <a
              href="#sobre-nosotros"
              className="text-foreground transition-colors hover:text-primary"
            >
              Sobre Nosotros
            </a>
            <a
              href="#contacto"
              className="text-foreground transition-colors hover:text-primary"
            >
              Contacto
            </a>
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <Button variant="ghost" size="sm">
              <User className="mr-2 h-4 w-4" />
              Iniciar Sesión
            </Button>
            <Button size="sm">Registrarse</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex h-6 w-6 flex-col items-center justify-center">
              <div
                className={`h-0.5 w-5 bg-foreground transition-all ${isMenuOpen ? "translate-y-1 rotate-45" : ""}`}
              ></div>
              <div
                className={`mt-1 h-0.5 w-5 bg-foreground transition-all ${isMenuOpen ? "opacity-0" : ""}`}
              ></div>
              <div
                className={`mt-1 h-0.5 w-5 bg-foreground transition-all ${isMenuOpen ? "-translate-y-1 -rotate-45" : ""}`}
              ></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border md:hidden">
            <nav className="space-y-2 py-4">
              <a
                href="#inicio"
                className="block py-2 text-foreground transition-colors hover:text-primary"
              >
                Inicio
              </a>
              <a
                href="#rutas"
                className="block py-2 text-foreground transition-colors hover:text-primary"
              >
                Rutas
              </a>
              <a
                href="#servicios"
                className="block py-2 text-foreground transition-colors hover:text-primary"
              >
                Servicios
              </a>
              <a
                href="#sobre-nosotros"
                className="block py-2 text-foreground transition-colors hover:text-primary"
              >
                Sobre Nosotros
              </a>
              <a
                href="#contacto"
                className="block py-2 text-foreground transition-colors hover:text-primary"
              >
                Contacto
              </a>
              <div className="space-y-2 pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                >
                  <User className="mr-2 h-4 w-4" />
                  Iniciar Sesión
                </Button>
                <Button size="sm" className="w-full">
                  Registrarse
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
