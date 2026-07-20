import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetData = () => {
    let [pokemon, setPokemon] = useState([])
    useEffect(() => {
        const fetchData = async () => {
                const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
                console.log(data)
                data.then((res)=>{
                    setPokemon(data)
                })
            
        }
        fetchData()
    }, [])

    return (
        <div>
            <section>
                {pokemon.map((poke)=>(
                    <div>
                        <h2>{poke.}</h2>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default GetData