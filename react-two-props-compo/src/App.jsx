import './App.css'
import UserCard from './components/UserCard'
import p1 from './assets/p3.jpg';
import p2 from './assets/p2.jpg';
import p3 from './assets/p1.jpg';

function App() {
  return (
    <div className="App">
      <UserCard name = "Prashanth" desc="Software Engineer" image = {p1} style = {{"border-radius" : "10px"}} />
      <UserCard name = "Sita" desc="Data Engineer" image = {p2} style = {{"border-radius" : "10px"}} />
      <UserCard name = "Revanth" desc="AI/ML Engineer" image = {p3} style = {{"border-radius" : "10px"}} />
    </div>
  )
}

export default App
