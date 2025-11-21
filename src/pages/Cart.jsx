import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import axios from "axios";
import "./Css.css";

function Cart() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userId = user?._id;
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        if (!userId) return;
        const fetchCart = async () => {
            try {
                const res = await axios.get(`https://rynottstore-server.onrender.com/cart/${userId}`);
                setCartItems(res.data.data.items || []);
            } catch (err) {
                console.error("Error fetching cart:", err);
            }
        };
        fetchCart();
    }, [userId]);


    const updateQty = async (productId, qty) => {
        try {
            await axios.put("https://rynottstore-server.onrender.com/cart/update", {
                userId,
                productId,
                quantity: qty,
            });
            setCartItems(
                cartItems.map((item) =>
                    item.product._id === productId ? { ...item, quantity: qty } : item
                )
            );
        } catch (err) {
            console.error("Error updating quantity:", err);
        }
    };

    // Remove item
    const removeItem = async (productId) => {
        try {
            await axios.post("https://rynottstore-server.onrender.com/cart/remove", {
                userId,
                productId,
            });
            setCartItems(cartItems.filter((item) => item.product._id !== productId));
        } catch (err) {
            console.error("Error removing item:", err);
        }
    };

   
    const checkout = async () => {
        try {
            await axios.post("https://rynottstore-server.onrender.com/cart/checkout", { userId });
            alert("Checkout successful!");
            setCartItems([]); 
        } catch (err) {
            console.error("Checkout error:", err);
        }
    };

    
    const total = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    return (
        <Container className="cart-page py-5 mt-5 mb-5">
            <h2 className="text-center mb-4 rynott-title">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-center text-muted">Your cart is empty.</p>
            ) : (
                <>
                    <Table striped bordered hover variant="dark" className="cart-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price (₹)</th>
                                <th>Quantity</th>
                                <th>Subtotal (₹)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.product._id}>
                                    <td>{item.product.name}</td>
                                    <td>{item.product.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                updateQty(item.product._id, parseInt(e.target.value))
                                            }
                                            className="qty-input"
                                        />
                                    </td>
                                    <td>{item.product.price * item.quantity}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => removeItem(item.product._id)}
                                        >
                                            Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Row className="mt-4">
                        <Col className="text-end">
                            <h4>Total: ₹{total}</h4>
                            <Button variant="primary" className="mt-2" onClick={checkout}>
                                Proceed to Checkout
                            </Button>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
}

export default Cart;