
Mi propuesta de proyecto consiste en el desarrollo de una aplicación web para la gestión ágil y eficiente de la creación de facturas.

El frontend estará desarrollado con HTML y CSS, proporcionando una interfaz intuitiva y fácil de usar. En cuanto al backend, utilizaré Python para manejar la lógica de negocio y el procesamiento de datos.

El objetivo principal es optimizar el proceso de facturación, permitiendo a los usuarios generar y gestionar facturas de manera rápida y sencilla.

En el módulo hemos estudiado en la asignatura EIE diferentes formas de trabajar por cuenta propia. Una de las primeras necesidades al emprender es disponer de una aplicación para generar facturas, ya que se debe facturar desde el inicio, independientemente del volumen de negocio. Además, muchas aplicaciones comerciales de facturación requieren suscripciones costosas o pagos elevados, lo que puede ser una barrera para autónomos y pequeños negocios.

Aplicación FactursApp buscará ser una alternativa accesible y funcional, especialmente para personas que trabajen por cuenta propia, sin importar el sector en el que operen. Será útil tanto para desarrolladores de software como para dueños de talleres mecánicos, electricistas, fontaneros y cualquier otro profesional autónomo que necesite gestionar su facturación de manera sencilla y eficiente.

Inicialmente, la aplicación gestionará las siguientes entidades mediante bases de datos:

Usuarios (tabla users): Para el registro y gestión de cuentas.
Clientes (tabla clientes): Para almacenar información de los clientes.
Artículos (tabla articulos): Para gestionar los productos o servicios facturados.
Facturas (tabla facturas): Para registrar cada factura emitida.
Líneas de facturas (tabla lineas_facturas): Para detallar los artículos incluidos en cada factura.
Esta estructura permitirá un sistema flexible y escalable, adaptado a las necesidades de emprendedores y autónomos.


Git Hub del proyecto: https://github.com/suzdalenko-dev/factursApp

Url del proyecto:     http://factursapp.web.app

email: alexey.saron@gmail.com; simplefactura2024@gmail.com


# Anteproyecto Alexey Suzdalenko


1. Problema o necesidad actual y propósito del proyecto

Cuando una persona decide trabajar por cuenta propia como autónomo, Sociedad Limitada (SL) o Sociedad Limitada Nueva Empresa (SLNE), debe emitir facturas desde el primer momento en que finaliza un trabajo. 

Aunque es posible generar facturas manualmente en PDF o Excel, este proceso no es cómodo ni eficiente. Además, gestionar y almacenar correctamente las facturas es fundamental, ya que deben presentarse ante Hacienda.

Actualmente, existen aplicaciones comerciales que facilitan la creación de facturas, pero suelen requerir suscripciones o pagos elevados. Esto representa una carga económica adicional para los autónomos, quienes ya enfrentan costos iniciales elevados al comenzar su actividad profesional.
FacturaApp surge como una solución gratuita y en línea que permite a los autónomos y pequeños negocios generar y enviar por email las facturas en formato PDF de manera rápida y sencilla. Su clave es la facilidad de uso, con integración intuitiva de clientes, artículos y tipos de IVA, agilizando el proceso de facturación desde cualquier dispositivo con acceso a Internet.



2. La orientación profesional de FacturaApp

La orientación profesional de FacturaApp está dirigida principalmente a autónomos y pequeñas empresas que necesiten una herramienta sencilla y eficiente para la generación de facturas y gestión de clientes. Esto incluye, pero no se limita a:

Profesionales independientes como:
	1. Abogados, músicos, artistas, programadores, analistas financieros, entre otros.     	Cualquier profesional que, después de realizar un trabajo o servicio, necesite generar
	rápidamente una factura y llevar un control adecuado de las mismas.

	2. Pequeñas empresas como talleres, tiendas, bares, peluquerías, y otros negocios que 	requieren una solución de facturación ágil.

	3. Empresas de nueva creación como sociedades limitadas o sociedades limitadas nuevas 	(SLNE), que se encuentran en sus primeros pasos y necesitan herramientas accesibles para 	cumplir con las normativas fiscales y de facturación.

Explotación comercial: La comercialización de FacturaApp podría seguir un modelo basado en suscripciones, ofreciendo planes mensuales o anuales. Esto incluye opciones de prueba gratuita con funcionalidades limitadas y una versión premium para acceder a características avanzadas, como la generación de informes detallados, integración con bancos, o la creación de plantillas personalizadas de factura.
Además, se podría explorar la venta de la aplicación como software en la nube, permitiendo a los usuarios acceder desde cualquier dispositivo, lo cual es especialmente útil para aquellos que trabajan de manera remota o en múltiples ubicaciones.



3. Infraestructura necesaria: humana, recursos

Para el desarrollo y puesta en marcha de FacturaApp, se requiere una infraestructura adecuada que contemple tanto los recursos humanos como los materiales y tecnológicos necesarios para su funcionamiento.
Infraestructura humana:
En una primera fase, la empresa estará conformada por:
    • El fundador: quien asumirá la mayor parte del trabajo, incluyendo desarrollo, gestión y comercialización de la aplicación.
    • Un empleado con contrato temporal: cuya función será asistir en tareas clave como el desarrollo, soporte técnico o atención al cliente, según las necesidades del negocio.
