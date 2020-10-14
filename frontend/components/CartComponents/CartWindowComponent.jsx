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
                <h1> {this.props.listing.price} </h1>
                <div> 
                    <div> ITEM </div>
                    <div> {this.props.sneaker.name} </div>
                </div>
                <div> 
                    <div> SIZE </div>
                    <div> {this.props.listing.size} </div>
                </div>
                <div> 
                    <div> CONDITION </div>
                    <div> NEW </div>
                </div>
                <div> 
                    <div> BOX </div>
                    <div> Good Condition </div>
                </div>
         
                {/* <button onClick={() => this.props.closeAllWindow()}>close</button> */}

                <button onClick={() => this.props.closeAllWindow(false) }> Click </button>
            </div>
        )
    }

}

export default CartWindow
