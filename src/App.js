import React from "react";
import "./App.css";
import Header from "./component/Header";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header title="KMS MKRJ" />
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hello, React World!"
    };
  }

  changeTitle = () => {
    this.setState({
      title: this.state.title + " I am here."
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header title={this.state.title} />
          <button onClick={this.changeTitle}>Change Title</button>
        </header>
      </div>
    );
  }
}

export default App;
