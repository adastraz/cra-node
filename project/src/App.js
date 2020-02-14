import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [api] = useState('http://localhost:5000/api/projects')
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios
      .get(api)
        .then(res => {
          console.log(res.data)
          setProjects(res.data)
        })
        .catch(err => {
          console.log(err)
        })
  },[])

  return (
    <div className="App">
      {projects.map(proj => {
        <div key={proj.id}>
          <h1>{proj.name}</h1>
          <p>{proj.decription}</p>
        </div>
      })}
    </div>
  );
}

export default App;
