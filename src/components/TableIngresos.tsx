"use client";
import React, { useState } from "react";

const TableIngresos: React.FC = () => {
  const [ingresos, setIngresos] = useState([
    {

      nombreApellido: "ALARCON AGOSTINA",
      dni: "38.236.296",
      ingreso: "28/07/24",
      origen: "CORRIENTES",
      egreso: "02/08/24",
      vehiculo: "",
      celular: "",
    },
    {
      nombreApellido: "ALVAREZ EDUARDO ANDRES",
      dni: "17.224.605",
      ingreso: "28/07/24",
      origen: "HURLINGHAM",
      egreso: "02/08/24",
      vehiculo: "",
      celular: "",
    },
    // Puedes agregar más datos aquí...
  ]);

  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-slate-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nombre y Apellido</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">DNI N°</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Ingreso</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Origen</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Egreso</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Vehículo</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Celular</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {ingresos.map((ingreso, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{ingreso.nombreApellido}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{ingreso.dni}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{ingreso.ingreso}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{ingreso.origen}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{ingreso.egreso}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{ingreso.vehiculo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{ingreso.celular}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableIngresos;
