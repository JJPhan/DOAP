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
        
            const demoUser = { email: "heracross1@gmail.com", password: "pikachu" }
        // this.props.login(demoUser)
        //     .then(() => this.props.history.push('/'))
        
       
         
            let { email, password } = demoUser;
            let interval = 150;
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
            <div className="base_form">
                <img className="side_image" src="https://image.goat.com/1000/attachments/product_template_pictures/images/011/867/273/original/312607_00.png.png" /> 
                <div className="signInBox-Right">
                    <form className="form1" onSubmit={this.handleSubmit}>
                        <h1 className="formtype">{this.props.formType}</h1>
                        <label className="signInLabel" > Email </label>
                        <input className="inputBox" type="text" value={this.state.email} onChange={this.update('email')}></input>
                        <label className="signInLabel" > Password </label>
                        <input className="inputBox" type="password" value={this.state.password} onChange={this.update('password')}></input>
                    </form>
                        { this.props.errors.map( (error, idx) => <li key={idx} >  {error}  </li>) } 
                    <div>
                        <input type="submit" ></input>
                        <button onClick={this.handleDemo}> DEMO LOGIN </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default SessionForm

