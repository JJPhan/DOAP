import React from 'react'
import SearchItems from '../SearchComponent/SearchItem'

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: ""
        }
        this.submit = this.submit.bind(this)     
    }
    
    componentDidMount() {
        this.props.requestSneakers();
    }

    update(field) {
        return e => {
            this.setState( {[field]: e.currentTarget.value })
        }
    }

    submit(){ 
        this.props.closeSide(false)
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

        if (this.state.searchQuery === "") filteredSneakers = []

        

        let openShow = this.props.is_open ? "sidebar-open" : ""

        return (
            
            <div>
                {this.props.is_open && <div className="overlay" onClick={this.submit } />}
                <div className={"sidebar "+openShow} >
                    <form className="sidebar-search"> 
                        <i className="fas fa-search magnify" />
                        <input type="text" className="sidebar-searchbox" 
                        value={this.state.searchQuery }
                        // placeholder={"Enter Name / Brand / Model / Colorway / Description"}
                        placeholder="Type To Search"
                        onChange={this.update('searchQuery')}
                    />
                    </form>
                
                {filteredSneakers.slice(0, 4).map(sneaker => 
                    <ul className="search-items-container" onClick={this.submit}><SearchItems sneaker={sneaker} submit={this.submit}/></ul>
                    )
                }
                </div>
            </div>
        )
    }
}

export default Search