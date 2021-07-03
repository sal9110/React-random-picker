
import './App.css';
import StudentsList from './StudentsList'


const fullClass = ['Alex','Pallavi','Salvo','Pilar','Victor','Sashmita','Peter','Lorianne','Natalie','G']

function App() {
  return (
    <div className="App">
      <StudentsList students={fullClass} />
    </div>
  );
}

export default App;
