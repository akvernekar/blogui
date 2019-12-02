import React from 'react'

import {connect} from 'react-redux'

import {singleUser,resetSingleUser} from './actions/singleUser'
import {singlePost,resetSinglePost} from './actions/singlePost'



class UserDrop extends React.Component{
    
   
    

handle=(e)=>{

    {e.target.value!=''?
    this.props.dispatch(singleUser(e.target.value)) ||
    this.props.dispatch(singlePost(e.target.value)) 
    
    :
    this.props.dispatch(resetSingleUser())
    this.props.dispatch(resetSinglePost())

}



    }
componentWillUnmount=()=>{
    this.props.dispatch(resetSingleUser())
    this.props.dispatch(resetSinglePost())
}



    render(){
       
        return(
            <div style={{backgroundImage: "url(" + "https://www.fabulousblogging.com/wp-content/uploads/2012/10/bkg-2.png" + ")"}} class="jumbotron jumbotron-fluid">
            <div className="row">
            <div className="col-md-3 input-group ">
               <span> <h2>select users</h2>
                
                <div className="input-group-prepend">
                <select className="custom-select " onChange={(e)=>{this.handle(e)}} >
                <option  value=''>select users</option>
                {this.props.users.map(item=>{
                        return (<option className="list-group-name" key={item.id} value={item.id} >{item.name}</option>)
                    })
                    
                }</select>
                </div>
                {Object.keys(this.props.singleUser).length!=0 && <img className="img-thumbnail" src={`https://picsum.photos/200/300?${this.props.singleUser.id}`} width="400px" />}
                </span>
                
                </div>
            
                <div className="col-md-8">
                <h3>{ this.props.singleUser.name}</h3>
               {Object.keys(this.props.singleUser).length!=0 && 
               
               <div >
                   <table className="table" border='1' >
                    <thead>
                        <tr scope="col">
                            <th>#</th> 
                            <th>username</th> 
                            <th>email</th> 
                            <th>posts</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr>
                            <td>{this.props.singleUser.id}</td> 
                            <td>{this.props.singleUser.username}</td> 
                            <td>{this.props.singleUser.email}</td> 
                            <td>{this.props.singlePost.length}</td>
                        </tr>
                    </tbody>
                </table> 
                
                <h3>posts of this user</h3>

                    {this.props.singlePost.map(post=>{
                        return(<div key={post.id}>
                            <p>{post.title}</p>
                            <hr/>
                            </div> )
                    })}
            </div>} 
                
            </div>
    </div>
    </div>)
    }
}

const mapStateToProps=(state)=>{
    return{
        users:state.users,
        // posts:state.posts,
        singleUser:state.singleUser,
        singlePost:state.singlePost
        
    }

}

export default connect(mapStateToProps)(UserDrop)