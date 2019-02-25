import * as React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
