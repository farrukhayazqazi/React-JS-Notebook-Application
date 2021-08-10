import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import CreateNotes from './components/CreateNotes'
import Note from './components/Note'
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


class App extends Component {
  
  state = {

    users: [
      {id: 1, first_name:'Zain', last_name: 'Ali' , email: 'zain@notebook.com', password:'zain123', active: 'false'},
      {id: 2, first_name:'Ali', last_name: 'Ayaz' , email: 'ali@notebook.com', password:'ali123', active: 'false'},
      {id: 3, first_name:'Kamran', last_name: 'Saeed', email: 'kamran@notebook.com', password:'kamran123', active: 'false'},
      {id: 4, first_name:'Nabeel', last_name: 'Zaman', email: 'nabeel@notebook.com', password:'nabeel123', active: 'false'}
    ],

    isLogin : false,

    notes: [
    //   { 
    //     id: null, 
    //     title: null,
    //     snippet: null,
    //     body: null
    // }
    // {id: 1, title: 'Dark Knight Rises', snippet: 'DC', body:'Let put a smile on that face'},

    ]

  }



  render(){


    const authenticateUser = (object) =>{
      
      this.state.users.filter(user => user.email === object.email && user.password === object.password).map(filteredUser =>{
        console.log(filteredUser);
        filteredUser.active = true;
        console.log(filteredUser.active);
      return  this.setState({ isLogin: true});
      }
      
      )
      
    
    }
   
    const authenticationCheck = (loginStatus) =>{
      if(loginStatus===true){ 
        return <Redirect to='/'/>
      }
      else{    
       return <Redirect to='/login'/>;     
      }
    }

    const logout = () =>{
        this.state.users.filter(user => user.active === true).map(filteredUser =>{
        filteredUser.active = false;
      })
      this.setState({isLogin: false});
    }

    const addUser = (user) =>{
        user.id = Math.random();
        
      let users = [...this.state.users, user];
      
      this.setState({users});
    }

    const addNotes = (note) =>{
      note.id = Math.random();
      const notes= [...this.state.notes, note]
      this.setState({notes});
    }

    const deleteNote = (id) =>{
      const notes = this.state.notes.filter(note =>{
        return note.id.toString() !== id
      })

      return this.setState({notes: notes})

      
    }

    
    // { authenticationCheck(this.state.isLogin) }
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar  users={ this.state.users } isLogin={this.state.isLogin} logout={logout}/>
        { authenticationCheck(this.state.isLogin) }
        <Route exact path='/' render={(props) => <Home  {...props} state={this.state} /> } />
        <Route path='/create' render={(props) => <CreateNotes {...props} addNotes={addNotes} /> } />
        <Route path='/login' render={(props) =>  <Login {...props} authenticateUser={authenticateUser} isLogin={this.state.isLogin} users={this.state.users} />  }/> 
        <Route path='/signup' render={(props) => <Signup {...props} addUser={addUser} /> } />
        <Route path='/note/:id' render={(props) => <Note {...props} notes={this.state.notes} deleteNote={deleteNote} /> } />
        </div>
      </BrowserRouter>
  );
}
}

export default App;
