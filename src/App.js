import React, {Component} from 'react';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome'
import Hello from './components/hello';
import Message from './components/Message';
import Counter from './components/Counter';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" heronName="Hulk">
          <p>This is Children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"/>
        <Welcome name="udin" heroName="SuperUdin"></Welcome>
        {/* <Hello></Hello> */}
        <Message></Message>
        <Counter></Counter>
        <ClassClick/>
        <ParentComponent></ParentComponent>
        <UserGreeting></UserGreeting>
        <NameList></NameList>
        <StyleSheet primary={true}></StyleSheet>
        <Inline></Inline>
      </div>
    );
  }
}  

export default App;
