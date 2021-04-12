import React from "react";
import Paper from '@material-ui/core/Paper';
export default function Profile (){
    return (
        <div className='container profile'>

            <div className='row'>
                <div className='col-3'>
                <Paper elevation={3}>
                
                <h6>Groups</h6>
                <p>Group 1</p>
                <p>Group 1</p>
                <p>Group 1</p>
                 
                </Paper>
                </div>
                <div className='col-9'>
                <Paper elevation={3}>
                <h6>
                    Name: Sayeed Md. Shaiban
                </h6>
                <h6>
                    Email: Sayeed.k06@gmail.com
                </h6>
                
                 
                </Paper>
                </div>

            </div>
            
        </div>
    );
}