import React from 'react'

class SessionForm extends React.Components {
    constructor(props) {
        super(props)
        this.state = {
            email = '',
            password = ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault
        // what does prevent default do again?
        const user = Object.assign( {}, this.state )
        this.props.processForm(user)
    };

    update(field){
        e => {
            this.setState( {[field]: e.currentTarget.value })
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.props.formType}</h1>
                    <label>Email
                        <input type="text" value="this.state.username" onChange={this.update('username')}></input>
                    </label>
                    <label>Password
                        <input type="text" value="this.state.password" onChange={this.update('password')}></input>
                    </label>
                </form>
            </div>
        )
    }
}


export default SessionForm