import Card from "./components/Card";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Card userName="Prashanth" age={21} img = "https://randomuser.me/api/portraits/men/34.jpg" />
      <Card userName="Ram" age={23} img = "https://randomuser.me/api/portraits/men/36.jpg" />
    </div>
  )
}

export default App
