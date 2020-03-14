import React, {Fragment} from 'react';
import Search from '../users/Search';
import Users from '../users/Users';


const home = props => {
    return (
        <Fragment>
            <Search />
          <Users />
        </Fragment>
    )
}



export default home
