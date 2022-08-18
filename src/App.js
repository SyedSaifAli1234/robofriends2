import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

const App =()=>{
    return(
        <>
            <h1>Robo friends</h1>
            <SearchBox/>
            <CardList/>
        </>
    )
}

export default App