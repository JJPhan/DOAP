import React from 'react'
import SneakerIndexItem from '../SneakerComponents/SneakerIndexItem'

class SearchIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    // why do we do component did mount again...?
    // so we update the state then have access to to 'sneakers'

    componentDidMount() {
        window.scrollTo(0,0)
        this.props.requestSneakers()
    }

    render() {

        let searchTerms = this.props.location.pathname.slice(8).split(" ")
        let {sneakers} = this.props
        let filteredSneakers = []; 

        searchTerms = searchTerms.map(term => term.toLowerCase())

        sneakers.forEach(sneaker => {
            if (searchTerms.every(terms => 
                (sneaker.name.toLowerCase().includes(terms) ||
                sneaker.description.toLowerCase().includes(terms) ||
                sneaker.brand.toLowerCase().includes(terms) ||
                sneaker.colorway.toLowerCase().includes(terms) ||
                sneaker.silhouette.toLowerCase().includes(terms) ||
                sneaker.category.toLowerCase().includes(terms)
                ) 
            ))
            filteredSneakers.push(sneaker)
        })


        return (
            <div>
                <h1 className="search-heading1"> Search Results for " {`${this.props.location.pathname.slice(8)}`} " </h1>
                <h1 className="search-heading2"> Diplaying {`${filteredSneakers.length}`} Search Results </h1>
                <ul className="snkr-idx">
                    {filteredSneakers.map(sneaker => 
                    <SneakerIndexItem key={sneaker.id} sneaker={sneaker} /> )}
                </ul>
            </div>
        )
    }
}

export default (SearchIndex)