A medida que el proyecto crezca y genere ingresos suficientes, se evaluará la posibilidad de ampliar el equipo con profesionales especializados, como diseñadores UX/UI, expertos en marketing digital y personal de soporte técnico.
2. Recursos físicos y operativos
Para optimizar costos en la fase inicial, la empresa no contará con una oficina física, sino que operará desde una sede domiciliaria, aprovechando el hecho de que en España es legal trabajar desde casa siendo autónomo.
Los recursos esenciales incluyen:
    • Equipo informático: Ordenadores de alto rendimiento para el desarrollo y pruebas de la aplicación.
    • Conexión a Internet estable y rápida para garantizar el trabajo remoto y la operatividad de la aplicación en la nube.
    • Espacio de trabajo adaptado con mobiliario adecuado para el desarrollo de software y la atención a clientes.




4. Especifique las tecnologías 

Para el desarrollo de FacturaApp, se utilizarán tecnologías modernas que permitan una aplicación escalable, segura y fácil de mantener. Estas tecnologías incluyen:
    • Backend: Se empleará Python con Django, un framework robusto que facilita el desarrollo rápido y seguro de aplicaciones web. Django será alojado en PythonAnywhere, una plataforma que permite desplegar aplicaciones basadas en Python de forma sencilla.
Durante el curso hemos trabajado con tecnologías como PHP en servidor local y Java con Apache Tomcat, lo que ha permitido adquirir conocimientos sobre la instalación y configuración de servidores. Esta experiencia facilitará la gestión de entornos de despliegue para FacturaApp, tanto en servidores locales para clientes específicos como en servidores en la nube como PythonAnywhere, que opera sobre un sistema basado en Debian, similar a los entornos con los que hemos trabajado en el curso.
    • Frontend: La interfaz de usuario se desarrollará utilizando HTML, CSS y JavaScript, tecnologías estándar para la creación de aplicaciones web interactivas. El hosting del frontend se realizará en Firebase Hosting, que ofrece velocidad y seguridad en la entrega de contenido.
Además, durante el curso hemos trabajado con JavaScript y sus funciones y clases, lo que facilita el desarrollo del frontend de FacturaApp con una estructura modular y reutilizable.
    • Gestión de bases de datos: Django incorporará SQLite como base de datos principal. SQLite es una base de datos ligera y altamente portátil, ideal para entornos donde no se requiere una infraestructura de servidor compleja. Esto permitirá que FacturaApp pueda instalarse de forma offline en las instalaciones de determinados clientes, facilitando su uso sin depender de servidores externos.
Capacidad de SQLite: SQLite puede gestionar archivos de base de datos de hasta 281 TB y manejar millones de registros sin problemas, lo que garantiza suficiente almacenamiento para gestionar una gran cantidad de facturas y clientes.
    • Automatización y reconocimiento de facturas: Para futuras funcionalidades de automatización, como el reconocimiento de facturas recibidas de proveedores, se integrará inteligencia artificial con Python. Se utilizarán bibliotecas específicas para la lectura y extracción de datos desde archivos PDF.
    • Generación de documentos y comunicación: Se emplearán bibliotecas de Python para la generación de facturas en PDF, así como herramientas para el envío de correos electrónicos automáticos con las facturas adjuntas.
    • Entorno de desarrollo: Se utilizará Visual Studio Code como editor principal, complementado con plugins para facilitar el desarrollo, la depuración y las pruebas del código.
Con esta infraestructura tecnológica, FacturaApp estará preparada para ofrecer un servicio eficiente y escalable, permitiendo a los autónomos gestionar su facturación de manera ágil y profesional, ya sea en un entorno online o en una instalación local dentro de la infraestructura de un cliente.



5. Tecnología para la publicación, despliegue y control de la aplicación

Tecnología para la publicación, despliegue y control de la aplicación
Para garantizar un flujo de despliegue eficiente y automatizado, FacturaApp utilizará diferentes tecnologías según la parte de la aplicación:
      
    • Backend (Alojado en PythonAnywhere)
El backend de FacturaApp estará alojado en PythonAnywhere, utilizando Git como sistema de control de versiones para gestionar el código.
El flujo de trabajo para el despliegue del backend será el siguiente:
        1. Desarrollo local en el equipo del programador.
        2. Guardado y publicación de los cambios en Git, utilizando GitHub como repositorio remoto.
        3. Acceso a PythonAnywhere y actualización del código desde el repositorio Git, lo que permite que los cambios realizados en local pasen a estar operativos en el servidor en la nube de forma rápida y segura.
      
    • Frontend (Alojado en Firebase Hosting)
La interfaz de usuario de FacturaApp estará alojada en Firebase Hosting, una plataforma de Google optimizada para el despliegue rápido de aplicaciones web.
Para la publicación y actualización del frontend se utilizará Node.js, que permite desplegar los cambios directamente desde el equipo local al servidor de Firebase de manera rápida, sencilla y eficiente.
      
Este flujo de trabajo permite mantener control de versiones, actualizaciones rápidas y una implementación estructurada y organizada del código en los servidores de backend y frontend, garantizando la estabilidad y escalabilidad de FacturaApp.
