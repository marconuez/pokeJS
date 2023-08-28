import React, { useEffect, useState } from 'react'

export const usePokemons = () => {
  
    const [randomPokemons, setRandomPokemons] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const fetchRandomPokemon = async () => {
        try {
            console.log('feching');
            const getRandomPokemonId = () => Math.floor(Math.random() * 200) + 1; // funcion que trae aleatorios
            //[100, 4,30,25]
            const pokemonIds = Array.from({ length: 1 }, getRandomPokemonId); // Array .from(tamañ, contenido o como llenar el contenido)

            const fetchedPokemons = [];

            for (const id of pokemonIds) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            fetchedPokemons.push(data);
            }

            setRandomPokemons(fetchedPokemons);
            // console.log(fetchedPokemons);
        } catch (error) {
            console.error("Error capturando Pokemon data", error);
        }
        setisLoading(true);
    };

    useEffect(() => {
        fetchRandomPokemon();
    }, [])
    
  
    return (
        randomPokemons,
        isLoading
    )
}