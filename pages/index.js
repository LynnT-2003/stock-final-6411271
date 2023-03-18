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
} from "react-bootstrap";

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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Supplier Management</Navbar.Brand>
          <Nav className="ml-auto">
            <Link href="/supplier" passHref>
              <Button variant="outline-primary">+ Add Supplier</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Container style={{ margin: "2rem", marginLeft: "5rem" }}>
        <h1>Supplies</h1> <br />
        <div className="table-container">
          <Table responsive>
            <thead>
              <tr>
                <th style={{ width: "15rem" }}>Supplier Name</th>
                <th style={{ width: "15rem" }}>Address</th>
                <th style={{ width: "15rem" }}>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier) => {
                return (
                  <tr key={supplier._id}>
                    <td>{supplier.name}</td>
                    <td>{supplier.address}</td>
                    <td>{supplier.phone}</td>
                    <td>
                      <>
                        <Link href={`/supplier/update/${supplier._id}`}>
                          <Button variant="secondary" size="sm">
                            Update
                          </Button>
                        </Link>
                        &nbsp;&nbsp;
                        <Button
                          variant="danger"
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
        </div>
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
