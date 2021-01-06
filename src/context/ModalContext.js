import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ModalContext = createContext(); 

const ModalProvider = props => {

    // state del provider
    const [idreceta, setIdReceta] = useState(null)
    const [informacion, setReceta] = useState({})

    useEffect(() => {
       if(idreceta) {
        const consultarAPI = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const respuesta = await axios.get(url);
            setReceta(respuesta.data.drinks[0])
        }
        consultarAPI()
       }
    }, [idreceta])

    return(
        <ModalContext.Provider
            value={{
                informacion,
                setIdReceta,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
