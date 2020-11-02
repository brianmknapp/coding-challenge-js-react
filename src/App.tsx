import React from 'react';
import './App.css';
import {EmployeeList} from "./components/employee/EmployeeList";

const employees = [
  {
    id: 1,
    firstName: 'Brian',
    lastName: 'McGee',
    position: 'CEO',
    directReports: [2, 3]
  },
  {
    id: 2,
    firstName: 'Homer',
    lastName: 'Thompson',
    position: 'Dev Manager',
    directReports: [4]
  },
  {
    id: 3,
    firstName: 'Rock',
    lastName: 'Strongo',
    position: 'Lead Tester'
  },
  {
    id: 4,
    firstName: 'Max',
    lastName: 'Power',
    position: 'Junior Software Engineer'
  }
];

function App() {
  let styles = {root: {fontFamily: 'Roboto'}}

  return (
    <div className="App" style={styles.root}>
      <h1 className="page-title">Mindex Coding Challenge</h1>
      {EmployeeList({employees: employees})}
    </div>
  );
}

export default App;
