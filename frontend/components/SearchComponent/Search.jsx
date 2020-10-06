import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sneakers: "",
            filtered: [],
            searchQuery: ""
        }     
    }
    
    componentDidMount() {
        this.props.requestSneakers();
    }

    componentDidUpdate() {
        if (!this.state.sneakers) {
            this.setState({ 
                sneakers: this.props.sneakers
            })
        }
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

    filter() {
        let filtered = this.state.filtered;
        let sneakers = this.state.sneakers;

        
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <form > 
                    <input type="text" className="search-box" 
                    value={this.state.searchQuery} 
                    onChange={this.update('searchQuery')}/>
                </form>
                test
            </div>
        )
    }
}

export default Search