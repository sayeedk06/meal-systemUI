import React from "react";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import {
    Link
  } from "react-router-dom";

export default function Login(){

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return(
     <div className='login'>

         <Paper className='login-paper' elevation={3}>
        <div>
            
            <TextField id="standard-basic" label="ID or Email" fullWidth={true}/>

        </div>
        <div>
            <FormControl fullWidth={true}>
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
                
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
            />
            </FormControl>
        </div>
        <div style={{marginTop:'10px', marginBottom:'10px'}}>
        <FormControl fullWidth={true}>
        <Button variant="contained" color="primary">
            Login
        </Button>
        </FormControl>
        </div>
        <a href='#'>Forgotten passowrd</a> 
        <hr/>
        <div style={{marginTop:'10px', marginBottom:'10px'}}>
        <FormControl fullWidth={true}>
        <Link to="/signup"><Button variant="contained">
        Create new Account
        </Button>
        </Link> 
        </FormControl>
        </div>
        </Paper>
    </div>   
    )
}


{/* <form action="">
<h3>Login</h3>   
<div className="mb-3 row">
<label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
<div className="col-sm-10">
<input type="text"  className="form-control" id="staticEmail" placeholder="email@example.com"></input>
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
</form> */}