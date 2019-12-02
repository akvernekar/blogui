import React from 'react'

import {connect} from 'react-redux'


class PostShow extends React.Component {
    
   
    render(){
        console.log(this.props.posts)
        return (<div style={{backgroundImage: "url(" + "https://www.fabulousblogging.com/wp-content/uploads/2012/10/bkg-2.png" + ")"}} class="jumbotron jumbotron-fluid">
            <div className="col-md-7 offset-2">
            <h2 >posts show page - {this.props.match.params.id}</h2>
            <div className="card">
            <div className="card-body">
                
              <h3 className="card-title">{this.props.posts.title}</h3>
              <p className="card-text">boby-{this.props.posts.body}</p>
            
              </div>
              </div>
            </div>
            </div> )
    }
}

const mapStateToProps=(state,props)=>{
  return{posts:state.posts.find(item=>item.userId==props.match.params.id)}
}


export default connect(mapStateToProps)(PostShow)