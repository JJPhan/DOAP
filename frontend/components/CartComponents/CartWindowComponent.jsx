import React from 'react'
import { closeListings } from '../../actions/listing_actions'
import Sneaker from '../SneakerComponents/Sneaker'


class CartWindow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return( 
            <div>
                <h1> Lowest Price </h1>
                {/* <h1> {props.listing.price} </h1> */}
                <div> 
                    <div> ITEM </div>
                    <div> {this.props.sneaker.name} </div>
                </div>
                <div> 
                    <div> SIZE </div>
                    {/* <div> {props.listing.price} </div> */}
                </div>
                <div> 
                    <div> CONDITION </div>
                    <div> NEW </div>
                </div>
                <div> 
                    <div> BOX </div>
                    <div> Good Condition </div>
                </div>
                {console.log("test")}
                {console.log(this.props)}
                {/* <button onClick={ this.props.openCartWindow(false) }> Click </button> */}
            </div>
        )
    }

}

export default CartWindow