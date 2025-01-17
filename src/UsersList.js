import React from 'react'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class UsersList extends React.Component {
    
    
    render(){
        return (
            <div>
                <h2>listing of Users {this.props.users.length}</h2>
                <ul className="list-group">
                {this.props.users.map((user)=>{
                    return <li className="list-group-item list-group-item-action"key = {user.id}><Link to={`users/${user.id}`}>{user.name}</Link></li>
                    
                })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
  return{  users:state.users}
}

export default connect(mapStateToProps)(UsersList)