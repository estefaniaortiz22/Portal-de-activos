package com.grupofi.portal.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet para cerrar la sesión del usuario.
 */
public class LogoutServlet extends HttpServlet {

    /**
     * Maneja las solicitudes GET para cerrar la sesión.
     * @param request solicitud HTTP
     * @param response respuesta HTTP
     * @throws ServletException si ocurre un error específico del servlet
     * @throws IOException si ocurre un error de I/O
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Obtener la sesión actual sin crear una nueva si no existe
        HttpSession session = request.getSession(false);
        if (session != null) {
            // Invalidar la sesión
            session.invalidate();
        }
        
        // Redirigir a la página de login
        response.sendRedirect("login");
    }
}