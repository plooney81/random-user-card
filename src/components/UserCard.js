import React, { Component } from "react";
import './UserCard.css'

class UserCard extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            loaded: false,
            image: null,
            name: null,
            email: null,
            dob: null,
            address: null,
            phone: null,
            pw: null
        };
    }

    getNewUser = async () => {
        await fetch("https://randomuser.me/api/?results=1")
            .then(res => res.json())
            .then(data => {
                console.log(data.results[0].name)
                this.setState({
                    loaded: true,
                    display: "phone",
                    image: data.results[0].picture.large,
                    name: data.results[0].name,
                    email: data.results[0].email,
                    dob: new Date(data.results[0].dob.date),
                    address: data.results[0].location.street,
                    phone: data.results[0].cell,
                    pw: data.results[0].login.password
                })
            })
    }
    getInfo = (elem) => {
        this.setState({
            display: elem
        })
    }

    componentDidMount(){
        this.getNewUser();
    }

    render(){
        if(!this.state.loaded){
            return''
        }
        return(
            <div>
                <div className="UserCard">
                    <img src={this.state.image} alt="user" className="User_img"/>
                </div>
               {this.state.display === 'name' && (
                <div className="first Info">
                    <p>Hello, my name is:</p>
                    <p>{this.state.name.first} {this.state.name.last}</p>
                </div>
               )}
                {this.state.display === 'email' && (
                <div className="second Info">
                    <p>My email is:</p>
                    <p>{this.state.email}</p>
                </div>
               )}
                {this.state.display === 'birthday' && (
                <div className="third Info">
                    <p>My birthday is:</p>
                    <p>{this.state.dob.getMonth() + 1} {this.state.dob.getDay()}, {this.state.dob.getFullYear()}</p>
                </div>
               )}
                {this.state.display === 'address' && (
                <div className="fourth Info">
                    <p>My address is:</p>
                    <p>{this.state.address.number} {this.state.address.name}</p>
                </div>
               )}
                {this.state.display === 'address' && (
                <div className="fifth Info">
                    <p>My phone number is:</p>
                    <p>{this.state.phone}</p>
                </div>
               )}
                {this.state.display === 'address' && (
                <div className="sixth Info">
                    <p>My password is:</p>
                    <p>{this.state.pw}</p>
                </div>
               )}
                <div className="buttons">
                    <button onClick={this.getInfo('name')}>Name</button>
                    <button onClick={this.getInfo('email')}>Email</button>
                    <button onClick={this.getInfo('birthday')}>Birthday</button>
                    <button onClick={this.getInfo('address')}>Address</button>
                    <button onClick={this.getInfo('phone')}>Phone</button>
                    <button onClick={this.getInfo('password')}>Password</button>
                </div>
            </div>
        )
    }
}

export default UserCard;