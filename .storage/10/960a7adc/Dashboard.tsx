import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Mock data for assets
const assetsData = [
  {
    id: 1,
    serial: "12345",
    name: "Portátil Dell",
    category: "Laptop",
    plate: "AA12345",
    workStation: "Desarrollo",
    brand: "Dell",
    model: "Inspiron 14",
    status: "Activo"
  },
  {
    id: 2,
    serial: "67890",
    name: "Monitor LG",
    category: "Monitor",
    plate: "BB67890",
    workStation: "Desarrollo",
    brand: "LG",
    model: "27UL500",
    status: "Activo"
  },
  {
    id: 3,
    serial: "24680",
    name: "Diadema Logitech",
    category: "Accesorios",
    plate: "CC24680",
    workStation: "Soporte",
    brand: "Logitech",
    model: "H390",
    status: "Activo"
  },
  {
    id: 4,
    serial: "13579",
    name: "Celular Samsung",
    category: "Móvil",
    plate: "DD13579",
    workStation: "Gerencia",
    brand: "Samsung",
    model: "Galaxy S21",
    status: "Activo"
  }
];

export default function Dashboard() {
  const navigate = useNavigate();
  
  // Check if user is logged in
  const userString = localStorage.getItem('user');
  if (!userString) {
    navigate('/');
  }
  
  const handleCorrectInfo = () => {
    navigate('/confirmation');
  };
  
  const handleReportIssue = () => {
    navigate('/report');
  };
  
  return (
    <div className="min-h-screen bg-[#f0f4f3] p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl bg-white border-2 border-[#004d00] rounded-lg p-6 shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-[#004d00]">¡BIENVENIDO AL PANEL DE CONSULTA DE ACTIVOS TECNOLOGICOS!</h1>
        <h2 className="text-xl font-semibold text-[#004d00] mb-2">Estos son los activos que tienes asignados</h2>
        
        <p className="text-gray-700 mb-6">
          Aquí puedes ver de forma detallada los equipos y recursos que tienes asignados dentro de la empresa. 
          Recuerda que es importante mantener la información actualizada y notificar cualquier cambio o incidencia. 
          Si tienes alguna duda o necesitas realizar alguna gestión adicional, no dudes en ponerte en contacto con el soporte de Tecnología mariatuservicio@grupofi.com.co
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full mb-6 border-collapse">
            <thead>
              <tr>
                <th className="p-3 bg-[#004d00] text-white font-bold border border-gray-300">Serial</th>
                <th className="p-3 bg-[#004d00] text-white font-bold border border-gray-300">Nombre Equipo</th>
                <th className="p-3 bg-[#004d00] text-white font-bold border border-gray-300">Categoría</th>
                <th className="p-3 bg-[#004d00] text-white font-bold border border-gray-300">Placa</th>
                <th className="p-3 bg-[#004d00] text-white font-bold border border-gray-300">Puesto de Trabajo</th>
                <th className="p-3 bg-[#004d00] text-white font-bold border border-gray-300">Marca</th>
                <th className="p-3 bg-[#004d00] text-white font-bold border border-gray-300">Modelo</th>
                <th className="p-3 bg-[#004d00] text-white font-bold border border-gray-300">Estado</th>
              </tr>
            </thead>
            <tbody>
              {assetsData.map(asset => (
                <tr key={asset.id}>
                  <td className="p-3 bg-gray-50 border border-gray-300">{asset.serial}</td>
                  <td className="p-3 bg-gray-50 border border-gray-300">{asset.name}</td>
                  <td className="p-3 bg-gray-50 border border-gray-300">{asset.category}</td>
                  <td className="p-3 bg-gray-50 border border-gray-300">{asset.plate}</td>
                  <td className="p-3 bg-gray-50 border border-gray-300">{asset.workStation}</td>
                  <td className="p-3 bg-gray-50 border border-gray-300">{asset.brand}</td>
                  <td className="p-3 bg-gray-50 border border-gray-300">{asset.model}</td>
                  <td className="p-3 bg-gray-50 border border-gray-300">{asset.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center">
          <Button 
            className="bg-[#004d00] hover:bg-[#006400] text-white font-semibold px-5 py-2 rounded-lg" 
            onClick={handleCorrectInfo}
          >
            La información está correcta
          </Button>
          
          <Button 
            className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold px-5 py-2 rounded-lg ml-auto"
            onClick={handleReportIssue}
          >
            Quiero reportar una novedad
          </Button>
          
          <div className="ml-8">
            <img src="/assets/mari.jpg" alt="Logo Mari" className="w-24 h-auto rounded shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}