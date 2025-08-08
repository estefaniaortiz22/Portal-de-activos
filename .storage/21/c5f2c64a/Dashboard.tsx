import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { userAssets, defaultAssets, Asset } from '@/data/users';
import { LogOut } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [assets, setAssets] = useState<Asset[]>([]);
  
  useEffect(() => {
    // Check if user is logged in
    const userString = localStorage.getItem('user');
    if (!userString) {
      navigate('/');
      return;
    }
    
    try {
      const userData = JSON.parse(userString);
      setUsername(userData.username);
      
      // Set assets based on username
      if (userData.username && userAssets[userData.username]) {
        setAssets(userAssets[userData.username]);
      } else {
        setAssets(defaultAssets);
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
      navigate('/');
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };
  
  const handleCorrectInfo = () => {
    navigate('/confirmation');
  };
  
  const handleReportIssue = () => {
    navigate('/report');
  };
  
  return (
    <div className="min-h-screen bg-[#f0f4f3] p-8 flex flex-col items-center">
      <div className="w-full max-w-6xl bg-white border-2 border-[#004d00] rounded-lg p-6 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#004d00]">¡BIENVENIDO AL PANEL DE CONSULTA DE ACTIVOS TECNOLOGICOS!</h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium text-gray-800">{username}</p>
              <p className="text-sm text-gray-600">Usuario Conectado</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleLogout}
              className="text-gray-600 hover:text-red-600"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
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
              {assets.map(asset => (
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