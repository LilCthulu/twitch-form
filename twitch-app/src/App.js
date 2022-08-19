import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Freshtopia suggestion hub</h1>
      {/* Suggestion form for twitch to tell me what to do */}
      <form action="https://formspree.io/f/mvoyonlq" method="POST">
        
          <h3 id='description'>Please enter your stream suggestions below. If I like them they may end up on my next stream.</h3>
        
        <h3>Twitch Username</h3>
        <input type="text" name="username" placeholder="Username" />
        
          <h3>Suggestion</h3>
        <div className="suggestion">
          <input type="text" name="suggestion" placeholder="Please enter suggestion here" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
