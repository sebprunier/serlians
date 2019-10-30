import React, { useState, useEffect }  from 'react';
import Serlians from './Serlians';
import './App.css';

const SPREADSHEET_URL = 'https://spreadsheets.google.com/feeds/list/1lohee-YomN9-HBpsN1e1pvROTIgCFTtfOckbqcshlFo/1/public/full?alt=json';

function App() {
  const [serlians, setSerlians] = useState([]);

  useEffect(() => {
    fetch(SPREADSHEET_URL)
      .then(r => r.json())
      .then(json => json.feed.entry)
      .then(jsonSerlians => {
        const serlians = jsonSerlians.map(jsonSerlian => {
          return {
            "id": jsonSerlian['gsx$id']['$t'],
            "mail": jsonSerlian['gsx$mail']['$t'],
            "firstname": jsonSerlian['gsx$prénom']['$t'],
            "lastname": jsonSerlian['gsx$nom']['$t'],
            "role": jsonSerlian['gsx$fonction']['$t'],
            "competences": jsonSerlian['gsx$competences']['$t'].split(', '),
          }
        });
        setSerlians(serlians.sort((s1, s2) => s1.firstname.localeCompare(s2.firstname)))
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Serlians !</h1>
        <Serlians serlians={serlians} />
      </header>
    </div>
  );
}

export default App;