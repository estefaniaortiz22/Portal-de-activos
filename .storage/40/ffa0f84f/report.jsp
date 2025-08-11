<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="com.grupofi.portal.models.Asset"%>
<%@page import="java.util.List"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informe de Inconformidad con Activos</title>
    <style>
        /* Estilos globales */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f4f8; /* Fondo claro */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh; /* Ocupa toda la altura de la ventana */
            margin: 0;
            padding: 20px;
        }

        .feedback-container {
            text-align: center;
            background-color: #ffffff; /* Fondo blanco */
            border: 2px solid #dc3545; /* Borde rojo */
            border-radius: 15px; /* Bordes redondeados */
            padding: 40px; /* Espaciado interno */
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra sutil */
            width: 90%; /* Ancho responsivo */
            max-width: 500px; /* Máximo ancho */
        }

        h2 {
            color: #dc3545; /* Color rojo para el título */
            margin-bottom: 20px; /* Espacio abajo del título */
        }

        label {
            display: block;
            margin-bottom: 10px; /* Espacio abajo de las etiquetas */
            color: #333; /* Color de las etiquetas */
            text-align: left;
        }

        select {
            width: 100%; /* Ancho completo */
            padding: 10px; /* Espaciado interno */
            border: 1px solid #ccc; /* Borde gris claro */
            border-radius: 5px; /* Bordes redondeados */
            margin-bottom: 20px; /* Espacio abajo del select */
        }
        
        textarea {
            width: 100%; /* Ancho completo */
            padding: 10px; /* Espaciado interno */
            border: 1px solid #ccc; /* Borde gris claro */
            border-radius: 5px; /* Bordes redondeados */
            margin-bottom: 20px; /* Espacio abajo del textarea */
            min-height: 100px; /* Altura mínima */
            resize: vertical; /* Permitir redimensionar verticalmente */
        }

        .submit-button {
            background-color: #dc3545; /* Color del botón */
            color: white; /* Color del texto del botón */
            border: none; /* Sin borde */
            border-radius: 5px; /* Bordes redondeados */
            padding: 12px 24px; /* Espaciado interno */
            cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
            font-size: 16px; /* Tamaño de la fuente */
            transition: background-color 0.3s; /* Transición suave */
        }

        .submit-button:hover {
            background-color: #c82333; /* Color más oscuro al pasar el mouse */
        }

        .thank-you-message {
            margin-top: 20px; /* Espacio arriba del mensaje */
            color: #333; /* Color del texto del mensaje */
        }

        .accept-button {
            background-color: #28a745; /* Color verde para el botón de aceptar */
            color: white; /* Color del texto del botón */
            border: none; /* Sin borde */
            border-radius: 5px; /* Bordes redondeados */
            padding: 12px 24px; /* Espaciado interno */
            cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
            font-size: 16px; /* Tamaño de la fuente */
            transition: background-color 0.3s; /* Transición suave */
            margin-top: 10px; /* Espacio arriba del botón */
            margin-left: auto; /* Margen automático para centrar */
            margin-right: auto; /* Margen automático para centrar */
            display: block; /* Cambiar a bloque para aplicar márgenes */
            text-decoration: none; /* Quitar subrayado si es un enlace */
        }

        .accept-button:hover {
            background-color: #218838; /* Color más oscuro al pasar el mouse */
        }

        img {
            max-width: 100%; /* Limitar el tamaño de la imagen */
            height: auto; /* Mantener proporciones */
            margin-bottom: 20px; /* Espacio abajo de la imagen */
        }
        
        .checkbox-container {
            text-align: left;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 20px;
            max-height: 200px;
            overflow-y: auto;
        }
        
        .asset-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
        }
        
        .asset-checkbox {
            margin-right: 10px;
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
    <div class="feedback-container">
        <% if (request.getAttribute("submitted") != null && (Boolean)request.getAttribute("submitted")) { %>
            <div class="thank-you-message">
                <p>Correo enviado a mariatuservicio@grupofi.com.co para generar un caso al área encargada.</p>
                <p>¡Gracias por tu reporte!</p>
                <p>Se ha cerrado sesion</p>
                <a href="logout" class="accept-button">Aceptar</a>
            </div>
        <% } else { %>
            <h2>Reporte de Inconformidad</h2>
            <img src="${pageContext.request.contextPath}/resources/images/mariatuservicio.jpg" alt="Imagen de Servicio" />
            <p>Hola <strong>${username}</strong>, agradecemos mucho que reportes las inconformidades, estamos aquí para ayudarte.</p>
            
            <% if (request.getAttribute("error") != null) { %>
                <div class="error-message">
                    <%= request.getAttribute("error") %>
                </div>
            <% } %>
            
            <form action="report" method="post">
                <label for="assets">Selecciona los activos con los cuales no estás satisfecho:</label>
                <div class="checkbox-container">
                    <% 
                    List<Asset> assets = (List<Asset>) request.getAttribute("assets");
                    if (assets != null && !assets.isEmpty()) {
                        for (Asset asset : assets) {
                    %>
                    <div class="asset-item">
                        <input type="checkbox" id="asset-<%= asset.getId() %>" name="selectedAssets" value="<%= asset.getId() %>" class="asset-checkbox">
                        <label for="asset-<%= asset.getId() %>"><%= asset.getName() %> - <%= asset.getCategory() %> (<%= asset.getSerial() %>)</label>
                    </div>
                    <% 
                        }
                    } else {
                    %>
                    <p>No se encontraron activos asignados.</p>
                    <% } %>
                </div>
                
                <label for="comments">Comentarios adicionales (opcional):</label>
                <textarea id="comments" name="comments" placeholder="Describe el problema o inconveniente con los activos seleccionados"></textarea>
                
                <button type="submit" class="submit-button">Enviar</button>
            </form>
        <% } %>
    </div>
</body>
</html>