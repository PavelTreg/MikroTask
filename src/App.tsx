import React, {useState} from 'react';
import './App.css';
import {NewComponent12} from "./Components/Lesson5";
export type FilterType = 'all' |  'Dollars' | 'RUBLS'
function App() {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])
    let [filter,setFilter] = useState<FilterType>('all')
let onClickFilterHandler = (nameButton:FilterType) => {
            setFilter(nameButton)
}
    let currentMoney = money
    if (filter ==='RUBLS') {
                currentMoney = money.filter((filteredMoney) => filteredMoney.banknots ==='RUBLS' )
    }
    if (filter ==='Dollars') {
                currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    return (
      <NewComponent12 onClickFilterHandler = {onClickFilterHandler} currentMoney = {currentMoney}/>
       /* <div>
            <ul>
                {currentMoney.map((objFromMoneyArray, index) => {
                    return (

                        <li key={index}>
                            <span>{objFromMoneyArray.banknots}</span>
                            <span>{objFromMoneyArray.value}</span>
                            <span>{objFromMoneyArray.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style = {{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
            </div>
        </div>*/
  );
}

export default App;
