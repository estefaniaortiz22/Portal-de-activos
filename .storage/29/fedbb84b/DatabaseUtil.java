package com.grupofi.portal.utils;

import com.grupofi.portal.models.Asset;
import com.grupofi.portal.models.User;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Clase de utilidad que simula una base de datos.
 * En un entorno de producción, esto se reemplazaría por conexiones a una base de datos real.
 */
public class DatabaseUtil {
    
    private static final Map<String, String> USERS = new HashMap<>();
    private static final Map<String, List<Asset>> USER_ASSETS = new HashMap<>();
    private static final List<Asset> DEFAULT_ASSETS = new ArrayList<>();
    
    static {
        // Inicialización de usuarios
        USERS.put("juan.martinez", "123456");
        USERS.put("estefania.cruzo", "123456");
        USERS.put("laura.cardenas", "123456");
        USERS.put("gustavo.montalvo", "123456");
        USERS.put("jonatan.garcia", "123456");
        USERS.put("edwin.mejia", "123456");
        USERS.put("daniela.lopez", "123456");
        USERS.put("manuela.cruzo", "123456");
        
        // Inicialización de activos por defecto
        DEFAULT_ASSETS.add(new Asset(1, "DEFAULT-001", "Portátil Estándar", "Laptop", "STD-0001", "General", "Dell", "Inspiron 14", "Activo"));
        DEFAULT_ASSETS.add(new Asset(2, "DEFAULT-002", "Monitor Básico", "Monitor", "STD-0002", "General", "HP", "24fw", "Activo"));
        
        // Activos para Juan Martinez
        List<Asset> juanAssets = new ArrayList<>();
        juanAssets.add(new Asset(1, "JM12345", "MacBook Pro", "Laptop", "JM-0001", "Gerencia", "Apple", "MacBook Pro 2023", "Activo"));
        juanAssets.add(new Asset(2, "JM67890", "iPhone 14", "Móvil", "JM-0002", "Gerencia", "Apple", "iPhone 14 Pro", "Activo"));
        USER_ASSETS.put("juan.martinez", juanAssets);
        
        // Activos para Estefania Cruzo
        List<Asset> estefaniaAssets = new ArrayList<>();
        estefaniaAssets.add(new Asset(1, "EC54321", "Portátil Dell", "Laptop", "EC-0001", "Ventas", "Dell", "Latitude 7420", "Activo"));
        estefaniaAssets.add(new Asset(2, "EC98765", "Monitor Samsung", "Monitor", "EC-0002", "Ventas", "Samsung", "S32A600", "Activo"));
        USER_ASSETS.put("estefania.cruzo", estefaniaAssets);
        
        // Activos para Laura Cardenas
        List<Asset> lauraAssets = new ArrayList<>();
        lauraAssets.add(new Asset(1, "LC11223", "Lenovo ThinkPad", "Laptop", "LC-0001", "Administración", "Lenovo", "ThinkPad X1", "Activo"));
        lauraAssets.add(new Asset(2, "LC44556", "Diadema Logitech", "Accesorios", "LC-0002", "Administración", "Logitech", "G733", "Activo"));
        USER_ASSETS.put("laura.cardenas", lauraAssets);
        
        // Activos para Gustavo Montalvo
        List<Asset> gustavoAssets = new ArrayList<>();
        gustavoAssets.add(new Asset(1, "GM13579", "HP Spectre", "Laptop", "GM-0001", "Diseño", "HP", "Spectre x360", "Activo"));
        gustavoAssets.add(new Asset(2, "GM24680", "Monitor LG Ultrawide", "Monitor", "GM-0002", "Diseño", "LG", "34WN80C-B", "Activo"));
        gustavoAssets.add(new Asset(3, "GM97531", "Tableta Wacom", "Accesorios", "GM-0003", "Diseño", "Wacom", "Intuos Pro", "Activo"));
        USER_ASSETS.put("gustavo.montalvo", gustavoAssets);
        
        // Activos para Jonatan Garcia
        List<Asset> jonatanAssets = new ArrayList<>();
        jonatanAssets.add(new Asset(1, "JG22334", "Portátil ASUS", "Laptop", "JG-0001", "Desarrollo", "ASUS", "ZenBook Pro", "Activo"));
        jonatanAssets.add(new Asset(2, "JG55667", "Monitor ASUS", "Monitor", "JG-0002", "Desarrollo", "ASUS", "ProArt PA278CV", "Activo"));
        jonatanAssets.add(new Asset(3, "JG88990", "Teclado Mecánico", "Accesorios", "JG-0003", "Desarrollo", "Keychron", "K2", "Activo"));
        USER_ASSETS.put("jonatan.garcia", jonatanAssets);
        
        // Activos para Edwin Mejia
        List<Asset> edwinAssets = new ArrayList<>();
        edwinAssets.add(new Asset(1, "EM78901", "Surface Pro", "Laptop", "EM-0001", "Soporte", "Microsoft", "Surface Pro 8", "Activo"));
        edwinAssets.add(new Asset(2, "EM23456", "Samsung Galaxy S22", "Móvil", "EM-0002", "Soporte", "Samsung", "Galaxy S22", "Activo"));
        USER_ASSETS.put("edwin.mejia", edwinAssets);
        
        // Activos para Daniela Lopez
        List<Asset> danielaAssets = new ArrayList<>();
        danielaAssets.add(new Asset(1, "DL65432", "MacBook Air", "Laptop", "DL-0001", "Marketing", "Apple", "MacBook Air M2", "Activo"));
        danielaAssets.add(new Asset(2, "DL09876", "iPad Pro", "Tablet", "DL-0002", "Marketing", "Apple", "iPad Pro 12.9", "Activo"));
        USER_ASSETS.put("daniela.lopez", danielaAssets);
        
        // Activos para Manuela Cruzo
        List<Asset> manuelaAssets = new ArrayList<>();
        manuelaAssets.add(new Asset(1, "MC45678", "Portátil HP", "Laptop", "MC-0001", "Recursos Humanos", "HP", "Elitebook 840", "Activo"));
        manuelaAssets.add(new Asset(2, "MC78901", "Monitor Dell", "Monitor", "MC-0002", "Recursos Humanos", "Dell", "U2722D", "Activo"));
        manuelaAssets.add(new Asset(3, "MC12345", "Teléfono IP", "Comunicaciones", "MC-0003", "Recursos Humanos", "Cisco", "IP Phone 8841", "Activo"));
        USER_ASSETS.put("manuela.cruzo", manuelaAssets);
    }
    
