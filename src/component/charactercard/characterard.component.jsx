import React from 'react'
import {Card,CardHeader,CardMedia,  makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      
      borderRadius: '1rem'
    },
    header: {
        fontSize: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    
    
  });
  
const CharacterCard = ({character,history}) => {
    const classes = useStyles();
    
    return(
        <div>
            <Card elevation={8} className={classes.root} 
            //onClick={()=>console.log(history)}
            onClick={()=>history.push(`./charcter/${character.id}`)}
            >
            <CardHeader className={  classes.header}
               title = {character.name}
                //subheader={character.status}
                
                />
                 <CardMedia
          component="img"
          alt={character.name}
          
          image={character.image}
          title={character.name}
        />
            </Card>
        </div>
    )

}
export default CharacterCard;

