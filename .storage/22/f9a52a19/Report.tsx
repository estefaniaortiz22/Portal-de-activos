import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Checkbox 
} from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { userAssets, defaultAssets, Asset } from '@/data/users';

export default function Report() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [assets, setAssets] = useState<Asset[]>([]);
  const [selectedAssets, setSelectedAssets] = useState<number[]>([]);
  const [comments, setComments] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  
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
    const selectedAssetDetails = assets
      .filter(asset => selectedAssets.includes(asset.id))
      .map(asset => `${asset.name} (${asset.serial})`)
      .join(', ');
    
    console.log(`Correo enviado a mariatuservicio@grupofi.com.co:
      Usuario: ${username}
      Activos reportados: ${selectedAssetDetails}
      Comentarios: ${comments || 'Ninguno'}`);
    
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
              Hola <span className="font-semibold">{username}</span>, agradecemos mucho que reportes las inconformidades, estamos aquí para ayudarte.
            </p>
            
            <div className="text-left mb-6">
              <Label className="mb-2 block font-medium">Selecciona los activos con los cuales no estás satisfecho:</Label>
              <div className="space-y-3 mt-2 max-h-60 overflow-y-auto border rounded p-3">
                {assets.map(asset => (
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
            
            <div className="text-left mb-6">
              <Label htmlFor="comments" className="mb-2 block font-medium">Comentarios adicionales (opcional):</Label>
              <Textarea 
                id="comments"
                placeholder="Describe el problema o inconveniente con los activos seleccionados"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="min-h-[100px]"
              />
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