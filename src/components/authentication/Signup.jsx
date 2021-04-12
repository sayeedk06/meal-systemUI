import React from "react";
import Button from '@material-ui/core/Button';
import {
    Link
  } from "react-router-dom";
export default function Signup(){
    return(
     <div className=' container signup'>
        <form action="">
        <div className="mb-3 row">
        <input type="text"  className="form-control" id="staticEmail" placeholder="First Name.."></input>
        </div>
        <div className="mb-3 row"> 
        <input type="text"  className="form-control" id="staticEmail" placeholder="Last Name..."></input> 
        </div>
        <div className="mb-3 row"> 
        <input type="text"  className="form-control" id="staticEmail" placeholder="email@example.com"></input> 
        </div>
        <div className="mb-3 row">
        <input type="text"  className="form-control" id="staticEmail" placeholder="User ID"></input>  
        </div>
        <div className="mb-3 row">
        <input type="password" className="form-control" id="inputPassword" placeholder="password"></input>
        </div><hr/> <br/>
        <Button variant="contained" color="primary" fullWidth={true}>
        Create Account
        </Button>
        <br/><br/>
        <Link to='/'>
            <p>Already have an account?</p>
        </Link> 
        </form>
    </div>   
    )
}
