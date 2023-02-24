import React, {useContext} from 'react'
import { ToggleTheme } from './useState'

export const themeStyle = (theme) =>({
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  })
function UseContext(){
    const theme = useContext(ToggleTheme)
    return theme
}

export default UseContext;