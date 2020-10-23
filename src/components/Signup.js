import React, { Component } from 'react';


class Signup extends Component{

    state = {
        first_name: '',
        last_name: '',
        email:'',
        password: ''
    }

    handleChange = (e) =>{
        this.setState({[e.target.id]: e.target.value})

    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addUser(this.state);
        this.props.history.push('/login');
        
    }

    render(){
    return(
        <div className='container'>
            <h3>Signup here :)</h3>
            <div className='row'>

            <form className="col s12" onSubmit={this.handleSubmit}>

            <div className="row">

                <div className="col s6">
                <label htmlFor="first_name">First Name</label>
                <input onChange={this.handleChange} id="first_name" type="text" />
                </div>

                <div className="col s6">
                <label htmlFor="last_name">Last Name</label>
                <input onChange={this.handleChange} id='last_name' type="text" />
                </div>

            </div>

            <div className="row">
                
            <div className="col s12">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} id="email" type="email" />
            </div>

            </div>


            <div className="row">
                <div className="col s12">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} id="password" type="password" />
                </div>

            </div>
            <button className='btn'>Signup</button>
            </form>
            </div>
        </div>
    )

}}

export default Signup;