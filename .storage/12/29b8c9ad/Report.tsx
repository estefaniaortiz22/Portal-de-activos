import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Checkbox 
} from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

// Mock data for assets - same as in Dashboard.tsx
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

export default function Report() {
  const navigate = useNavigate();
  const [selectedAssets, setSelectedAssets] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  
  // Check if user is logged in
  const userString = localStorage.getItem('user');
  if (!userString) {
    navigate('/');
  }
  
  const handleAssetToggle = (assetId: number) => {
    setSelectedAssets(prev => 
      prev.includes(assetId) 
        ? prev.filter(id => id !== assetId) 
        : [...prev, assetId]
    );
  };
  
  const handleSubmit = () => {
    if (selectedAssets.length === 0) {
      alert('Por favor, selecciona al menos un activo.');
      return;
    }
    
    // Simulate sending email
    setSubmitted(true);
  };
  
  const handleAccept = () => {
    // Clear user session and redirect to login
    localStorage.removeItem('user');
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-[#f0f4f8] flex justify-center items-center p-4">
      <div className="bg-white border-2 border-[#dc3545] rounded-3xl p-10 shadow-lg text-center w-full max-w-lg">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-[#dc3545] mb-6">Reporte de Inconformidad</h2>
            <div className="mb-6">
              <img src="/assets/mariatuservicio.jpg" alt="Logo Maria Tu Servicio" className="mx-auto max-w-[200px]" />
            </div>
            <p className="text-gray-700 mb-6">
              Agradecemos mucho que reportes las inconformidades, estamos aquí para ayudarte.
            </p>
            
            <div className="text-left mb-6">
              <Label className="mb-2 block font-medium">Selecciona los activos con los cuales no estás satisfecho:</Label>
              <div className="space-y-3 mt-2">
                {assetsData.map(asset => (
                  <div key={asset.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`asset-${asset.id}`} 
                      checked={selectedAssets.includes(asset.id)}
                      onCheckedChange={() => handleAssetToggle(asset.id)}
                    />
                    <label 
                      htmlFor={`asset-${asset.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {asset.name} - {asset.category} ({asset.serial})
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              className="w-full bg-[#dc3545] hover:bg-[#c82333] text-white"
              onClick={handleSubmit}
            >
              Enviar
            </Button>
          </>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-700">
              Correo enviado a mariatuservicio@grupofi.com.co para generar un caso al área encargada.
            </p>
            <p className="text-gray-700 font-bold">
              ¡Gracias por tu reporte!
            </p>
            <p className="text-gray-700">
              Se ha cerrado sesión
            </p>
            
            <Button 
              className="mt-4 bg-[#28a745] hover:bg-[#218838] text-white"
              onClick={handleAccept}
            >
              Aceptar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}