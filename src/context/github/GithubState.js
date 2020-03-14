import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
SEARCH_USERS,
SET_LOADING,
GET_REPOS,
GET_USER,
CLEAR_USERS,
PRIME_USERS
} from '../types'


    

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users
     useEffect(()=>{
      async function fetchuserData() {
        setLoading();
        const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: PRIME_USERS,
            payload: res.data
        })
    
      }
      fetchuserData();
       
    },[]);

      //Search github users.
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
    })
};

    //Get USer
    const GetUser = async (username)=>{
        setLoading();
    
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
      dispatch({
        type: GET_USER,
        payload: res.data
    });

    }

    //Get Repos
    const GetUserRepos = async(username)=>{
        setLoading();
    
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    //Clear Users
    const clearUsers = ()=>{

      dispatch({
          type:CLEAR_USERS
      })
      }

    //Set Loading
    const setLoading = ()=> dispatch({type: SET_LOADING});
    return (
        <GithubContext.Provider
          value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            setLoading,
            clearUsers,
            GetUser,
            GetUserRepos
        }}
        >
          {props.children}
        </GithubContext.Provider>
      );
    

};

export default GithubState;