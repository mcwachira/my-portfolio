import {createContext, useState, useEffect} from 'react'


const ThemeContext = createContext({

    

})



const ThemeProvider = ({children}) => {


    const value = {

    }

    return (

        <ThemeContext.Provider value ={value}>

            {children}
        </ThemeContext.Provider>
    )
}