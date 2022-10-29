import React, {MouseEvent} from 'react';
import './App.css';
// import {Button1} from "./Components/Button 1";
import {Button} from "./Button2";


function App2() {
    const Button1Foo = (subscriber:string, age: number, city:string) => {
        console.log(subscriber,age,city)
    }
    const Button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log('Im stupid button')
    }

    return (
        <div className="App">
            <Button name = {'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Im Vasya',22, 'Minsk')}/>
            <Button name = {'MyYouTubeChanel-2'} callBack={()=>Button2Foo('Im Ivan')}/>
            <Button name = {'MyYouTubeChanel-3'} callBack={Button3Foo}/>
        </div>
    );
}

export default App2;
