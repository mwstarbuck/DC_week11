import React, { Component } from 'react';
import './App.css';
import './Menu.css';
import { Menu } from './Menu'
import { Feature } from './Feature'
import { Article } from './Article'


class App extends Component {
  constructor() {
    super()
    this.articles = [{ title: "Hello Watchkit", body: "blah blah blah blah blah All work and no play makes Jack a dull boy.", comment: "12 comments", like: "90 likes" }, { title: "Second Article", body: "blah blah blah blah blah All work and no play makes Jack a dull boy.", comment: "22 comments", like: "300 likes" }]
  }
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <Feature></Feature>
        <Article title="Hello WatchKit" comment="12 comments" like="124 likes"></Article>
        <Article title="Introduction to Swift" comment="15 comments" like="45 likes"></Article>
      </div>
    );
  }
}

export default App;
