"use client";
import React, { useState } from "react";
import FormCarga from "@/components/FormCargaIngreso";
import FormDatosPersona from "@/components/FormCargaPersona";

const RegistrarIngresos: React.FC = () => {
  const [formCargaCompleted, setFormCargaCompleted] = useState(false);
  const [formDatosPersonaCompleted, setFormDatosPersonaCompleted] = useState(false);

  const handleFormCargaChange = (completed: boolean) => {
    setFormCargaCompleted(completed);
  };

  const handleFormDatosPersonaChange = (completed: boolean) => {
    setFormDatosPersonaCompleted(completed);
  };

  const isComplete = formCargaCompleted && formDatosPersonaCompleted;

  return (
    <main className="py-2 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-bold text-gray-800">Registro de Ingresos</h1>
          <button
            type="button"
            className={`bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 ${isComplete ? '' : 'opacity-50 cursor-not-allowed'}`}
            disabled={!isComplete}
          >
            Completar
          </button>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-6">
          {/* Tarjeta de Registro de Ingresos */}
          <div className="flex-1 bg-white shadow-lg rounded-lg border border-gray-300 p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Registrar Ingreso</h2>
            <FormCarga onCompletionChange={handleFormCargaChange} />
          </div>

          {/* Tarjeta de Datos de Persona */}
          <div className="flex-1 bg-white shadow-lg rounded-lg border border-gray-300 p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Datos de la Persona</h2>
            <FormDatosPersona onCompletionChange={handleFormDatosPersonaChange} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrarIngresos;
