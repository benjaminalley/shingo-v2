import React from 'react'; // Import React to use JSX
import logo from './logo.svg';
import './App.css';
import FastMovesTable from "./components/FastMovesTable";

const App: React.FC = () => { // Type annotation using React.FC (Functional Component)
  return (
      <div className="App">
        <header className="App-header">
          <FastMovesTable />
        </header>
      </div>
  );
}

export default App;
