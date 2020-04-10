import React from 'react';
import './App.css';
import Header from '../src/Components/Header';

/*
Whithin this app, I need to keep a mobile first design in mind. Most of the notes for
each specific component are laid out within their respective files. However, for some of
the general layout parts of the app, I need to lay out the design here.

There should be a way to swap between seeing the infomation and maps views on mobile.
The Desktop version of the app should display the map as the main 75% of the screen with
the information tab off to the right 25% and the option to reverse the two.
When in mobile, the selection tool moves to the header. On a desktop, it should be visible
off to the left of the page at all times.
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
