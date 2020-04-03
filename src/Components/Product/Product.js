import React, { Component } from 'react' 

export default class Product extends Component {
    constructor(props){
        super(props)

    }
    render(){
        const {name, price, img} = this.props.element 
        return (
            <div>
                <h2>{name}</h2>
                <h2>{price}</h2>
                <img src={img}/>
            </div>
        )
    }
}