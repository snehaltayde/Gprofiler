import React, { Component,Fragment } from 'react'
import Spinner from '../layout/Spinner.js'
import Repos from '../repos/Repos';
import {Link} from 'react-router-dom'

export class User extends Component {
    componentDidMount(){
        this.props.GetUser(this.props.match.params.login);
        this.props.GetUserRepos(this.props.match.params.login);

    }
    render() {
        //destructuring this.state.
        const {company,blog,name,avatar_url,location,bio,login,html_url,followers,following,public_repos, public_gists, hireable} = this.props.user;
        if(this.props.loading){
           return  <Spinner />
        }
        return (
            <Fragment>
                <Link to="/" className="btn btn-light">Back To Search</Link>
                Hireable : {''}
                {hireable ? (<i className="fa fa-check text-success"/>) : (<i className="fa fa-times-circle text-danger"/>) }
            <div className="card grid-2">
            <div className="all-center">
            <img src={avatar_url} className="round-iamge" style={{width:'150px'}} alt=""/>
            <h1>{name}</h1>
            <p>{location}</p>
            </div>
                <div>
                    {bio && <Fragment> 
                        <h3>Bio:</h3>
                        <p>{bio}</p>
                    </Fragment>}
                        <br/>
                        <hr/>
                        <br/>
                    <ul>
                        <li>
                            {login && <Fragment> 
                                <strong>Username: </strong> {login}
                            </Fragment>}
                        </li>

                        <li>
                            {blog && <Fragment> 
                                <strong>Website: </strong> {blog}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment> 
                                <strong>Company: </strong> {company}
                            </Fragment>}
                        </li>
                    </ul>
                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>


                </div>
            </div>
            <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-primary">Following: {following}</div>
            <div className="badge badge-primary">Public Repos: {public_repos}</div>
            <div className="badge badge-primary">Public Gists: {public_gists}</div>
            </div>
            <Repos repos ={this.props.repos}/>
            </Fragment>
            
        )
    }
}

export default User
