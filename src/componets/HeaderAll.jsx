import React, { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

import '../styles/HeaderStyleAll.css'

// import 'swiper/css';
// import 'swiper/css/pagination';

// import '../styles/prueba.css';

export const HeaderAll = () => {
    const [randomPokemons, setRandomPokemons] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        const fetchRandomPokemon = async () => {
        try {
            const getRandomPokemonId = () => Math.floor(Math.random() * 200) + 1; // funcion que trae aleatorios
            //[100, 4,30,25]
            const pokemonIds = Array.from({ length: 150 }, getRandomPokemonId); // Array .from(tamañ, contenido o como llenar el contenido)

            const fetchedPokemons = [];

            for (const id of pokemonIds) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            fetchedPokemons.push(data);
            }

            setRandomPokemons(fetchedPokemons);
        } catch (error) {
            console.error("Error capturando Pokemon data", error);
        }
        setisLoading(true);
        };
        fetchRandomPokemon();
    }, []);


    const elijepokemon = (data) =>{
        console.log(data.name);
    }

  return (
    <div className="contenedor">
        {isLoading ? (
      randomPokemons.map((item, index) => {
        return (
                <div className='cardPokemon' key={index} onClick={()=>elijepokemon(item)}>
                  {/* <div className='vertical'><h3 className='numero'>#0{item.id}</h3></div> */}
                 <img
                  className="imgPokemones"
                  src={item.sprites.other["official-artwork"]["front_default"]}
                />
                <p className='namePokemon'>{item.name}</p>
                <div style={{display:'flex'}}>
                  {item.types.map(stat =>{
                    if(stat.type.name === 'water'){
                      return <p className='pill water'>{stat.type.name}</p>
                    }
                    else  if(stat.type.name === 'poison'){
                      return <p className='pill poison'>{stat.type.name}</p>
                    }
                    else  if(stat.type.name === 'fire'){
                      return <p className='pill fire'>{stat.type.name}</p>
                    }
                    else  if(stat.type.name === 'electric'){
                      return <p className='pill electric'>{stat.type.name}</p>
                    }
                    else  if(stat.type.name === 'normal'){
                      return <p className='pill normal'>{stat.type.name}</p>
                    }
                    else  if(stat.type.name === 'rock'){
                      return <p className='pill rock'>{stat.type.name}</p>
                    }
                    else  if(stat.type.name === 'ground'){
                      return <p className='pill ground'>{stat.type.name}</p>
                    }
                    else  if(stat.type.name === 'bug'){
                      return <p className='pill bug'>{stat.type.name}</p>
                    }
                    else  if(stat.type.name === 'grass'){
                      return <p className='pill grass'>{stat.type.name}</p>
                    }
                    else  if(stat.type.name === 'flying'){
                      return <p className='pill flying'>{stat.type.name}</p>
                    }
                    else  if(stat.type.name === 'psychic'){
                      return <p className='pill psychic'>{stat.type.name}</p>
                    }
                    else  if(stat.type.name === 'dragon'){
                      return <p className='pill dragon'>{stat.type.name}</p>
                    }
                    return (
                      <p className='pill'>{stat.type.name}</p>
                    )
                  })}
                </div>
              </div>
        );
      })
    ) : (
        <div className='carga'>
        <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
        <h1 className='loading'>Cargando pokemones..</h1>
        </div>
    )}
    </div>
  )
}
