package com.grupofi.portal.servlets;

import com.grupofi.portal.models.Asset;
import com.grupofi.portal.utils.DatabaseUtil;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet para mostrar el panel de activos del usuario.
 */
@WebServlet(name = "DashboardServlet", urlPatterns = {"/dashboard"})
public class DashboardServlet extends HttpServlet {

    /**
     * Maneja las solicitudes GET para mostrar el dashboard con los activos del usuario.
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
        
        // Obtener nombre de usuario de la sesión
        String username = (String) session.getAttribute("username");
        
        // Obtener activos del usuario
        List<Asset> userAssets = DatabaseUtil.getUserAssets(username);
        
        // Establecer atributos para la vista
        request.setAttribute("username", username);
        request.setAttribute("assets", userAssets);
        
        // Mostrar la vista de dashboard
        request.getRequestDispatcher("/dashboard.jsp").forward(request, response);
    }
}