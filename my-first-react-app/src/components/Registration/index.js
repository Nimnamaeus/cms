import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Col, FormGroup, Input, Row } from 'reactstrap';

const initialUser = {email: "", password: "", username: ""}
const Registration = () => {
    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();

    const signUp = async() => {
        try {
            const url = 'http://localhost:1337/api/auth/local/register';
            if (user.username && user.email && user.password) {
                const res = await axios.post(url, user);
                if (res){
                    setUser(initialUser);
                    navigate("/login");
                }
            }
        } catch (error) {
            toast.error(error.message, {
                hideProgressBar: true,
            })
        }
    };

    const handleUserChange = ({target}) => {
        const {name, value} = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };
    return (
        <Row className="register">
            <Col sm ='12' md={{size: 4, offset: 4}}>
            <div>
                <h2>Sign-up:</h2>
                <FormGroup>
                    <Input type="text" name="username" value = {user.username} onChange = {handleUserChange} placeholder="Enter your Full Name" />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" value = {user.email} onChange = {handleUserChange} placeholder="Enter your Email" />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" value = {user.password} onChange = {handleUserChange} placeholder="Enter Password" />
                </FormGroup>
                <Button color="primary" onClick={signUp}>
                    Register</Button>
            </div>
            </Col>
        </Row>
    )
}

export default Registration