    /**
     * Verifica las credenciales del usuario.
     * @param username Nombre de usuario
     * @param password Contraseña
     * @return true si las credenciales son correctas, false en caso contrario
     */
    public static boolean validateUser(String username, String password) {
        String storedPassword = USERS.get(username);
        return storedPassword != null && storedPassword.equals(password);
    }
    
    /**
     * Obtiene los activos asignados a un usuario.
     * @param username Nombre del usuario
     * @return Lista de activos asignados al usuario, o los activos por defecto si el usuario no existe
     */
    public static List<Asset> getUserAssets(String username) {
        return USER_ASSETS.getOrDefault(username, DEFAULT_ASSETS);
    }
    
    /**
     * Obtiene un activo específico de un usuario por ID.
     * @param username Nombre del usuario
     * @param assetId ID del activo
     * @return El activo si existe, o null si no se encuentra
     */
    public static Asset getUserAssetById(String username, int assetId) {
        List<Asset> assets = getUserAssets(username);
        for (Asset asset : assets) {
            if (asset.getId() == assetId) {
                return asset;
            }
        }
        return null;
    }
    
    /**
     * Simula el envío de un correo electrónico para reportar una novedad.
     * @param username Usuario que reporta la novedad
     * @param assetIds IDs de los activos reportados
     * @param comments Comentarios adicionales sobre el reporte
     * @return true si el correo fue "enviado" correctamente
     */
    public static boolean sendReportEmail(String username, List<Integer> assetIds, String comments) {
        // En un entorno real, aquí se implementaría el envío real del correo
        // Por ahora, simplemente retornamos true
        System.out.println("Simulando envío de correo a mariatuservicio@grupofi.com.co");
        System.out.println("Usuario: " + username);
        
        List<Asset> userAssets = getUserAssets(username);
        System.out.println("Activos reportados:");
        for (Integer assetId : assetIds) {
            for (Asset asset : userAssets) {
                if (asset.getId() == assetId) {
                    System.out.println(" - " + asset.getName() + " (" + asset.getSerial() + ")");
                }
            }
        }
        
        System.out.println("Comentarios: " + (comments != null && !comments.isEmpty() ? comments : "Ninguno"));
        return true;
    }
}