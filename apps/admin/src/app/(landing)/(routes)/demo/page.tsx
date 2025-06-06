import MagicText from "@/app/(base)/_shared/components/ui-extended/magic-text";
import { ModeToggle } from "@/app/(base)/_shared/components/ui-extended/mode-toggle";

export const runtime = "edge";

export default async function Page() {
  return (
    <main className="relative flex h-full flex-1 flex-col gap-4 overflow-y-auto p-4 lg:gap-6 lg:p-6">
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          <div className="rounded-full bg-purple-600 p-2 text-white">🚌</div>
          <h1 className="text-xl font-bold text-purple-600">
            <MagicText text="reserbus" />
          </h1>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:underline">
            Contacto
          </a>
          <a href="#" className="text-gray-700 hover:underline">
            Iniciar
          </a>
          <span>👤</span>
        </nav>
        <ModeToggle className="absolute right-0 top-0 m-4" />
      </header>

      <section className="px-6 py-10 text-center">
        <h2 className="mb-4 text-4xl font-bold text-purple-600">
          encuentra fácil, viaja fácil
        </h2>
        <p className="mb-10 text-gray-600">
          Llega a tu destino en el bus que necesites, cuando lo necesites y al
          mejor precio
        </p>

        <div className="mx-auto flex max-w-5xl items-center space-x-4 rounded-full border bg-white px-6 py-4 shadow-md">
          <input
            type="text"
            placeholder="Agregue un lugar..."
            className="w-1/4 border-r px-4 py-2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Agregue un lugar..."
            className="w-1/4 border-r px-4 py-2 focus:outline-none"
          />
          <input
            type="date"
            className="w-1/4 border-r px-4 py-2 focus:outline-none"
          />
          <input
            type="date"
            className="w-1/4 border-r px-4 py-2 focus:outline-none"
          />
          <button className="rounded-full bg-purple-600 p-2 text-lg text-white">
            🔍
          </button>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-10">
          <div className="flex justify-center">
            <img
              src="https://undraw.co/api/illustrations/random?style=twoColor&amp;primary=8b5cf6&amp;secondary=000000"
              alt="Ilustración de viaje"
              className="w-80"
            />
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold">Un viaje a tu gusto</h3>
            <p className="mb-4 text-gray-700">
              Reserbus te facilita el proceso de reservar un asiento sin esperar
              largas colas o papeleo. Reserva desde la comodidad de tu casa de
              la manera más rápida, práctica y segura.
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Elige entre las mejores empresas de transporte</li>
              <li>Usa el medio de pago que prefieras</li>
              <li>Rutas a más de 80 destinos en el país.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
