import React from 'react'
import { Link } from 'react-router-dom'

class RecFeatures extends React.Component {
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

        let recommendedSneakers = []
        while (recommendedSneakers.length < 10) {
            let randNum = Math.floor(Math.random() * 52)
            if (!recommendedSneakers.includes(sneakers[randNum])) recommendedSneakers.push(sneakers[randNum])
        }

        return (
            <div className="carolsel2">
                <div className="carol-header">
                    <h1 className="carol-header1"> YOU MAY ALSO LIKE </h1>
                    <Link to="/sneakers" className="see-all-button"> See All </Link>
                    <Link to="/sneakers" className="see-all-button2"> <i class="fas fa-arrow-right"></i></Link>

                </div>
                <div className="sneaker-carol">
                    {recommendedSneakers.map(shoe => {
                        return (
                            <div className="carol-item">
                                <Link to={`/sneakers/${shoe.id}`}> <img className="carol-img" src={`${shoe.photoUrls[0]}`} /> 
                                <div> {shoe.name} </div> </Link>
                            </div>
                            )
                        })}
                </div>
            </div>
        )
    }

}

export default RecFeatures