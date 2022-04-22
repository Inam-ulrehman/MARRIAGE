import React, { useContext, useReducer } from 'react'
import reducer from '../reducer/reducer'

const initialState = {
  value: true,
  name: '',
  email: '',
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, payload] = useReducer(reducer, initialState)
  const setName = () => {
    payload({ type: 'SET_NAME' })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        setName,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

// =======import========

// import {useGlobalContext} from './context

// =====Use Inside the component =======

// const {value} = useGlobalContext()

// =====wrap your app  inside index========
// import { AppProvider } from './contex/contextapi'

// ;<React.StrictMode>
//   <AppProvider>
//     <App />
//   </AppProvider>
// </React.StrictMode>
