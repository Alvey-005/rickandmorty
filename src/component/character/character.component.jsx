import React,{useState,useEffect}from 'react';
import {Grid,Container, makeStyles,Typography,Button,Paper,CircularProgress} from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles({
    img:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
        padding: '3rem 0.5rem'
      },
      paper: {
          padding: '0 1rem',
          borderRadius: '500',
          
      }
})



const Character = ({match,history}) =>{
    const {params} = match;
    const id = params.id;
    
   
    const [character,setCharacter]= useState([])
    const [episodes,setEpisodes]= useState([]) 
    const [loading ,setLoading ] = useState(true)
    
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response=>{
            //console.log(response);
            //console.log(response.data);
            setCharacter(response.data)
            
            const epiUrl=response.data.episode.length>5? response.data.episode.slice(0,5):response.data.episode
            //console.log("url",epiUrl)
            
            //console.log(character)
            
            
            
            let promiseArray = epiUrl.map( url=> axios.get(url) );
            Promise.all( promiseArray )
            .then(
            results => {
            //console.log("response",results);
             setEpisodes(results.map( el => el.data.name ))
            //console.log("name",episodes)
            setLoading(false);
             })
            .catch(console.log)
        })
        
    },[])

    
    
    
    const classes = useStyles()
    if (loading) return <div className={classes.container}><CircularProgress disableShrink className={classes.spinner} /></div>
   
    
    //console.log(newEpisodes)
   // console.log(newEpisodes[0]);
    
    return (
        <Container>
        <Grid container direction="row"
  justify="space-around"
   spacing={3}>
        <Grid lg={6} sm={12} md={4} item><div className={classes.img}><img src={character.image} height={350} width={350} alt={character.name}/>
        </div></Grid>
        <Grid lg={6} sm={12} md={10} item>
            <Paper elevation ={3}  className={classes.paper} ><Typography gutterBottom variant="h3">Name: {character.name}</Typography></Paper>
            <Paper elvation = {3} className={classes.paper}><Typography gutterBottom variant="h5">Status : {character.status}</Typography></Paper>
            <Paper elvation = {3} className={classes.paper}><Typography gutterBottom variant="h5">Gender: {character.gender}</Typography></Paper> 
            <Paper elvation = {3} className={classes.paper} ><Typography gutterBottom variant="h5">Species: {character.species}</Typography></Paper>
            <Paper elvation = {3} className={classes.paper} ><Typography gutterBottom variant="h5">Type: {character.type}</Typography></Paper>
            <Paper elvation = {3} className={classes.paper} ><Typography gutterBottom variant="h5">Location: {character.location? character.location.name: ""}</Typography></Paper>
            <Paper elvation = {3} className={classes.paper}><Typography gutterBottom variant="h5">Origin: {character.origin? character.origin.name: ""}</Typography></Paper>
            <Paper  elvation = {3} >
                <Typography className={classes.paper} variant="h5"   gutterBottom>Episodes It appeared</Typography>
              {
                  episodes.map((episode) => (<Typography className={classes.paper} gutterBottom key={episode}>{episode}</Typography>))
              }
            </Paper>

            <Button variant="contained" onClick={()=>{history.push("/")}}> Back</Button>
  
        </Grid>
        </Grid>
        </Container>
    )
}
export default Character;