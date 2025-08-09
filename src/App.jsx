import "./App.css";
import Login from "./pages/Login";

const style = {
  color: "white",
  backgroundColor: "lightcoral",
  padding: "10px",
  borderRadius: "5px",
};

const paragraf = {
  color: "white",
  fontSize: "20px",
  backgroundColor: "green",
  padding: "4px",
  borderRadius: "5px",
};

function App() {
  return (
    <>
      <Login />
      <h1 style={style}>Halo, Nama saya Sapardi</h1>
      <p style={paragraf}>Ini contoh deskripsi</p>
    </>
  );
}

export default App;
