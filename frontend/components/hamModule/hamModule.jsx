import React from 'React';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar'


class HamModule extends React.Component {
    constructor(props) {
        super(props)
            this.state = { 
            showHamBar: false
        }
        this.handleHamBar = this.handleHamBar.bind(this)
        // this.renderHamburger = this.renderHamburger.bind(this)
    }

    handleHamBar(){
        this.setState( {showHamBar: !this.state.showHamBar})
    }   


    render() {
        // let show = this.state.showHambar ? this.render Hamburger() : null
        return (
            <div>   
                <div className="hamBar">
                    <button onClick={this.handleHamBar} > MODAL HAMBAR  </button>
                    {/* <div className={show} id="overlay" /> */}
                </div>
                < Sidebar /> 
            </div>
        )
    }      

}

export default HamModule




