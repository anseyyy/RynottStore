import React, { useState, useEffect } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Css.css";

function Wishlist() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user?._id;

  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    if (!userId) return;
    const fetchWishlist = async () => {
      try {
        const res = await axios.get(`https://rynottstore-server.onrender.com/wishlist/${userId}`);
        setWishlistItems(res.data.data.items || []);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
      }
    };
    fetchWishlist();
  }, [userId]);


 
  const removeItem = async (productId) => {
    try {
      await axios.post("https://rynottstore-server.onrender.com/wishlist/remove", {
        userId,
        productId,
      });
      setWishlistItems(wishlistItems.filter((item) => item.product._id !== productId));
    } catch (err) {
      console.error("Error removing wishlist item:", err);
    }
  };

 
  const moveToCart = async (item) => {
    try {
      
      await axios.post("https://rynottstore-server.onrender.com/cart/add", {
        userId,
        productId: item.product._id,
        quantity: 1,
      });

      // Remove from wishlist
      await axios.post("https://rynottstore-server.onrender.com/wishlist/remove", {
        userId,
        productId: item.product._id,
      });

      setWishlistItems(wishlistItems.filter((i) => i.product._id !== item.product._id));
    } catch (err) {
      console.error("Error moving to cart:", err);
    }
  };

  return (
    <Container className="wishlist-page py-5 mt-5 mb-5">
      <h2 className="text-center mb-4 rynott-title">Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-muted">Your wishlist is empty.</p>
      ) : (
        <Table striped bordered hover variant="dark" className="wishlist-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price (₹)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr key={item.product._id}>
                <td>{item.product.name}</td>
                <td>{item.product.price}</td>
                <td>
                  <Button
                    as={Link}
                    to={"/cart"}
                    variant="success"
                    size="sm"
                    className="me-2"
                    onClick={() => moveToCart(item)}
                  >
                    Move to Cart
                  </Button>
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
      )}
    </Container>
  );
}

export default Wishlist;