import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Login() {
    const [LoginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginData({ ...LoginData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://rynottstore-server.onrender.com/login", LoginData);

            if (res.data.success) {
                toast.success("Login successful!");
                // Save token in localStorage for protected routes
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userType", res.data.userType);

                // Redirect based on role
                if (res.data.userType == "admin") {
                    navigate("/admin");
                } else {
                    navigate("/allproducts");
                }
            } else {
                toast.error(res.data.error || "Invalid credentials");
            }
        } catch (err) {
            console.error(err);
            toast.error("Login failed. Please try again.");
        }
    }


    const handleLogin = async () => {
        try {
            const res = await axios.post("https://rynottstore-server.onrender.com/login", { email, password });
            if (res.data.success) {
                localStorage.setItem("user", JSON.stringify(res.data.user));
                localStorage.setItem("token", res.data.token);
                navigate("/cart"); 
            }
        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    }
    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center min-vh-100 w-100">
                <Card className="p-4 shadow-lg rynott-card" style={{ maxWidth: "420px", width: "100%" }}>
                    <h2 className="text-center mb-4 rynott-title">Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <ToastContainer position="top-center" autoClose={3000} />
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={LoginData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={LoginData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                    </Form>

                    <p className="text-center text-light mt-3">
                        Don’t have an account? <Link to="/register" className="text-decoration-none text-secondary">Register</Link>
                    </p>
                </Card>
            </Container>



        </div>
    )
}

export default Login