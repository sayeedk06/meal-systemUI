import React from "react";
import Button from '@material-ui/core/Button';

export default function Signup(){
    return(
     <div className=' container signup'>
        <form action="">
        <h3>Signup</h3>
        <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">First Name</label>
        <div className="col-sm-10">
        <input type="text"  className="form-control" id="staticEmail" placeholder="email@example.com"></input>
        </div>
        </div>
        <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">Second Name</label>
        <div className="col-sm-10">
        <input type="text"  className="form-control" id="staticEmail" placeholder="email@example.com"></input>
        </div>
        </div>
        <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
        <input type="text"  className="form-control" id="staticEmail" placeholder="email@example.com"></input>
        </div>
        </div>
        <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">User id</label>
        <div className="col-sm-10">
        <input type="text"  className="form-control" id="staticEmail" placeholder="blabla"></input>
        </div>
        </div>

        <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
        <input type="password" className="form-control" id="inputPassword"></input>
        </div>
        </div>
        <Button variant="contained" color="primary">
        Primary
        </Button>
        </form>
    </div>   
    )
}
