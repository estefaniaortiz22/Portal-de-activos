<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="com.grupofi.portal.models.Asset"%>
<%@page import="java.util.List"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta tus Activos Tecnológicos</title>
    
    <!-- Google Fonts para la tipografía -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f0f4f3;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            background-color: #fff;
            border: 2px solid #004d00; /* Verde oscuro */
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 1px solid #eaeaea;
            padding-bottom: 10px;
        }
        
        .user-info {
            display: flex;
            align-items: center;
        }
        
        .user-details {
            text-align: right;
            margin-right: 10px;
        }
        
        .user-name {
            font-weight: bold;
            color: #333;
        }
        
        .user-status {
            font-size: 12px;
            color: #666;
        }
        
        .logout-btn {
            background-color: transparent;
            border: none;
            color: #666;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            transition: background-color 0.3s;
        }
        
        .logout-btn:hover {
            background-color: #f0f0f0;
            color: #dc3545;
        }

        h2 {
            color: #004d00; /* Verde oscuro */
            margin-bottom: 20px;
            font-weight: 600;
        }

        p {
            color: #333;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 30px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        th, td {
            padding: 12px;
            border: 1px solid #ddd;
            text-align: left;
        }

        th {
            background-color: #004d00; /* Verde oscuro */
            color: #fff;
            font-weight: 900;
        }

        td {
            background-color: #f9f9f9;
        }

        .button-container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 20px;
        }

        .button {
            background-color: #004d00; /* Verde oscuro */
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
        }

        .button-report {
            background-color: #ff0000; /* Rojo */
            margin-left: auto;
        }

        .button:hover {
            background-color: #006400; /* Un verde un poco más claro */
        }

        .button-report:hover {
            background-color: #cc0000; /* Rojo más oscuro */
        }

        .image {
            margin-left: 30px; /* Ajusta este valor si quieres menos/más espacio */
        }

        .image img {
            width: 100px; /* Ajusta el tamaño de la imagen según sea necesario */
            height: auto;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="header">
            <h1>¡BIENVENIDO AL PANEL DE CONSULTA DE ACTIVOS TECNOLOGICOS!</h1>
            <div class="user-info">
                <div class="user-details">
                    <div class="user-name">${username}</div>
                    <div class="user-status">Usuario Conectado</div>
                </div>
                <a href="logout" class="logout-btn" title="Cerrar sesión">⊗</a>
            </div>
        </div>
        
        <h2>Estos son los activos que tienes asignados</h2>
        <p>Aquí puedes ver de forma detallada los equipos y recursos que tienes asignados dentro de la empresa. Recuerda que es importante mantener la información actualizada y notificar cualquier cambio o incidencia. Si tienes alguna duda o necesitas realizar alguna gestión adicional, no dudes en ponerte en contacto con el soporte de Tecnología mariatuservicio@grupofi.com.co </p>

        <table>
            <thead>
                <tr>
                    <th>Serial</th>
                    <th>Nombre Equipo</th>
                    <th>Categoría</th>
                    <th>Placa</th>
                    <th>Puesto de Trabajo</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <% 
                List<Asset> assets = (List<Asset>) request.getAttribute("assets");
                if (assets != null && !assets.isEmpty()) {
                    for (Asset asset : assets) {
                %>
                <tr>
                    <td><%= asset.getSerial() %></td>
                    <td><%= asset.getName() %></td>
                    <td><%= asset.getCategory() %></td>
                    <td><%= asset.getPlate() %></td>
                    <td><%= asset.getWorkStation() %></td>
                    <td><%= asset.getBrand() %></td>
                    <td><%= asset.getModel() %></td>
                    <td><%= asset.getStatus() %></td>
                </tr>
                <% 
                    }
                } else {
                %>
                <tr>
                    <td colspan="8" style="text-align: center;">No se encontraron activos asignados</td>
                </tr>
                <% } %>
            </tbody>
        </table>

        <div class="button-container">
            <a href="confirmation" class="button">La información está correcta</a>
            <a href="report" class="button button-report">Quiero reportar una novedad</a>
            <div class="image">
                <img src="${pageContext.request.contextPath}/resources/images/mari.jpg" alt="Imagen">
            </div>
        </div>
    </div>

</body>
</html>