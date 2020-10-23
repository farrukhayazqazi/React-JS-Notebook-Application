import React, { Component } from 'react';


class Login extends Component{



    state ={
        email: '',
        password: ''
    }



    handleChange = (e) =>{
        this.setState({ [e.target.id] : e.target.value }) 
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.authenticateUser(this.state);  
        this.props.history.push('/')          
       
    }

    
    // <img className='login-pic' src={process.env.PUBLIC_URL + '/login.jpg'} />
    
    render(){
        
        return(
            <div className='container'>
            <h3>Login</h3>
            <div className='row'>

            <div className='col s6' id='login-pic'>
            <img className='login-pic' src={process.env.PUBLIC_URL + '/login.jpg'} />
            </div>
            

            <div className='col s6' id='login-form'>
            <form  onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" onChange={this.handleChange} />
            
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={this.handleChange}  />
            
            <button className='btn'>Login</button>
            </form>
            </div>

            </div>
            
            
        </div>  
    )

}
}
export default Login;