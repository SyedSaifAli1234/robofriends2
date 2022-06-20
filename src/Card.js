import React, {Component} from "react";

class Card extends Component{
    render(props) {
        const {name, age} = this.props;
        return (
            <>
                <div className={"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"}>
                    <img src={`https://robohash.org/${name}?200x200`} alt="robots"/>
                    <h1>{name}</h1>
                    <p>{age}</p>
                </div>
            </>
        )
    }
}

export default Card;