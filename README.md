# Employees

Este proyecto es una aplicación web desarrollada con React y TypeScript, utilizando Vite como herramienta de construcción y una variedad de librerías y herramientas para la gestión de formularios, consultas, y estilos. El proyecto utiliza Tailwind CSS para la maquetación y ESLint para el análisis estático del código.

## Tecnologías principales

- **React** (v18.3.1) - Biblioteca para crear interfaces de usuario.
- **TypeScript** (v5.2.2) - Un superconjunto de JavaScript que añade tipado estático.
- **Vite** (v5.3.4) - Herramienta de desarrollo rápida para proyectos modernos con soporte para React.
- **Tailwind CSS** (v3.4.13) - Framework CSS para crear interfaces de usuario modernas.
- **React Query** (v5.56.2) - Gestión de estados y datos remotos.
- **Zustand** (v5.0.0-rc.2) - Librería ligera para el estado global.
- **Formik** (v2.4.6) - Gestión de formularios.
- **Yup** (v1.4.0) - Validación de esquemas de formularios.
- **Axios** (v1.7.7) - Cliente HTTP basado en promesas.
- **ESLint** (v8.57.0) - Linter de JavaScript y TypeScript para mantener código limpio y libre de errores.

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio:
    ```bash
    git clone https://github.com/fabjiro/employees_test.git
    cd employees
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

## Scripts disponibles

En el archivo `package.json`, se definen los siguientes scripts:

- **`npm run dev`**: Inicia el servidor de desarrollo con Vite.
- **`npm run build`**: Compila la aplicación para producción, utilizando `tsc` y `vite build`.
- **`npm run lint`**: Ejecuta ESLint para analizar el código y garantizar que sigue las mejores prácticas. Los archivos de TypeScript (`.ts` y `.tsx`) son analizados.
- **`npm run preview`**: Previsualiza la versión de producción tras haber ejecutado `build`.

## Licencia

Este proyecto es privado y no tiene una licencia pública asignada.