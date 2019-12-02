import React from 'react';
import {connect} from 'react-redux'
import PostsList from './PostsList'

import PostShow from './PostShow'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Comments from './Comments';
import UserDrop from './UserDrop'
import UserShow from './UserShow'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
    <div>
    <h2>BLOG UI</h2>
    <div className="navbar navbar-expand-lg navbar-light bg-light">
     
     <Link className="navbar" to='/'>home</Link> |
     <Link className="navbar" to="/users">Users</Link> |
     <Link className="navbar" to="/posts">Posts</Link> 
     </div>
    <Route path='/' component={Home} exact={true}/>
    <Route path="/posts" component={PostsList} exact={true}/>
     <Route path='/posts/:id'component={PostShow}/>
     <Route path='/posts/:id'component={Comments}/>
     <Route path="/users" component={UserDrop} exact={true}/>
    <Route path="/users/:id" component={UserShow}/>
    </div>
    </BrowserRouter>
  );
}

export default connect()(App);
