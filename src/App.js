import profilePicture from './img/profile-pic-temp.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <h2>Adam Kreiner</h2>
      <img src={profilePicture} alt="profile-picture" />
    </div>
  );
}

export default App;
