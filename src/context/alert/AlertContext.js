import { createContext, useReducer } from 'react'
import AlertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  return (
    <AlertContext.Provider
      values={{
        alert: state,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
