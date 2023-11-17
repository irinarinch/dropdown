import { Dropdown } from './components/Dropdown';
import './App.css';

function App() {
  const list = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];

  return (
    <div className="container">
      <Dropdown list={list}/>
    </div>     
  );
}

export default App;