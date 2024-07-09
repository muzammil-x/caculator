import styles from "./App.module.css";
import Container from "./components/Container";
import Display from "./components/Display";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <Container />
    </div>
  );
}

export default App;
