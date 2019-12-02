import React from 'react'

import {connect} from 'react-redux'

class UserShow extends React.Component {
    
    render(){
        return (
            <div style={{backgroundImage: "url(" + "https://www.fabulousblogging.com/wp-content/uploads/2012/10/bkg-2.png" + ")"}} class="jumbotron jumbotron-fluid">
<div className="container">
  

            <div className="row ">
                <div className="col-md-3">
                <h2>{this.props.users && this.props.users.username}</h2>
              <p>Mail@-{this.props.users && this.props.users.email}</p>
              <img style={{"width":"300px"}}src={`https://picsum.photos/200/300?$2`}/>

              </div>
                <div className="col-md-7 offset-md-2">
                <h1>posts-{this.props.posts.length}</h1>
                <ul>{this.props.posts.map(post=>{
                return(<div className=" text-black bg-light mb-4" style={{"max-width": "20rem"}}>
                         <li className=" font-italic ">{post.title}</li>
                         </div>)
                })}</ul>
                </div>
            </div>
            </div>
            </div> )
    }
}


const mapStateToProps=(state,props)=>{
    return{
        users:state.users.find(item=>item.id==props.match.params.id),
        posts:state.posts.filter(item=>item.userId==props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserShow)


