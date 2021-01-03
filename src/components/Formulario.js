import React, { useContext } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'

const Formulario = () => {

    const {hola} = useContext(CategoriasContext)

    alert(hola)

    return (
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por ingrediente"
                        autoComplete="off"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">--Selecciona categoría--</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-danger"
                        value="Buscar bebidas"
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario