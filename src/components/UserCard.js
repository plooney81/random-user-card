import React, { Component } from "react";
import './UserCard.css'

class UserCard extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            image: null,
            name: null,
            email: null,
            dob: null,
            address: null,
            phone: null,
            pw: null
        };

        this.getNewUser();
    }

    getNewUser = async () => {
        await fetch("https://randomuser.me/api/?results=1")
            .then(res => res.json())
            .then(data => {
                // console.log(data.results[0].location.street)
                this.setState({
                    image: data.results[0].picture.large,
                    name: data.results[0].name,
                    email: data.results[0].email,
                    dob: data.results[0].dob,
                    address: data.results[0].location.street,
                    phone: data.results[0].cell,
                    pw: data.results[0].login.password
                })
            })
    }

    render(){
       return(
           <div>
                <div className="UserCard">
                    <img src={this.state.image} alt="user" className="User_img"/>
                </div>
                <div className="first Info">
                    <p>Hello, my name is:</p>
                    <p>{this.state.name.first} {this.state.name.last}</p>
                </div>
                <div className="second Info">
                    <p>My email is:</p>
                    <p>{this.state.email}</p>
                </div>
                <div className="third Info">
                    <p>My birthday is:</p>
                    <p>{this.state.dob.date}</p>
                </div>
                <div className="fourth Info">
                    <p>My address is:</p>
                    <p>{this.state.address.number} {this.state.address.name}</p>
                </div>
                <div className="fifth Info">
                    <p>My phone number is:</p>
                    <p>{this.state.phone}</p>
                </div>
                <div className="sixth Info">
                    <p>My password is:</p>
                    <p>{this.state.pw}</p>
                </div>
           </div>

       )
    }
}

export default UserCard;