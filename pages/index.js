import Head from "next/head";
import Link from "next/link";
import { Container, Table, Button, Row, Col } from "react-bootstrap";

export default function Home({ suppliers }) {
  function deleteSupplier(id) {
    fetch(`/api/stockFinal/suppliers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // alert("Deleting " + id)
        window.location.reload(false);
      });
  }

  return (
    <>
      <Head>
        <title>Suppliers Management</title>
      </Head>
      <Container>
        <Row className="my-4">
          <Col>
            <h1>Suppliers List</h1>
          </Col>
          <Col className="text-right">
            <Link href="/supplier">
              <Button variant="outline-primary">+ Add Supplier</Button>
            </Link>
          </Col>
        </Row>
        <Table responsive>
          <thead>
            <tr>
              <th style={{ width: "20rem" }}>Supplier Name</th>
              <th style={{ width: "10rem" }}>Address</th>
              <th style={{ width: "10rem" }}>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => {
              return (
                <tr key={supplier._id}>
                  <td>
                    <Link href={`/supplier/${supplier._id}`}>
                      {supplier.name}
                    </Link>
                  </td>
                  <td>{supplier.address}</td>
                  <td>{supplier.phone}</td>
                  <td>
                    <>
                      <Link href={`/supplier/update/${supplier._id}`}>
                        <Button variant="outline-secondary" size="sm">
                          Update
                        </Button>
                      </Link>
                      &nbsp;&nbsp;
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => deleteSupplier(supplier._id)}
                      >
                        Delete
                      </Button>
                    </>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://stock-final-6411271.vercel.app/api/stockFinal/suppliers`
  );
  const suppliers = await res.json();

  // Sort suppliers by name
  suppliers.sort((a, b) => a.name.localeCompare(b.name));

  return { props: { suppliers } };
}
