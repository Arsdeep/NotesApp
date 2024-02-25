import './App.css';
import Card from './Components/Card';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar title = "Notes App" />
      <div style={{display:'flex',padding:2+'rem', flexWrap:'wrap', justifyContent:'center', width:'auto'}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  );
}

export default App;