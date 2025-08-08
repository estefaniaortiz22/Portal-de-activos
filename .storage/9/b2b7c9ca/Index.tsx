import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in production this would connect to an API
    if (username && password) {
      // Store user info in localStorage for demo purposes
      localStorage.setItem('user', JSON.stringify({ username }));
      navigate('/dashboard');
    } else {
      alert('Por favor ingresa usuario y contraseña');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="container max-w-6xl flex bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-3/5 p-8 text-center">
          <img 
            src="/assets/gfi.jpg" 
            alt="Logo Grupo FI" 
            className="mx-auto mb-6 w-36"
          />
          <h1 className="text-2xl font-bold mb-4 text-[#004d00]">¡BIENVENIDO AL PORTAL DE ACTIVOS TECNOLÓGICOS!</h1>
          <p className="text-[#d659a5] mb-3">
            Consulta de forma rápida y sencilla los activos asignados a tu nombre. Explora, gestiona y mantén actualizada la información de los recursos asignados.
          </p>
          <p className="text-[#d659a5] mb-3">
            Explora, gestiona y mantén actualizada la información de los recursos asignados.
          </p>
          <p className="font-bold text-gray-700">
            Recuerda: este portal está diseñado para optimizar el seguimiento y gestión de los activos tecnológicos de la empresa.
          </p>
        </div>

        <div className="w-2/5 bg-gray-100 p-8 border-l-2 border-[#004d00] flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-xl font-bold mb-6 text-center text-[#004d00]">Inicia sesión con tu usuario y clave de red</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="username" className="block mb-2 text-[#004d00]">Usuario de Red:</Label>
                <Input 
                  id="username" 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full text-center"
                  required
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="password" className="block mb-2 text-[#004d00]">Contraseña:</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-center"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-[#004d00] hover:bg-[#003300]">
                Autenticar
              </Button>
            </form>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center py-2 text-sm">
        &copy; 2024 Portal de Consulta de Activos - Todos los derechos reservados - Grupo FI
      </footer>
    </div>
  );
}