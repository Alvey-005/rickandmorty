import React from 'react';
import {Button, makeStyles,Typography} from "@material-ui/core"

const useStyles = makeStyles({
    centering:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem',
    
    }
    })

const Error404 = ({match,history}) => {
    const classes = useStyles()
    console.log(match)
    return (
        <div className={classes.centering}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h2">Page not found</Typography>
            <Button variant="contained"  onClick={()=>history.push('/')}>Go To Home Page</Button>
        </div>
)
}
export default Error404; 