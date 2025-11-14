// 💡 Define la variable para el número total de pokemons (ejemplo: 10)
const TOTALS_POKEMONS = 100;
// 💡 Define la variable para el número total de páginas de detalle de pokemons (ejemplo: 20)
const TOTALS_POKEMONS_PAGES = 50;

// Importa el módulo 'fs' para operaciones de sistema de archivos (Necesario en Node.js)
const fs = require('fs');

// El IIFE (Immediately Invoked Function Expression) debe ser async para usar await
(async () => {
    try {
        // --- 1. Generación de Rutas Estáticas ---

        // Rutas de detalle por ID: /pokemons/1, /pokemons/2, etc.
        const pokemonsIdRoutes = Array.from({ length: TOTALS_POKEMONS }, (_, i) => `/pokemons/${i + 1}`);

        // Rutas de paginación: /pokemons/pages/1, /pokemons/pages/2, etc.
        const pokemonsPagesRoutes = Array.from({ length: TOTALS_POKEMONS_PAGES }, (_, i) => `/pokemons/pages/${i + 1}`);


        // --- 2. Obtención de Rutas Dinámicas desde la API ---

        console.log(`Buscando la lista de ${TOTALS_POKEMONS} Pokémon de la PokeAPI...`);

        // 🐛 CORRECCIÓN: Usar fetch con await y then() para obtener la lista de pokemons
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTALS_POKEMONS}`)

        if (!response.ok) {
            throw new Error(`Error al cargar datos de la API: ${response.status}`);
        }

        const pokemonList = await response.json();

        // Crea las rutas de detalle por nombre: /pokemons/bulbasaur, /pokemons/charmander, etc.
        const pokemonNamesRoutes = pokemonList.results.map(
            pokemon => `/pokemons/${pokemon.name}`
        );


        // --- 3. Combinación y Escritura de Archivo ---

        // 🚀 CORRECCIÓN: Combina las tres listas de rutas en un solo array,
        // después de que todos los datos hayan sido obtenidos.
        const allRoutes = [
            ...pokemonsIdRoutes,
            ...pokemonsPagesRoutes,
            ...pokemonNamesRoutes
        ];

        // 4. Escribe el contenido completo. Se movió aquí para que 'allRoutes' esté definido.
        fs.writeFileSync('routes.txt', allRoutes.join('\n'));

        console.log(`✅ ¡Éxito! Se escribieron ${allRoutes.length} rutas en 'routes.txt'.`);
        console.log(`- Rutas por ID (Estáticas): ${pokemonsIdRoutes.length}`);
        console.log(`- Rutas por Página (Estáticas): ${pokemonsPagesRoutes.length}`);
        console.log(`- Rutas por Nombre (API Dinámicas): ${pokemonNamesRoutes.length}`);

    } catch (error) {
        console.error("❌ Ocurrió un error durante la ejecución:", error.message);
        console.error("Asegúrate de que 'fetch' esté disponible en tu entorno (ej. usar Node.js v18+ o instalar 'node-fetch').");
    }
})();
