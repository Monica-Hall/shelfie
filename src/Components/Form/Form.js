import React, { Component } from "react";
import axios from "axios"; 

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: null, 
            name: "", 
            price: 0, 
            img: ""
        }
        this.createProduct = this.createProduct.bind(this); 
        this.cancelEdit = this.cancelEdit.bind(this); 
        this.handleChange = this.handleChange.bind(this); 

    }

    createProduct = () => {
        const {name, price, img} = this.state
        
        axios.post('/api/product', {name, price, img})
        .then(res => {
            this.props.getInventory()
        }).catch(err => console.log(err))
    }

    cancelEdit = (e) => {
        this.setState({
            name: "", 
            price: 0, 
            img: ""
        })
    }

    handleChange = (e) => {
        const {name, value} = e.target; 
        
        this.setState({
            [name]: value
        })
    }
    
    render(){
        return (
            <div>
                {this.props.edit}
                <div className="form-inputs">
                    <input name="name"
                    type="text"
                    value={this.state.name}
                    placeholder="Product"
                    onChange={this.handleChange}/>

                    <input name="price"
                    type="number"
                    value={this.state.price}
                    placeholder="Price"
                    onChange={this.handleChange}/>

                    <input name="img"
                    type="text"
                    value={this.state.img}
                    placeholder="Place Img URL here"
                    onChange={this.handleChange}/>
                </div>

                <div>
                    <button onClick={this.cancelEdit}>Cancel</button>
                    <button onClick={this.createProduct}>Add</button>
                </div>
            
            </div>
        )
    }
}