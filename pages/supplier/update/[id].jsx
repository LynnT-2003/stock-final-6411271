import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Table,
  Button,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supplier({ supplier }) {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");

  useEffect(() => {
    reset(supplier);
  }, [reset, supplier]);

  const updateSupplier = async (data) => {
    const response = await fetch(`/api/stockFinal/suppliers/${supplier._id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
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
      alert("Supplier updated");
      window.location.href = "/";
    }
    console.log(result);
    setData(JSON.stringify(data));
  };

  console.log("supplier 2", supplier);
  if (!supplier)
    return (
      <div>
        <p>Supplier not found</p>
        <Link href="/">Back</Link>
      </div>
    );

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{ marginLeft: "7rem" }} href="/">
          Supplier Management
        </Navbar.Brand>
      </Navbar>
      <Head>
        <title>Update {supplier.name}</title>
      </Head>
      <Container
        style={{ margin: "2rem", maxWidth: "50%", marginLeft: "5rem" }}
      >
        <Form onSubmit={handleSubmit(updateSupplier)}>
          <Row className="mb-4">
            <Col>
              <h1>Update Supplier</h1>
            </Col>
          </Row>
          <Form.Group controlId="name">
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control
              {...register("name", { required: true })}
              placeholder="John Doe"
            />
          </Form.Group>

          <br />

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              {...register("address", { required: true })}
              placeholder="123 Main St."
            />
          </Form.Group>

          <br />

          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              {...register("phone", { required: true })}
              placeholder="555-123-1234"
            />
          </Form.Group>

          <br />

          <Row>
            <Col md={3}>
              <Link href="/" passHref>
                <Button variant="outline-secondary">Go to Suppliers</Button>
              </Link>
            </Col>
            <Col md={1} className="text-right">
              <Button variant="outline-primary" type="submit">
                Save
              </Button>
            </Col>
          </Row>

          <p>{data}</p>
        </Form>
      </Container>
    </>
  );
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug("params", params);
  const res = await fetch(
    `https://stock-final-6411271.vercel.app/api/stockFinal/suppliers/${params.id}`
  );
  const supplier = await res.json();
  console.debug("supplier 1", supplier);
  return { props: { supplier } };
}
