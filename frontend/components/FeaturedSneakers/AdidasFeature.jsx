import React from 'react'
import { Link } from 'react-router-dom'

class AdidasFeature extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestSneakers()
        window.scrollTo(0,0)
    }

    render() {
        let { sneakers } = this.props
        if (this.props.sneakers.length === 0) return null

        let adidas = sneakers.filter(shoe => {
            return (
                shoe.brand === "Adidas"
            )
        })
        return (
            <div className="carolsel">
                <div className="carol-header">
                    <h1 className="carol-header1"> Stripes Collection </h1>
                    <Link to="/adidas" className="see-all-button"> See All </Link>
                    <Link to="/adidas" className="see-all-button2"> <i class="fas fa-arrow-right"></i></Link>

                </div>
                <div className="sneaker-carol">
                    {adidas.map(shoe => {
                        return (
                            <div className="carol-item">
                                <Link to={`/sneakers/${shoe.id}`}> <img className="carol-img" src={`${shoe.photoUrls[0]}`} /> </Link>
                                <div> {shoe.name} </div>
                            </div>
                            )
                        })}
                </div>
            </div>
        )
    }

}

export default AdidasFeature