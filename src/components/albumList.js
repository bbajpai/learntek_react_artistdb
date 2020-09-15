import React from 'react';

const AlbumList = (props)=>{

    const showList = ({albumList})=>{
        console.log(props);
        if(albumList){
            return albumList.map((item)=>{
                return(
                    <img key={item.id} src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }
    }

    return(
        <div className="album_list">
            {showList(props)}
        </div>
    )
}

export default AlbumList;