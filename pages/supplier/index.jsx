import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Navbar,
  Nav,
} from "react-bootstrap";

export default function AddSupplier() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const saveSupplier = async (data) => {
    const response = await fetch("/api/stockFinal/suppliers", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // serialisation
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const result = await response.json(); // deserialise
    if (result.error) {
      alert("Error: " + result.error);
    } else {
      alert("Supplier Added");
      window.location.href = "/";
    }
    console.log(result);
    setData(JSON.stringify(data));
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{ marginLeft: "7rem" }} href="/">
          Supplier Management
        </Navbar.Brand>
      </Navbar>
      <Container
        style={{
          margin: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="app-container">
          <h1>New Supplier</h1> <br />
          {/* <Link href="/">Suppliers</Link> */}
          <Form onSubmit={handleSubmit(saveSupplier)}>
            <Form.Group controlId="supplierName">
              <Form.Label>Supplier Name</Form.Label>
              <Form.Control
                {...register("name", { required: true })}
                placeholder="John Doe"
                style={{ width: "500px" }}
              />
            </Form.Group>

            <br />

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                {...register("address", { required: true })}
                placeholder="123 Black Clover St."
                style={{ width: "500px" }}
              />
            </Form.Group>

            <br />

            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                {...register("phone", { required: true })}
                placeholder="089-234-567"
                style={{ width: "500px" }}
              />
            </Form.Group>

            <br />

            <Button variant="outline-primary" type="submit">
              Save
            </Button>

            <p>{data}</p>
          </Form>
        </div>
      </Container>
    </>
  );
}
