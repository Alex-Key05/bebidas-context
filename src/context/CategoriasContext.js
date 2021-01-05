import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CategoriasContext = createContext()

const CategoriasProvider = (props) => {

    // Crear el state de context
    const [categorias, setCategorias] = useState([])

    // ejecutar el llamado a la API
    useEffect( () => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await axios.get(url)

            setCategorias(categorias.data.drinks)
        }   
        obtenerCategorias()
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;