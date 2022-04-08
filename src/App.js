import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const handleEmailBlur = (event) => {
    console.log(event.target.value)
  }
  const handlePasswordBlur = (event) => {
    console.log(event.target.value)
  }
  const handleFormSbmit = event => {
    console.log('from submit')
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSbmit}>
        <input onBlur={handleEmailBlur} type="email" name="" id="" />
        <br />
        <input onBlur={handlePasswordBlur} type="password" name="" id="" />
        <br />
        <input type="submit" value="Login" />
      </form>

    </div>
  );
}

export default App;