package com.grupofi.portal.servlets;

import com.grupofi.portal.models.Asset;
import com.grupofi.portal.utils.DatabaseUtil;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet para manejar el reporte de inconformidades con activos.
 */
public class ReportServlet extends HttpServlet {

    /**
     * Maneja las solicitudes GET para mostrar el formulario de reporte.
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
        
        // Obtener activos del usuario para mostrar en el formulario
        List<Asset> userAssets = DatabaseUtil.getUserAssets(username);
        
        // Establecer atributos para la vista
        request.setAttribute("username", username);
        request.setAttribute("assets", userAssets);
        request.setAttribute("submitted", false);
        
        // Mostrar la vista de reporte
        request.getRequestDispatcher("/report.jsp").forward(request, response);
    }

    /**
     * Maneja las solicitudes POST para procesar el envío del reporte.
     * @param request solicitud HTTP
     * @param response respuesta HTTP
     * @throws ServletException si ocurre un error específico del servlet
     * @throws IOException si ocurre un error de I/O
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
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
        
        // Obtener activos seleccionados
        String[] selectedAssetIds = request.getParameterValues("selectedAssets");
        List<Integer> assetIds = new ArrayList<>();
        
        if (selectedAssetIds != null && selectedAssetIds.length > 0) {
            for (String idStr : selectedAssetIds) {
                try {
                    assetIds.add(Integer.parseInt(idStr));
                } catch (NumberFormatException e) {
                    // Ignorar IDs inválidos
                }
            }
        }
        
        // Verificar si se seleccionó al menos un activo
        if (assetIds.isEmpty()) {
            // Si no se seleccionó ningún activo, mostrar mensaje de error
            request.setAttribute("error", "Debes seleccionar al menos un activo");
            request.setAttribute("username", username);
            request.setAttribute("assets", DatabaseUtil.getUserAssets(username));
            request.setAttribute("submitted", false);
            request.getRequestDispatcher("/report.jsp").forward(request, response);
            return;
        }
        
        // Obtener comentarios adicionales
        String comments = request.getParameter("comments");
        
        // Enviar el reporte (simular envío de correo)
        boolean emailSent = DatabaseUtil.sendReportEmail(username, assetIds, comments);
        
        if (emailSent) {
            // Mostrar mensaje de confirmación
            request.setAttribute("submitted", true);
            request.getRequestDispatcher("/report.jsp").forward(request, response);
        } else {
            // Si hay error en el envío, mostrar mensaje
            request.setAttribute("error", "Error al enviar el reporte. Por favor, intenta de nuevo.");
            request.setAttribute("username", username);
            request.setAttribute("assets", DatabaseUtil.getUserAssets(username));
            request.setAttribute("submitted", false);
            request.getRequestDispatcher("/report.jsp").forward(request, response);
        }
    }
}