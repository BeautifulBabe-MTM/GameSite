import React, { Component } from "react";

export class Items extends Component {
    render(){
        return(
            <main>
                {this.props.items.map(e => (
                    <h1>{e.title}</h1>
                ))}
            </main>
        )
    }
}

export default Items