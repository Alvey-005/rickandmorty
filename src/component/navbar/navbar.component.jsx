import React from 'react'
import {ReactComponent as Logo} from '../../asset/Rick_and_Morty.svg'
import {makeStyles} from "@material-ui/core"
const useStyles = makeStyles({
img:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5rem',

}
})
const NavBar = ({children}) => {
    const classes=useStyles()
    return(
        <>
        <div  className={classes.img}><Logo/></div>
        
        </>
    )
}
export default NavBar