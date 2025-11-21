import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import './Css.css';
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


function Register() {

    const navigate = useNavigate();
    const [RegisterData, setRegisterData] = useState({ name: "", email: '', password: '', usertype: "user", });
    console.log(RegisterData);

    const handleChange = (e) =>
        setRegisterData({ ...RegisterData, [e.target.name]: e.target.value });


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://rynottstore-server.onrender.com/register', RegisterData)


            if (res.status === 201) {
                toast.success("Registration successful!");
                navigate('/login')
            }
            else {
                toast.error(res.data.error || "User already exists");
            }
        } catch (err) {
            console.error(err.response?.data || err.message);

            toast.error("Something went wrong. Try again.");
        }

    }


    return (
        <div>

            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Card className="p-4 shadow-lg rynott-card" style={{ maxWidth: "420px", width: "100%" }}>
                    <h2 className="text-center mb-4 rynott-title">Create Account</h2>
                    <ToastContainer position="top-center" autoClose={3000} />
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={handleChange} />
                        </Form.Group>

                        <Form.Control type="hidden" name="usertype" value={RegisterData.usertype} />

                        <Button variant="primary" type="submit" className="w-100">
                            Register
                        </Button>
                    </Form>
                    <p className="text-center mt-3 ">
                        Have an account? <Link to="/login" className="text-decoration-none text-secondary">Login</Link>
                    </p>
                </Card>
            </Container>



        </div>
    )
}

export default Register