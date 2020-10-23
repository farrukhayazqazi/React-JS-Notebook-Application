import React from 'react';
import { Link } from 'react-router-dom'; 


const Home = ({state}) =>{
    

    console.log('these are the props');
    console.log(state.users);
    
    // {users.map(user => user.active === true ? <h2>Welcome back, {user.first_name} !</h2> : null)}
    
    const greetUser = (isLogin) =>(
        isLogin === true ? (state.users.filter(user => user.active === true).map(filteredUser =>{
            return <h2 key={filteredUser.id}>Welcome back, {filteredUser.first_name} :D</h2>
        })) : (
            <h2>Login and create amazing notes</h2>
        )
    )

    const notes = () =>{
        return(
        state.notes.length > 0 ? (
            state.notes.map(note =>{
            return(<div className='note-card' key={note.id}>
            <div className="col s12 m7">
            <div className="card horizontal">
              <div className="card-image">
                <img className='pencil-img' src={process.env.PUBLIC_URL + '/pencil.png'} alt='pencil-img' />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                <Link to={'/note/' + note.id}>
                    <h4>{note.title}</h4>
                </Link>
                <p>{note.snippet}...</p>
                </div>
              </div>
            </div>
          </div> 
          </div>)
        }))
          :
          (<p className='no-notes'>No notes here to show :)</p>)
    )
        }
    
    
    
    return(
        <div className='container'>
            { greetUser(state.isLogin) }
            { state.isLogin === true ? notes() :(null) }
        </div>
    )

}

export default Home;