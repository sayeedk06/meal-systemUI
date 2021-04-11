import React from "react";
import Login from '../components/authentication/Login';
import Footer from '../components/Footer'
export default function Home(){
    return(
        <div>
            <div className="home">
            <div className='heading'>
            <h1>Welcome to the ultimate Meal System</h1>
            <ul>
                <li>Each meal counts as 1 unit. Therefore, each day could be two meals meaning 2 units.</li>
                <li>Total meal counts from all members are added up. Say 3 members add up to 60+50+45=155 units in a month. </li>
                <li>Then the total grocery done is added up, say each member spent 2k. Adding up to 2000+2000+2000=6000bdt</li>
                <li>Therefore , meal rate would be : 6000/155=38.7 almost 39</li>
                <li>So if this is the meal rate, each member should have spent:
                    <ul>
                    <li>Member A, having 60 meals , should have spent: 60*39=2340. Therefore he has to pay an extra 2340-2000= 340bdt at the end of the month</li>
                    <li>Member b, having 50 meals , should have spent: 50*39=1950. Therefore he has to pay an extra 1950-2000= -50bdt at the end of the month. Negative value meaning he will receive this money.</li>
                    <li>Member C, having 60 meals , should have spent: *39=1755. Therefore he has to pay an extra 1755-2000= -245bdt at the end of the month. Negative value meaning he will receive this money.</li>
                    </ul>
                    
                </li>
            </ul>
            </div>
            
            <Login/>
            <Footer/>
            
            </div>
            
        </div>
    )
}
