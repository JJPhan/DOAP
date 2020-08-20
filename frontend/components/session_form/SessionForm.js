import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password:  ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        // what does prevent default do again?
        const user = Object.assign( {}, this.state )
        this.props.processForm(user)
            .then(() => this.props.history.push('/'))
        
    };

    update(field){
        return e => {
            this.setState( {[field]: e.currentTarget.value })
        }
    }

    render() {
        return(
            <div class="base_form">
                <form class="form1" onSubmit={this.handleSubmit}>
                    <h1 class="formtype">{this.props.formType}</h1>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.update('email')}></input>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update('password')}></input>
                    </label>
                    <input type="submit" ></input>
                </form>
            </div>
        )
    }
}


export default SessionForm



const login_form = () = {
    <h1>  Log In </h1>
    
}