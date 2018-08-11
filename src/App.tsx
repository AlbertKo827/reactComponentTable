import * as React from 'react';
import './App.css';

import Mytable, {memberModelProps} from './components/table/table';

const memberData : memberModelProps[] = [
  {
    name : "고명석",
    age : 21,
    phoneNum : "01011111111",
  },
  {
    name : "김장현",
    age : 29,
    phoneNum : "01022222222",
  },
  {
    name : "전민호",
    age : 27,
    phoneNum : "01033333333",
  },
  {
    name : "조민우",
    age : 15,
    phoneNum : "01044444444",
  },
]

class App extends React.Component {
  public render() {
    return (
      <h1>
        <Mytable memberInfo={memberData}/>
      </h1>
    );
  }
}

export default App;