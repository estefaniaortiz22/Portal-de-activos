package com.grupofi.portal.servlets;

import com.grupofi.portal.utils.DatabaseUtil;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet para manejar la autenticación de usuarios.
 */
@WebServlet(name = "LoginServlet", urlPatterns = {"/login"})
public class LoginServlet extends HttpServlet {

    /**
     * Maneja las solicitudes GET para mostrar la página de login.
     * @param request solicitud HTTP
     * @param response respuesta HTTP
     * @throws ServletException si ocurre un error específico del servlet
     * @throws IOException si ocurre un error de I/O
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Si el usuario ya está autenticado, redirigir al dashboard
        HttpSession session = request.getSession(false);
        if (session != null && session.getAttribute("username") != null) {
            response.sendRedirect("dashboard");
            return;
        }
        
        // Si no está autenticado, mostrar página de login
        request.getRequestDispatcher("/login.jsp").forward(request, response);
    }

    /**
     * Maneja las solicitudes POST para procesar el formulario de login.
     * @param request solicitud HTTP
     * @param response respuesta HTTP
     * @throws ServletException si ocurre un error específico del servlet
     * @throws IOException si ocurre un error de I/O
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        
        // Validar credenciales
        if (username != null && password != null && DatabaseUtil.validateUser(username, password)) {
            // Crear sesión y guardar nombre de usuario
            HttpSession session = request.getSession();
            session.setAttribute("username", username);
            
            // Redirigir al dashboard
            response.sendRedirect("dashboard");
        } else {
            // Si las credenciales son incorrectas, volver a la página de login con error
            request.setAttribute("error", "Usuario o contraseña incorrectos");
            request.getRequestDispatcher("/login.jsp").forward(request, response);
        }
    }
}