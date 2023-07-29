import Form from "./components/Form";
import UserDetails from "./components/UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form/>}></Route>
          <Route path="/user-details" element={<UserDetails/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
