import React from "react";
import Paper from '@material-ui/core/Paper';
export default function Profile (){
    return (
        <div className='profile'>
            <div className='row'>
                <div className='group col-2'>
                    <h6> Groups </h6><hr/>
                </div>
                <div className='dashboard col-9'>
                    <div className='row'>
                        <div className='usage col-4'> 
                            <p>Your Usage:</p> <hr/>
                        </div>
                        <div className='usage col-4'>
                           <p>Total Group Usage:</p> <hr/> 
                        </div>
                    </div>
                    <div className='row'>
                        <div className='usage col-5'>
                            <form>
                               <p>Add meal</p><hr/> 

                               <input type="text" placeholder='Month Name'/>
                               <input type="text" placeholder='Year'/>
                               <input type="text" placeholder='Meal Number'/>
                               <button>Submit</button>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
}