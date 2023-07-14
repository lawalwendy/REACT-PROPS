import john from './johnWick.jpg'
import './App.css';
import Profile from './Profile/Profile';
// import Container from 'react-bootstrap/Container'


function App() {

 
  return (
    <div className="App"
    style={{
      textAlign:"center",
      backgroundColor: "#264564",
        Height: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "whiteSmoke",
    }}>
      <Profile fullName={'Keanu Charles'} 
      Bio={'Keanu Charles Reeves is a Canadian actor. Born in Beirut, Lebanon and raised in Toronto, Reeves began acting in theatre productions and in television films before making his feature film debut in Youngblood.'}
      Profession={"Actor"}>
      <img
        src={john} 
        alt="Keanu Charles" 
        style={{marginTop:"20px", borderRadius:"360%", border:" 2px solid #264564"}}
        />
      </Profile>
      
    </div>
  );
}

export default App;
