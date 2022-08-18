import React from "react";
import Card from "./Card";
import {robots} from "./robots";

const CardList=({name, age})=>{

    return(
        <>
            {
                robots.map((user, i)=>{
                    return(
                        <Card key={i} name={user.name} age={user.age}/>
                    );
                })
            }
        </>
    )
}

export default CardList;