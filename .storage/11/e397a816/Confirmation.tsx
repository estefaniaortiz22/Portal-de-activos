import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Confirmation() {
  const navigate = useNavigate();
  
  // Check if user is logged in
  const userString = localStorage.getItem('user');
  if (!userString) {
    navigate('/');
  }
  
  const handleAccept = () => {
    // Clear user session and redirect to login
    localStorage.removeItem('user');
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-[#f0f4f8] flex justify-center items-center p-4">
      <div className="bg-white border-2 border-[#28a745] rounded-3xl p-10 shadow-lg text-center w-full max-w-md">
        <div className="text-7xl text-[#28a745] mb-6">&#10003;</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">¡Gracias por usar el portal!</h2>
        <p className="text-gray-600 mb-6">
          Nos alegra saber que has podido acceder a la información que necesitas. 
          Tu tiempo es valioso y agradecemos que lo hayas dedicado a nosotros. 
          Si tienes alguna pregunta o necesitas ayuda, no dudes en volver; 
          estamos aquí para ayudarte. ¡Hasta la próxima!
        </p>
        <Button 
          className="bg-[#007bff] hover:bg-[#0056b3] text-white font-medium px-6 py-3 rounded"
          onClick={handleAccept}
        >
          Aceptar
        </Button>
      </div>
    </div>
  );
}