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

    getNewUser = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    image: data.results[0].picture.thumbnail,
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
       return <h1>Hello</h1>
    }
}

export default UserCard;