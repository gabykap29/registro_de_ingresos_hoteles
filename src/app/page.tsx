"use client";
import Card from "@/components/Card";
import TableIngresos from "@/components/TableIngresos";

export default function Home() {
  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        {/* Tarjetas */}
        <section className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card title="Personas" number={350000} />
            <Card title="Ingresos Hoy" number={3} />
            <Card title="Pendientes" number={100} />
          </div>
        </section>

        {/* Tabla */}
        <section>
          < TableIngresos />
        </section>
      </div>
    </main>
  );
}
