import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios"; 


export default class Dashboard extends Component {
    constructor(props) {
        super(props)

    }

    deleteProduct = id => {
        axios.delete(`/api/product/${id}`).then(res => {
            this.props.getInventory()
        }).catch(err => console.log(err))
    }

    editProduct = id => {
        axios.put(`/api/product/${id}`).then(res => {
            this.props.updateProduct()
        }).catch(err => console.log(err))
    }


    render(){
        let mappedInventory = this.props.inventory.map(element => {
            return(
                <Product key={element.id}
                element={element}
                deleteProduct={this.deleteProduct}
                editProduct = {this.editProduct}/>
            )
        })
        return (
            <div>
                {mappedInventory}
            </div>
        )
    }
}