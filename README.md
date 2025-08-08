# Portal de Activos Tecnológicos

##  Descripción
Este proyecto fue desarrollado como parte del curso **Analisis y desarrollo de software** y está pensado para participar en el **MINT**.  
Es un portal web que permite consultar los **activos tecnológicos** asignados a una persona y generar reportes cuando se detecten novedades o incidencias.

##  Características
- Consulta de activos tecnológicos asignados a un usuario.
- Registro de novedades e incidencias sobre los activos.
- Interfaz web amigable.
- Desplegado y ejecutado sobre **Apache Tomcat**.
- Desarrollado para su integración con sistemas de gestión de activos.

##  Tecnologías utilizadas
- **Java EE / JSP / Servlets**
- **Apache Tomcat**
- **MySQL** (base de datos de prueba)
- **HTML5, CSS3, JavaScript**
- **JDBC** para conexión a base de datos
- **Maven** para gestión de dependencias

##  Estructura del repositorio
/src # Código fuente Java
/web # Archivos JSP, HTML, CSS y JS
/WEB-INF # Configuración y archivos protegidos
workspace # Carpeta de trabajo del IDE (NetBeans)


## ⚙ Requisitos previos
Antes de ejecutar el portal, necesitas tener instalado:
1. **Java JDK 8 o superior**
2. **Apache Tomcat 9 o superior**
3. **MySQL Server** (o un motor compatible)
4. **Maven** (opcional si usas IDE como NetBeans)

##  Instalación y ejecución
1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/estefaniaortiz22/Portal-de-activos.git
Importar el proyecto en tu IDE (NetBeans, Eclipse o IntelliJ) como proyecto Maven o web dinámico.

Configurar la base de datos:

Crear la base de datos en MySQL.

Ejecutar el script SQL incluido en la carpeta /db (si existe).

Actualizar el archivo de configuración context.xml o el archivo de conexión JDBC con tus credenciales.

Configurar Apache Tomcat en el IDE o desplegar manualmente el .war generado.

Ejecutar el servidor Tomcat y abrir en el navegador:

http://localhost:8080/Portal-de-activos
ruebas

Inicia sesión con un usuario de prueba registrado en la base de datos.
usuarios	contraseña
juan.martinez	123456
estefania.cruzo	123456
laura.cardenas	123456
gustavo.montalvo	123456
jonatan.garcia	123456
edwin.mejia	123456
daniela.lopez	123456
manuela.cruzo	123456

Consulta los activos y registra una novedad para verificar la funcionalidad.

Licencia
Este proyecto es de uso académico y no cuenta con una licencia de distribución pública.
