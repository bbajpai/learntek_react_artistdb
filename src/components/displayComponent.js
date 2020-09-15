import React from 'react';

function DisplayComponent(props){
    const renderList = ({mydata}) =>{
        if(mydata){
            return mydata.map((item)=>{
                return(
                    <div>
                        <h2>{item.title}</h2>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <h1> News List</h1>
            {renderList(props)}
        </div>
    )
}

export default DisplayComponent;