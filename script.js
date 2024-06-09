new Vue({
    el: '#app',
    data: {
        pokemons: []
    },
    created() {
        this.fetchPokemons();
    },
    methods: {
        async fetchPokemons() {
            for (let i = 1; i <= 30; i++) {  /*iteracion para mostrar datos de los primeros 30 pokemones */
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`); /* api pokedex */
                    const data = await response.json();
                    const pokemon = { /* almacenamiento de los datos del pokemon*/
                        id: data.id,
                        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                        image: data.sprites.front_default,
                        types: data.types.map(typeInfo => typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)),
                        base_experience: data.base_experience,
                        height: data.height
                    };
                    this.pokemons.push(pokemon);
                } catch (error) {
                    console.error("Error fetching Pokémon data: ", error);
                }
            }
        }
    }
});
