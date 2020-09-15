import React, {useState, useEffect} from 'react';
import DisplayComponent from './displayComponent';


function HooksComponent(){

    const [title] = useState('Hooks Implementation');

    const [counter,setCounter] = useState(0);
    const [news, setNews] =  useState();

    const URL ="http://localhost:8900/news";

    useEffect( ()=>{
        console.log('Inside useEffect');

        fetch(URL)
        .then(res => res.json())
        .then((data)=>{
            setNews(data)
        })

    }, [title])

    return(
        <div>
            <h2>My Title</h2>
            <h2>{title}</h2>

            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>
                Click to Increment
            </button> 

            <DisplayComponent mydata={news}/>
        </div>
    )
}

export default HooksComponent;