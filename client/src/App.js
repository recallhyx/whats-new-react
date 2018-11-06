// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { Layout, Button, Menu } from 'antd';
// import './App.css';

// const { Header } = Layout;
// class App extends Component {

//   render() {
//     return (
//       <Layout className="layout">
//         <Header>
//           <div className="logo">What's New</div>
//           <Button>登录</Button>
//           <Menu
//         theme="dark"
//         mode="horizontal"
//         defaultSelectedKeys={['2']}
//         style={{ lineHeight: '64px' }}
//       >
//         <Menu.Item key="1">nav 1</Menu.Item>
//         <Menu.Item key="2">nav 2</Menu.Item>
//         <Menu.Item key="3">nav 3</Menu.Item>
//       </Menu>
//         </Header>
//       </Layout>
//     )
//   }
// }
import React, { Component } from 'react';
import './App.css';
import Appbar from './components/Appbar/Appbar.jsx'
class App extends Component {
  render() {
    return (
      <Appbar name='黄逸鑫'></Appbar>
    )
  }
}

export default App;
