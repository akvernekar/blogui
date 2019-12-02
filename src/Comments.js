import React from 'react'

import {connect} from 'react-redux'
import {startSetComments} from './actions/comments'

class Comments extends React.Component{
    constructor(){
        super()
        this.state={
            
            isclicked:false
        }
    }
    componentDidMount=()=>{
        const id=this.props.match.params.id
            this.props.dispatch(startSetComments(id))
            
        }

        handle=()=>{
            this.setState({isclicked:true}
            )
        }


        render(){
            
            return(<div style={{backgroundImage: "url(" + "https://www.fabulousblogging.com/wp-content/uploads/2012/10/bkg-2.png" + ")"}} class="jumbotron jumbotron-fluid">
                <div className="col-md-7 offset-2">
                   <button onClick={this.handle}>{this.state.isclicked?this.props.comments.length:undefined} comments</button>
                   {this.state.isclicked==true && (<div>
                    
                    <ul className="list-group">
                        {this.props.comments.map(item=>{
                            return <li className="list-group-item" key={item.id}>{item.body}</li>
                        })}
                   </ul>
                   </div>
                   ) }
                   
                        
                    
                </div>
                </div>  )
        }

}


const mapStateToProps=(state)=>{
  return{
      comments:state.comments
  }
}

export default connect(mapStateToProps)(Comments)