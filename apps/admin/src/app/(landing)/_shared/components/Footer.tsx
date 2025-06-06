const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  R
                </span>
              </div>
              <span className="text-xl font-bold text-primary">Reserbus</span>
            </div>
            <p className="mb-4 text-muted-foreground">
              Tu compañía de confianza para viajar por todo el Perú de forma
              cómoda y segura.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                📘 Facebook
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                🐦 Twitter
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                📷 Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Reservas Online
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Horarios
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Tarifas
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Equipaje
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Ayuda</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Cancelaciones
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Cambios
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Reserbus. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex items-center space-x-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Métodos de pago:</span>
              <span>💳 💰 🏦</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
