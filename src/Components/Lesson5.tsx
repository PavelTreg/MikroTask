import React from "react";
import {FilterType} from "../App";
type NewComponentType = {
     currentMoney: Array<TaskType>
    onClickFilterHandler: (nameButton: FilterType) => void
}
 type TaskType ={
     banknots: string
     value: number
     number: string
 }


export const NewComponent12 = (props: NewComponentType) => {
    return(
        <div>
            <div>
                <ul>
                    {props.currentMoney.map((objFromMoneyArray, index) => {
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
                    <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                    <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
                    <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
                </div>
            </div>


        </div>
    )
}