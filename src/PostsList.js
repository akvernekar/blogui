import React from 'react'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class PostsList extends React.Component {
    
    render(){
        
        return (
            <div style={{backgroundImage: "url(" + "https://www.fabulousblogging.com/wp-content/uploads/2012/10/bkg-2.png" + ")"}} class="jumbotron jumbotron-fluid">
            <div className='col-md-6 offset-md-3'>
                <h2>Showing posts {this.props.posts.length}</h2>
                <ul className="list-group">
                {this.props.posts.map((user)=>{
                    return <li className="list-group-item list-group-item-action" key = {user.id}><Link to={`posts/${user.id}`}>{user.title}</Link></li>
            
                })}
                </ul>
            </div>
            </div>)
    }
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}


export default connect(mapStateToProps)(PostsList)