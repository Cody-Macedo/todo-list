import React, {useEffect, useState} from 'react';

const ExoUseEffect = () => {

    const [category , setCategory] = useState('posts')
    const [items , setItems] = useState([])

    useEffect(() =>{
        console.log("Component renders")
        fetch(`https://jsonplaceholder.typicode.com/${category}`)
            .then(response => response.json())
            .then(json => setItems(json))
        
        
        return () =>  {
            //clean up 
            // executé avant
            // ça permet de nétoyer le composant si besoin après que l'action précédent soit finie
            console.log("Previous Component render")
        }
    }, [category])
    return (
        <div>
            <button onClick={() => {setCategory('posts')}}> Posts</button>
            <button onClick={() => {setCategory('users')}}> Users</button>
            <button onClick={() => {setCategory('comments')}}> Comments</button>
            {items.map(item => { return <pre> {JSON.stringify(item)} </pre>})}
        </div>


    );
};

export default ExoUseEffect;
