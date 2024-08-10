"use client";
import React, { useState, useEffect } from "react";

interface FormCargaProps {
  onCompletionChange: (completed: boolean) => void;
}

const FormCarga: React.FC<FormCargaProps> = ({ onCompletionChange }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Aquí podrías agregar lógica para determinar si el formulario está completo
    // Verificar si todos los campos tienen valores
    const formElements = Array.from(document.querySelectorAll('#formCarga input, #formCarga textarea')) as (HTMLInputElement | HTMLTextAreaElement)[];
    const allFilled = formElements.every((input) => input.value.trim() !== '');
    setIsCompleted(allFilled);
    onCompletionChange(allFilled);
  }, [onCompletionChange]);

  return (
    <form id="formCarga" className="space-y-6">
      <div className="grid gap-4  sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <label htmlFor="fecha" className="mb-2 text-gray-700">Fecha</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label htmlFor="precedencia" className="mb-2 text-gray-700">Procedencia</label>
          <input
            type="text"
            id="precedencia"
            name="precedencia"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <label htmlFor="origen" className="mb-2 text-gray-700">Origen</label>
          <input
            type="text"
            id="origen"
            name="origen"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <label htmlFor="egreso" className="mb-2 text-gray-700">Egreso</label>
          <input
            type="date"
            id="egreso"
            name="egreso"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <label htmlFor="observaciones" className="mb-2 text-gray-700">Observaciones</label>
          <textarea
            id="observaciones"
            name="observaciones"
            rows={4}
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Registrar
      </button>
    </form>
  );
};

export default FormCarga;
