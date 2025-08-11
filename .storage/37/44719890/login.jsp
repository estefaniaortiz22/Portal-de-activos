<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portal de auto consulta de activos asignados">
    <title>Portal de Consulta de Activos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            min-height: 100vh;
            align-items: center;
            justify-content: center;
        }
        .container {
            display: flex;
            max-width: 1200px;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        .left-content {
            width: 60%;
            padding-right: 20px;
            text-align: center;
        }
        .left-content h1 {
            color: #004d00; /* Verde oscuro */
        }
        .left-content p {
            font-size: 16px;
            color: #d659a5; /* Letra rosada */
            line-height: 1.5;
        }
        .left-content img {
            margin-bottom: 20px;
            width: 140px; /* Ajusta el tamaño de la imagen según sea necesario */
        }
        .right-content {
            width: 40%;
            background-color: #f4f4f4;
            padding: 20px;
            border-left: 2px solid #004d00; /* Borde verde oscuro */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .login-box {
            width: 100%;
            max-width: 300px; /* Ajusta el tamaño máximo del cuadro de login */
        }
        h2 {
            text-align: center;
            color: #004d00; /* Verde oscuro */
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            color: #004d00; /* Verde oscuro */
        }
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 10px;
            text-align: center;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background-color: #004d00; /* Verde oscuro */
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            width: 100%;
        }
        button:hover {
            background-color: #003300;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 4px;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
        .error-message {
            color: #dc3545;
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 15px;
            text-align: center;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="left-content">
        <img src="${pageContext.request.contextPath}/resources/images/gfi.jpg" alt="Logo Grupo FI">
        <h1>¡BIENVENIDO AL PORTAL DE ACTIVOS TECNOLÓGICOS!</h1>
        <p>Consulta de forma rápida y sencilla los activos asignados a tu nombre. Explora, gestiona y mantén actualizada la información de los recursos asignados. </p>
        <p>Explora, gestiona y mantén actualizada la información de los recursos asignados. </p>
        <p><strong>Recuerda: este portal está diseñado para optimizar el seguimiento y gestión de los activos tecnológicos de la empresa.</strong></p>
    </div>

    <div class="right-content">
        <div class="login-box">
            <h2>Inicia sesión con tu usuario y clave de red</h2>
            
            <% if (request.getAttribute("error") != null) { %>
                <div class="error-message">
                    <%= request.getAttribute("error") %>
                </div>
            <% } %>
            
            <form action="login" method="post">
                <div class="form-group">
                    <label for="username">Usuario de Red:</label>
                    <input type="text" id="username" name="username" aria-label="Ingrese su usuario de red" required>
                </div>

                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" aria-label="Ingrese su contraseña" required>
                </div>

                <button type="submit">Autenticar</button>
            </form>
        </div>
    </div>
</div>

<footer>
    <p>&copy; 2024 Portal de Consulta de Activos - Todos los derechos reservados - Grupo FI</p>
</footer>

</body>
</html>