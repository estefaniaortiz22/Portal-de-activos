package com.grupofi.portal.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet para mostrar la confirmación cuando el usuario acepta la información.
 */
@WebServlet(name = "ConfirmationServlet", urlPatterns = {"/confirmation"})
public class ConfirmationServlet extends HttpServlet {

    /**
     * Maneja las solicitudes GET para mostrar la página de confirmación.
     * @param request solicitud HTTP
     * @param response respuesta HTTP
     * @throws ServletException si ocurre un error específico del servlet
     * @throws IOException si ocurre un error de I/O
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Verificar si el usuario está autenticado
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("username") == null) {
            // Si no está autenticado, redirigir al login
            response.sendRedirect("login");
            return;
        }
        
        // Mostrar la vista de confirmación
        request.getRequestDispatcher("/confirmation.jsp").forward(request, response);
    }
}