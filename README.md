# ApiPokemon

Aplicación web que muestra una grilla responsiva de Pokémon usando la PokeAPI. Permite ver los Pokémon en tarjetas.

## Tecnologías utilizadas
- React + TypeScript
- Vite
- Tailwind CSS
- PokeAPI (https://pokeapi.co/)

## Características
- Grilla responsiva: 2 columnas en móvil, 3 en tablet, 4 en escritorio.
- Scroll infinito: los Pokémon se cargan a medida que haces scroll.
- Loader animado mientras se cargan los datos.
- Hover de color según el tipo principal del Pokémon.
- Imagen de título personalizada.

## Estructura principal
- `src/App.tsx`: Componente principal, muestra el título y la grilla.
- `src/grid/page.tsx`: Lógica de obtención y renderizado de Pokémon.
- `public/titulo.png`: Imagen de cabecera.
- `public/pokebola.png`: Loader y fallback de imágenes.

## Instalación y ejecución
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta en desarrollo:
   ```bash
   npm run dev
   ```
3. Genera build de producción:
   ```bash
   npm run build
   ```

## Deploy en GitHub Pages
1. Asegúrate de que las imágenes estén en la carpeta `public` antes de hacer build.
2. Usa rutas absolutas con el nombre del repo para imágenes (ej: `/ApiPokemon/titulo.png`).
3. Sube el contenido de `dist` a la rama configurada para GitHub Pages.


---
Desarrollado por Christian Ivan Ledesma
# React + TypeScript + Vite
