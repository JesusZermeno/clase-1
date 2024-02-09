// import React from 'react'
import Counter from './Counter';
import react from'./img/react.png';


function Main(){
    return(
        <div>
            <Counter datos={['Jesús Javier Zermeño Rodríguez', '20997', '5°A']} />
            <img src={react} alt="logo"/>
            
        </div>
    )
}

export default Main