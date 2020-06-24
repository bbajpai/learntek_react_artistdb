import React from 'react';
import {Link} from 'react-router-dom';

const ArtistsList = (props) =>{
    console.log(props);
    console.log('Hiiii i am props');
    console.log('Hiiii i am props' , props);
    console.log(`Hiiii i am ${props} props value`);

    const list =({allArtists})=>{
        if(allArtists){
            return allArtists.map((item)=>{
                const style={
                    background:`url('/images/covers/${item.cover}.jpg') no-repeat`
                }
                return(
                   <Link key={item.id} to={`/artist/${item.id}`} className="artist_item" style={style}>
                        <div> {item.name} </div>
                   </Link>
                )
          }) 
        }
         
    }

    return(
        <div className="artists_list">
            <h3>Browse the Artists</h3>
           {list(props)}
        </div>
    )
}


export default ArtistsList;