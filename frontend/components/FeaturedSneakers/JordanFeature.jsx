import React from 'react'
import { Link } from 'react-router-dom'

class JordanFeature extends React.Component {
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

        let jordan1s = 
                [
                    sneakers[0], 
                    sneakers[24],
                    sneakers[5], 
                    sneakers[22],
                    sneakers[11], 
                    sneakers[21],
                    sneakers[15], 
                    sneakers[20],
                    sneakers[14],
                ]
        return (
            <div className="carolsel">
                <div className="carol-header">
                    <h1 className="carol-header1"> Jordan Brand Collection </h1>
                    <Link to="/airjordans" className="see-all-button"> See All </Link>
                    <Link to="/airjordans" className="see-all-button2"> <i class="fas fa-arrow-right"></i></Link>

                </div>
                <div className="sneaker-carol">
                    {jordan1s.map(shoe => {
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

export default JordanFeature