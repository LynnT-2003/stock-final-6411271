import Head from "next/head";
import Link from "next/link";

export default function Home({ suppliers }) {
  function deletesupplier(id) {
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
      <h1>Suppliers</h1>
      <table>
        <thead>
          <tr>
            <th style={{ width: "20rem" }}>Supplier Name</th>
            <th style={{ width: "10rem" }}>Address</th>
            <th style={{ width: "10rem" }}>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => {
            return (
              <tr key={supplier._id}>
                <td style={{ textAlign: "center" }}>
                  <Link href={`/supplier/${supplier._id}`}>
                    {supplier.name}
                  </Link>
                </td>
                <td style={{ textAlign: "center" }}>{supplier.address}</td>
                <td style={{ textAlign: "center" }}>{supplier.phone}</td>
                <td>
                  <>
                    <Link href={`/supplier/update/${supplier._id}`}>
                      Update
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => deletesupplier(supplier._id)}>
                      Delete
                    </button>
                  </>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <p style={{ margin: "0.4rem", textAlign: "left" }}>
        <Link href="/supplier/supplier">+ Supplier</Link>
      </p>

      <Link href="/">&nbsp;&nbsp;&nbsp;&nbsp; Home</Link>

      <p></p>
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch(
    `https://stock-final-6411271.vercel.app/api/stockFinal/suppliers`
  );
  const suppliers = await res.json();
  return { props: { suppliers } };
}
