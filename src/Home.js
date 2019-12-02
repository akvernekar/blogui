import React from 'react'
// import axios from 'axios'
import UsersList from './UsersList'
import {connect} from 'react-redux'

 class Home extends React.Component{
//     constructor(){
//         super()
// this.state={
//     posts:[],
//     users:[]
// }
// }

    // componentDidMount=()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(response=>{
    //         this.setState({posts:response.data})
    //     })
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response=>{
    //         this.setState({users:response.data})
    //     })
    // }
    render(){
        return(
        
        <div>
            <div className="row">
<div className="col-md-3">
<UsersList/>
</div>
<img className="col-md-9 img-thumbnail" style={{"height":"540px"}} src="https://www.onblastblog.com/wp-content/uploads/2018/05/free-images-for-blogs.jpeg"/>
</div>
            <h2 className="text-center">Latest posts</h2>
           
            <div className="row">


            
{this.props.users.map(item=>{
    return (<div>

<div className="col-md-8"> 
<div className="card " style={{"height":"520px","width": "310px"}}>
  <img className="card-img-top img-thumbnail"  src={`https://picsum.photos/200/300?${item.id}`} alt="Card image cap"/>
  <div className="card-body">
<h5 className="card-title">{item.name}</h5>
<p className="card-text">{this.props.posts.length!=0 && this.props.posts.find(i=>i.id==item.id).title}</p>
    <a href={`/users/${item.id}`} className="btn btn-primary">Info</a>
  </div>
</div>   
</div>

</div>
)
})}
</div>
            


</div>
            )
    }
}

const mapStateToProps=(state)=>{
return{users:state.users,
posts:state.posts}

}


export default connect(mapStateToProps)(Home)