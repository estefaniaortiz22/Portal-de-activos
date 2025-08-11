# Portal de Gestión de Activos Tecnológicos

Este es un proyecto Java EE para la gestión de activos tecnológicos de una empresa FI. El portal permite a los usuarios autenticarse, consultar sus activos asignados, confirmar la información o reportar novedades sobre los mismos.

## Características

- **Autenticación de usuarios**: Los usuarios pueden acceder con su usuario y contraseña de red.
- **Visualización de activos**: Muestra los activos tecnológicos asignados al usuario autenticado.
- **Confirmación de información**: El usuario puede confirmar que la información mostrada es correcta.
- **Reporte de novedades**: El usuario puede reportar inconformidades con los activos asignados.

## Tecnologías utilizadas

- Java EE 8
- Servlets y JSP
- HTML, CSS
- Maven para gestión de dependencias

## Estructura del proyecto

```
java-asset-portal/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── grupofi/
│   │   │           └── portal/
│   │   │               ├── models/
│   │   │               │   ├── Asset.java
│   │   │               │   └── User.java
│   │   │               ├── servlets/
│   │   │               │   ├── ConfirmationServlet.java
│   │   │               │   ├── DashboardServlet.java
│   │   │               │   ├── LoginServlet.java
│   │   │               │   ├── LogoutServlet.java
│   │   │               │   └── ReportServlet.java
│   │   │               └── utils/
│   │   │                   └── DatabaseUtil.java
│   │   └── webapp/
│   │       ├── resources/
│   │       │   └── images/
│   │       │       ├── gfi.jpg
│   │       │       ├── mari.jpg
│   │       │       └── mariatuservicio.jpg
│   │       ├── WEB-INF/
│   │       │   ├── glassfish-web.xml
│   │       │   └── web.xml
│   │       ├── confirmation.jsp
│   │       ├── dashboard.jsp
│   │       ├── login.jsp
│   │       └── report.jsp
└── pom.xml
```

## Configuración e instalación

1. Clona este repositorio o descarga el código fuente.
2. Abre el proyecto en NetBeans IDE.
3. Configura un servidor Tomcat o GlassFish en NetBeans.
4. Construye el proyecto y despliégalo en el servidor.

## Credenciales de prueba

Los siguientes usuarios están configurados en la aplicación:

- **Usuario**: juan.martinez, **Contraseña**: 123456
- **Usuario**: estefania.cruzo, **Contraseña**: 123456
- **Usuario**: laura.cardenas, **Contraseña**: 123456
- **Usuario**: gustavo.montalvo, **Contraseña**: 123456
- **Usuario**: jonatan.garcia, **Contraseña**: 123456
- **Usuario**: edwin.mejia, **Contraseña**: 123456
- **Usuario**: daniela.lopez, **Contraseña**: 123456
- **Usuario**: manuela.cruzo, **Contraseña**: 123456

## Importación en NetBeans

Para importar este proyecto en NetBeans:

1. Abre NetBeans IDE
2. Selecciona "File" > "Open Project"
3. Navega hasta la carpeta donde tienes el proyecto
4. Selecciona la carpeta y haz clic en "Open Project"

## Funcionamiento

1. El usuario accede a la página de login y se autentica con sus credenciales.
2. Una vez autenticado, se muestra la página del dashboard con los activos asignados.
3. El usuario puede confirmar que la información es correcta o reportar alguna novedad.
4. Al reportar una novedad, se envía un correo a mariatuservicio@grupofi.com.co para generar un caso.

## Notas importantes

- Esta es una aplicación de demostración que utiliza datos simulados.
- En un entorno real, se conectaría a una base de datos y servicios de correo reales.
- La aplicación está diseñada para ser desplegada en un servidor Java EE como Tomcat, GlassFish o similar.
