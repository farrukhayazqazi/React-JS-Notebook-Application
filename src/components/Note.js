import React, { Component } from 'react';

class Note extends Component{


    handleClick = (e) =>{
        this.props.deleteNote(this.props.match.params.id);
        this.props.history.push('/');
    }

     note = () =>{
         
        return this.props.notes.filter(note => note.id.toString() === this.props.match.params.id ).map(filteredNote =>{
            return(
                <div key={filteredNote.id}>
                <div className='delete'>
                <button title='delete' onClick={() => this.handleClick(filteredNote.id)} className='fa fa-trash'></button>
                </div>
                <h1>{filteredNote.title}</h1>
                <p className='note-content'>{filteredNote.body}</p>
                </div>
            )
            
        })  
    }
    render(){   


        return(
            <div className='container'>
                { this.note() }
            </div>
        )
    }
}

export default Note;

