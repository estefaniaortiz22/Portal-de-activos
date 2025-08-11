import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-[#dc3545] mb-4">Página no encontrada</h1>
        <p className="text-gray-600 mb-6">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button 
          className="bg-[#004d00] hover:bg-[#003300]"
          onClick={() => navigate('/')}
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  );
}