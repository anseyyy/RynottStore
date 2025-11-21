import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button, Form, Card } from "react-bootstrap";
import "./Css.css"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Admin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [NewProduct, setNewProduct] = useState({
    name: "", price: "", description: "", category: "", imageUrl: "",
  });





  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://rynottstore-server.onrender.com/getproducts");
        setProducts(res.data.data || []); 
      } catch (err) {
        console.error(err.response?.data || err.message);
        toast.error("Failed to load products");
      }
    };
    fetchProducts();
  }, []);











  const addProduct = (e) =>
    setNewProduct({ ...NewProduct, [e.target.name]: e.target.value });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://rynottstore-server.onrender.com/products', NewProduct)

      if (res.status === 201) {
        toast.success("Product add successful!");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);

      toast.error("Something went wrong. Try again.");
    }
  }


  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`https://rynottstore-server.onrender.com/products/${id}`);
      if (res.status === 200) {
        toast.success("Product deleted successfully!");
        setProducts(products.filter((p) => p._id !== id));
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error("Failed to delete product");
    }
  };




  const updateProductCategory = async (id, newCategory) => {
    try {
      await axios.put(`https://rynottstore-server.onrender.com/updateproduct/${id}`, { category: newCategory });
      toast.success("Category updated!");
      setProducts(products.map(p =>
        p._id === id ? { ...p, category: newCategory } : p
      ));
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error("Failed to update category");
    }
  };






  const updateOrderStatus = async (id, newStatus) => {
    try {
      await axios.put(`https://rynottstore-server.onrender.com/orders/${id}`, { status: newStatus });
      toast.success("Order status updated!");
      setOrders(orders.map(o =>
        o._id === id ? { ...o, status: newStatus } : o
      ));
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error("Failed to update order status");
    }
  };











  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">⚙️ Admin Panel</h2>
      <ToastContainer position="top-center" autoClose={3000} />

      {/* Add Product */}
      <Card className="mb-5 shadow-sm">
        <Card.Header className="bg-primary text-white">Add Product</Card.Header>
        <Card.Body>
          <Row className="g-3">
            <Col md={4}>
              <Form.Control className="bg-light border"
                placeholder="Name"
                value={NewProduct.name}
                onChange={(e) => setNewProduct({ ...NewProduct, name: e.target.value })}
              />
            </Col>
            <Col md={2}>
              <Form.Control className="bg-light border"
                placeholder="Price"
                value={NewProduct.price}
                onChange={(e) => setNewProduct({ ...NewProduct, price: e.target.value })}
              />
            </Col>
            <Col md={3}>
              <Form.Control className="bg-light border"
                placeholder="Description"
                value={NewProduct.description}
                onChange={(e) => setNewProduct({ ...NewProduct, description: e.target.value })}
              />
            </Col>
            <Col md={2}>
              <Form.Select
                className="bg-light border"
                value={NewProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...NewProduct, category: e.target.value })
                }
              >
                <option value="">Select Category</option>
                <option value="mobiles">📱 Mobiles</option>
                <option value="laptops">💻 Laptops</option>
                <option value="tv">📺 TVs</option>
                <option value="headphones">🎧 Headphones</option>
                <option value="grooming">✂ Grooming</option>
                <option value="airpurifier">🌬 Air Purifier</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Control
                className="bg-light border"
                placeholder="Image URL"
                value={NewProduct.imageUrl} 
                onChange={(e) => setNewProduct({ ...NewProduct, imageUrl: e.target.value })}
              />
            </Col>
            <Col md={2}>
              <Button variant="success" onClick={handleSubmit} className="w-100">
                ➕ Add
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Product List */}
      <h3 className="mb-3">📦 Products</h3>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.description}</td>
              <td>
                <Form.Select
                  size="sm"
                  value={p.category}
                  onChange={(e) => updateProductCategory(p._id, e.target.value)}
                >
                  <option value="mobiles">📱 Mobiles</option>
                  <option value="laptops">💻 Laptops</option>
                  <option value="tv">📺 TVs</option>
                  <option value="headphones">🎧 Headphones</option>
                  <option value="grooming">✂ Grooming</option>
                  <option value="airpurifier">🌬 Air Purifier</option>
                </Form.Select>
              </td>
              <td>{p.imageUrl && <img src={p.imageUrl} alt={p.name} width="60" />}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteProduct(p._id)}
                >
                  🗑 Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Orders */}
      <h3 className="mt-5 mb-3">🛒 Orders</h3>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o._id}>
              <td>{o._id}</td>
              <td>{o.status}</td>
              <td>
                <Form.Select
                  value={o.status}
                  onChange={(e) => updateOrderStatus(o._id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                </Form.Select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Admin;