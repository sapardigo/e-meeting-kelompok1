import "./App.css";
import Login from "./pages/Login";
import styles from "./components/Login.module.css";

const style = {
  color: "white",
  backgroundColor: "lightcoral",
  padding: "10px",
  borderRadius: "5px",
};
/* style berikut telah dipindahkan ke folder components, pada Login.module.css

const paragraf = {
  color: "white",
  fontSize: "20px",
  backgroundColor: "green",
  padding: "4px",
  borderRadius: "5px",
};
*/
function App() {
  return (
    <>
      <Login />
      <h1 style={style}>Halo, Nama saya Sapardi</h1>
      <p className={styles.paragraf}>Ini contoh deskripsi</p>
    </>
  );
}

export default App;
