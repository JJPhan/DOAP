import React from 'react'
import SneakerIndexItem from '../SneakerComponents/SneakerIndex'

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: ""
        }     
    }
    
    componentDidMount() {
        this.props.requestSneakers();
    }

    update(field) {
        return e => {
            this.setState( {[field]: e.currentTarget.value })
        }
    }
    // filter method 
    // iterate through the search query
    // if the each word in the search query is found in at least one of the sneaker's attribute
        // split and iterate through search query
        // 
    // add the sneaker into the search filter

    render() {

        console.log(this.state)
        let searchTerms = this.state.searchQuery.split(" "); // "blue jordan" => [blue, jordan]
        let sneakers = this.props.sneakers;
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
                <form > 
                    <input type="text" className="search-box" 
                    value={this.state.searchQuery }
                    placeholder={"Enter Name / Brand / Model / Colorway / Description"}
                    onChange={this.update('searchQuery')}
                    />
                </form>
                {filteredSneakers.map(sneaker => 
                    // <SneakerIndexItem key={sneaker.id} sneaker={sneaker} /> 
                    <ul>{sneaker.name}</ul>
                    )
                }
            </div>
        )
    }
}

export default Search