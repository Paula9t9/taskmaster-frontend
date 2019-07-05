import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './app.scss';

import mockData from './mockData.json';

const API = 'http://paula9t9-taskmaster.us-east-2.elasticbeanstalk.com/tasks';


function Tasks() {

  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    //Use mock data for dev purposes (comment out to switch to API)
    // setTasks(mockData);

    //Use API data for live deployment (comment in to switch to API)
    fetch( API, {
      mode: 'cors',
    })
    .then(data => data.json())
    .then(tasks => setTasks(tasks))
    .catch(console.err);
  };

  useEffect(getTasks, []);

  function MoreInfo(props) {
    let task = props.task || [];
    return (
      <section>
          <div>
            <span>{task.description}</span>
            <span>Assigned to: {task.assignee}</span>
          </div>
      </section>
    )
  }

  return (

      <ul>
        {tasks.map( (task) => 
          <li className={'status-${task.status}'} key={task.id}>
            <details>
              <summary>
                <span>{task.title}</span>
                <span>{task.status}</span>
              </summary>
              <MoreInfo task={task}></MoreInfo>
            </details>
          </li>
          )}
      </ul>
  )
}





function App() {

  return (
    <>
      <header>Taskmaster</header>
      <main>
        <Tasks></Tasks>
      </main>
      <footer>&copy;2019 PaulaT</footer>
    </>
  );
}

export default App;
