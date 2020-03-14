import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

//Function Based Component
function UsersItem (props) {
        //Destructuring Removed the need of adding this.state.
        const {login, avatar_url, html_url} = props.user;
        return (
            <div className="card text-center"> 
            <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}}/>
            <h3 className="text-center">{login}</h3>
            <div><Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1"> More</Link></div>
            </div>
        )
    
}


UsersItem.propTypes = {
    user : PropTypes.object.isRequired
}
export default UsersItem;

//Class Based function

// export class UsersItem extends Component {

//     constructor(){
//         super()
//         this.state= {
//             id: 'id',
//             login: 'mojombo',
//             avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//             html_url: 'https://github.com/mojombo'
//         }
//     }
//     render(){
//         //Destructuring Removed the need of adding this.state.
//         const {login, avatar_url, html_url} = this.props.user;
//         return (
//             <div className="card text-center"> 
//             <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}}/>
//             <h3 className="text-center">{login}</h3>
//             <div><a href={html_url} className="btn btn-dark btn-sm my-1"> More</a></div>
//             </div>
//         )
//     }
// }