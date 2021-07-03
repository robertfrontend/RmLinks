import React, { createContext } from 'react'
import { useState } from 'react'
import usuarios from '../json/usuarios.json'

export const DataContext = createContext();


console.log(usuarios.users[0], 'usuarios');

const dataFiexd = usuarios.users[0]

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(dataFiexd)


    return (
        <DataContext.Provider value={{
            data,
            setData
        }} >
            { children }
        </DataContext.Provider>
    )
}