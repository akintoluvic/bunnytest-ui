import React from 'react'
import axios from "axios"
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import avatar from "../../assets/avatar.png";
import {userbaseUrl, taskbaseUrl} from "../../baseUrl"

const User = ({user}) => {

    const deleteUser = async () => {
        const requestOne = axios.delete(`${userbaseUrl}/${user._id}`);
        const requestTwo = axios.delete(`${taskbaseUrl}/user/${user._id}`);
        
        try {
        //   await axios.delete(`${baseUrl}1/api/v1/users/${user._id}`);
          await axios.all([requestOne, requestTwo])
        } catch (err) {

        }
    }

    return (

        <Row className="w-100 px-3 pb-1 pt-3 mb-2 bg-white mx-auto d-flex flex-row align-items-center justify-content-between">
            <span className="d-flex">
            <img className="rounded-circle mr-2" variant="top" height="25" src={avatar} alt="user avatar" />
            <Card.Title>{user.name}</Card.Title>
            </span>
            
            <span className="">
                <LinkContainer to={`users/${user._id}`}>
                    <Button variant="primary" className="btn-sm">View</Button>
                </LinkContainer>
                <Button variant="warning" className="btn-sm mx-2">Edit</Button>
                <Button variant="danger" className="btn-sm" onClick={ () => deleteUser()}>Delete</Button>
            </span>
        </Row>
    )
}

export default User
