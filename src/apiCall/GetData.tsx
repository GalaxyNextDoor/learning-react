import { useEffect, useState } from 'react'
import axios from 'axios'

type Pokemon = {
    name: string
    sprites: {
        front_default?: string
        other?: {
            dream_world?: {
                front_default?: string
            }
            'official-artwork'?: {
                front_default?: string
            }
        }
    }
}

const GetData = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/pikachu")
                setPokemon(data)
            } catch (err) {
                setError('Failed to load Pokémon data.')
                console.error(err)
            }
        }

        fetchData()
    }, [])

    if (error) {
        return <div>{error}</div>
    }

    if (!pokemon) {
        return <div>Loading...</div>
    }

    const imageUrl = pokemon.sprites.other?.['official-artwork']?.front_default
        ?? pokemon.sprites.other?.dream_world?.front_default
        ?? pokemon.sprites.front_default

    return (
        <div>
            <section>
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={imageUrl} alt={pokemon.name} />
                </div>
            </section>
        </div>
    )
}

export default GetData