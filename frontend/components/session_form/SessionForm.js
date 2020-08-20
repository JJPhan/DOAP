import React from 'react'
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password:  ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign( {}, this.state )
        this.props.processForm(user)
            .then(() => this.props.history.push('/'));
    };

    handleDemo(e) {
        e.preventDefault();
        // console.log(this.props)
        let demoUser = { email: "heracross@gmail.com", password: "password" }
        this.props.login(demoUser)
           .then(() => this.props.history.push('/'))

        let { email, password } = demoUser;
        let interval = 50;
        let login = () => {
            this.props.processForm(this.state);
            this.props.history.push("/")
        };
        if (this.state.email !== email) {
            let inputEmail = setInterval(() => {
                if (this.state.email !== email) {
                    let tempEmail = email.slice(0, this.state.email.length + 1);
                    this.setState({ email: tempEmail });
                } else {
                    clearInterval(inputEmail);
                    fillPassword();
                }
            }, interval);
        }

        let fillPassword = () => {
            let inputPassword = setInterval(() => {
                if (this.state.password !== password) {
                    let tempPassword = password.slice(0, this.state.password.length + 1);
                    this.setState({ password: tempPassword });
                } else {
                    clearInterval(inputPassword);
                    login();
                }
            }, interval);
        };        
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field){
        return e => {
            this.setState( {[field]: e.currentTarget.value })
        }
    }

    render() {
        return(
            <span class="base_form">
                <img class="side_image" src="https://image.goat.com/1000/attachments/product_template_pictures/images/011/867/273/original/312607_00.png.png" /> 
                <div>

                    <form class="form1" onSubmit={this.handleSubmit}>
                        <h1 class="formtype">{this.props.formType}</h1>
                        <label>Email</label>
                            <input type="text" value={this.state.email} onChange={this.update('email')}></input>
                        <label>Password
                        </label>
                            <input type="password" value={this.state.password} onChange={this.update('password')}></input>
                        <input type="submit" ></input>
                    </form>

                    <div>
                        { this.props.errors.map( (error, idx) => <li key={idx} >  {error}  </li>) } 
                    </div>
                </div>
                <button onClick={this.handleDemo}> DEMO LOGIN </button>
            </span>
        )
    }
}


export default SessionForm

