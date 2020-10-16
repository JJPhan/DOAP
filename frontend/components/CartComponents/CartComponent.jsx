import React from 'react'

class CartComponent extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.requestCart()
    }

    render() {
        console.log("test")
        console.log(this.props)
        return(
            <div>
                <ul>
                    { this.props.cartItems.map(items => 
                        // return (
                            <div>
                                {items.sneakerName}                   
                                {items.sneakerPrice}
                                {items.sneakerSku}
                                <img className="sneaker-show-img" src={`${items.sneakerPhoto}`} />
                                <button onClick={() => this.props.removeCartItem(items.id)}> delete </button>
                            </div>
                    )}
                </ul>
            </div>
        )
    }

}

export default CartComponent 