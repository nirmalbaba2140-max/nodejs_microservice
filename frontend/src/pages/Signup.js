import Navbar from "../components/Navbar";

function Signup() {

  return (

    <div>

      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >

        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "15px",
            width: "350px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >

          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px"
            }}
          >
            Signup
          </h1>

          <input
            type="text"
            placeholder="Enter Name"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />

          <input
            type="email"
            placeholder="Enter Email"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />

          <button
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Signup
          </button>

        </div>

      </div>

    </div>

  );

}

export default Signup;