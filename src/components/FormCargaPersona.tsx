"use client";
import React, { useState, useEffect } from "react";

interface FormDatosPersonaProps {
  onCompletionChange: (completed: boolean) => void;
}

const FormDatosPersona: React.FC<FormDatosPersonaProps> = ({ onCompletionChange }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Verificar si todos los campos tienen valores
    const formElements = Array.from(document.querySelectorAll('#formDatosPersona input, #formDatosPersona textarea')) as (HTMLInputElement | HTMLTextAreaElement)[];
    const allFilled = formElements.every((input) => input.value.trim() !== '');
    setIsCompleted(allFilled);
    onCompletionChange(allFilled);
  }, [onCompletionChange]);

  return (
    <form id="formDatosPersona" className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <label htmlFor="dni" className="mb-2 text-gray-700">Documento</label>
          <input
            type="text"
            id="dni"
            name="dni"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="apellido" className="mb-2 text-gray-700">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="nombres" className="mb-2 text-gray-700">Nombres</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="domicilio" className="mb-2 text-gray-700">Domicilios</label>
          <input
            type="text"
            id="domicilio"
            name="domicilio"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="clase" className="mb-2 text-gray-700">Clase</label>
          <input
            type="number"
            id="clase"
            name="clase"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="localidad" className="mb-2 text-gray-700">Localidad</label>
          <input
            type="text"
            id="localidad"
            name="localidad"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="provincia" className="mb-2 text-gray-700">Provincia</label>
          <input
            type="text"
            id="provincia"
            name="provincia"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pais" className="mb-2 text-gray-700">País</label>
          <input
            type="text"
            id="pais"
            name="pais"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="celular" className="mb-2 text-gray-700">Celular</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <label htmlFor="observaciones" className="mb-2 text-gray-700">Observaciones</label>
          <textarea
            id="observaciones"
            name="observaciones"
            rows={4}
            className="border border-gray-300 rounded-md p-2 w-full resize-none"
            placeholder="Escribe tus observaciones aquí..."
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

export default FormDatosPersona;
