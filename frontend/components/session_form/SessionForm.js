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
        // this.submit = this.submit.bind(this)

    }

    componentDidMount(){
        this.props.closeSide(false)
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
       
            let { email, password } = demoUser;
            let interval = 150;
            let login = () => {
                this.props.login(this.state);
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
                    <form id="form1" onSubmit={this.handleSubmit}>
                        <h1 className="formtype"> 
                            <div className="formtype-label">
                                { this.props.formType === "login" ? "Log In" : "Sign Up"}
                            </div>
                            <div className="login-text1">
                                { this.props.formType === "login" && "You need to be logged in to continue"} 
                            <Link to='/login' className="redirect-signin">
                                {this.props.formType === "signup" && "Already have an Account?"}
                            </Link>
                            </div>
                            <Link to='/signup' className="redirect-signin">
                                {this.props.formType === "login" && "Don't have an Account?"}
                            </Link>

                        </h1>
                        <label className="signInLabel" > Email </label>
                        <input className="inputBox" type="text" value={this.state.email} onChange={this.update('email')}></input>
                        <label className="signInLabel" > Password </label>
                        <input className="inputBox" type="password" value={this.state.password} onChange={this.update('password')}></input>
                        { this.props.errors.map( (error, idx) => <li key={idx} >  {error}  </li>) } 
                    </form>
                    <div className="session-buttons">
                        <input className="submit-button" form="form1" type="submit" value={`${this.props.formType === "login" ? "Log In" : "Sign Up"}`}></input>
                        <button className="demo-button" onClick={this.handleDemo}> DEMO LOGIN </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default SessionForm

