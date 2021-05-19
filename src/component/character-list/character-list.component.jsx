import React, { Fragment, useEffect,useState } from 'react';
import axios from 'axios';
import {Container,makeStyles,CircularProgress} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import CharacterCard from '../charactercard/characterard.component'
import Masonry from 'react-masonry-css';
import "./character-list.styles.css"
const useStyles = makeStyles({
    
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding:50,
        fontSize:'2rem',
        width: 'auto',
    },
    spinner: {
      
  height: '500px',
  width:'200px'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '3rem 0.5rem'
    },
    outter:{
      height: '500px',
    }
})

const CharacterList = ({history,match}) =>  {
    const [characters,setCharacters]=useState([]);
    const [page, setPage] = useState(1);
    const [loading ,setLoading ] = useState(true)
    const handleChange = (event, value) => {
    setPage(value);
  };
    useEffect(()=>{
      setLoading(true)
      let cancel
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`, {
          cancelToken:new axios.CancelToken(c => cancel =c )
        })
        .then(res=>{
          
          setCharacters(res.data.results)
          setLoading(false)
        //  console.log(characters)

        })
        return () => cancel()
    },[page])
    const classes = useStyles()
    if (loading) return <div className={classes.container}><CircularProgress disableShrink className={classes.spinner} /></div>
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    
    return(
        <Fragment>
        <Container>
      <Masonry  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
        
      
      {characters.map((character)=>(
        
        <CharacterCard key={character.name}  character={character} history={history}/>
        
      ))}
      </Masonry>
      
      </Container>
      
      <Pagination className={classes.pagination} count={34} page={page} onChange={handleChange} variant="outlined" color="primary"/>
      
      </Fragment>
      
    )
}
export default CharacterList;