import React, { Component } from 'react';


class CreateNotes extends Component{

    state = {
        title: '',
        snippet: '',
        body: ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.addNotes(this.state);
        this.props.history.push('/');
    }

    render(){
    return(
        <div className='container'>
            <h3>Create your notes here!</h3>
            <div className='row'>

            <form className="col s12" onSubmit={this.handleSubmit}>

            <div className="row">

                <div className="col s10">
                <label htmlFor="title">Note Title</label>
                <input onChange={this.handleChange} id="title" type="text" className="validate" />
                </div>

            </div>

            <div className="row">

                <div className="col s6">
                <label htmlFor="snippet">Snippet</label>
                <input onChange={this.handleChange} id='snippet' type="text" className="validate" />
                </div>

            </div>

            <div className="row">
                
            <div className="col s12">
                <label htmlFor="body">Body</label>
                <textarea onChange={this.handleChange} id="body" className="materialize-textarea" data-length="120"></textarea>
            </div>

            </div>           
            <button className='btn' onSubmit={this.handleSubmit}>Create</button>
            </form>
            </div>
        </div>
    )
    }
}

export default CreateNotes;