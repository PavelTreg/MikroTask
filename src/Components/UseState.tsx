import React, {useState} from 'react';
import './App.css';

function UsSt() {

    let [a, setA]= useState(1)
    const onClickHandler =()=>{
        setA(++a)
        console.log(a)
    }
    const zero =()=>{
        setA(0)
    }
    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={zero}>zero</button>
        </div>
    );
}

export default UsSt;