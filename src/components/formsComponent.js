import React, {Component} from 'react';

const URL = 'http://localhost:3004/artists'

class FormsComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            name:'',
            cover:'',
            bio:'',
            genre:''
        }
    }

    handleChangeName = (event)=>{
        this.setState({name:event.target.value})
        console.log(event.target.value);
    }
    handleChangeCover = (event)=>{
        this.setState({cover:event.target.value})
    }
    handleChangeBio = (event)=>{
        this.setState({bio:event.target.value})
    }
    handleChangeGenre = (event)=>{
        this.setState({genre:event.target.value})
    }


    handleSubmit = () =>{

        var random= Math.floor(Math.random()*10000);
        var data = {
            "id":random,
            "name":this.state.name,
            "cover":this.state.cover,
            "bio":this.state.bio,
            "genre":this.state.genre
        }

        console.log('data on submit ', data );

        fetch(URL,{method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(this.props.history.push('/'));
    }


    render(){
        return(
            <React.Fragment>
                
                <div className="conatiner">
                    <h2>Add Artist Data</h2>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Enter details in Form
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label>Artist Name</label>
                                        <input type="text" className="form-control" placeholder="name"
                                            value={this.state.name}
                                            onChange={this.handleChangeName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Artist Cover</label>
                                        <input type="text" className="form-control" placeholder="cover"
                                            value={this.state.cover}
                                            onChange={this.handleChangeCover}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Artist Bio</label>
                                        <input type="text" className="form-control" placeholder="bio"
                                             value={this.state.bio}
                                            onChange={this.handleChangeBio}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Artist Genre</label>
                                        <input type="text" className="form-control" placeholder="Genre"
                                        value={this.state.genre}
                                            onChange={this.handleChangeGenre}/>
                                    </div>

                                    <button type="button" className="btn btn-primary btn-block" 
                                        onClick={this.handleSubmit}
                                    >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </React.Fragment>
        )
    }
}

export default FormsComponent;