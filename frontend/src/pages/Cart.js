import Navbar from "../components/Navbar";

function Cart() {

  return (

    <div>

      <Navbar />

      <div
        style={{
          padding: "40px"
        }}
      >

        <h1
          style={{
            marginBottom: "30px"
          }}
        >
          Shopping Cart 🛒
        </h1>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            marginBottom: "20px"
          }}
        >

          <h2>iPhone 15</h2>

          <p>Apple flagship smartphone</p>

          <h3>$999</h3>

          <button
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Remove
          </button>

        </div>

        <div
          style={{
            textAlign: "right",
            fontSize: "28px",
            fontWeight: "bold"
          }}
        >
          Total: $999
        </div>

      </div>

    </div>

  );

}

export default Cart;