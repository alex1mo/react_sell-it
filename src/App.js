import React, { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";

class App extends Component {
  state = {
    page: "Home"
  };

  getPage = e => {
    this.setState({
      page: e.target.innerHTML
    });
  };

  render() {
    return (
      <div className="app">
        {router(this.state.page)}
        <Footer getPage={this.getPage} />
      </div>
    );
  }
}

export default App;

function router(str) {
  switch (str) {
    case "Home":
      return <Home />;
    case "Product":
      return <ProductList />;
    default:
      return <Home />;
  }
}
