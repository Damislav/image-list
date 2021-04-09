import React, { Component } from "react";
import axios from "axios";
import SearchInput from "./components/SearchInput";
class App extends Component {
  state = { items: [] };

  async onSearchSubmit(entry) {
    console.log(entry);
    const response = await axios.get(
      `https://pixabay.com/api/?key=21085798-195cd403946ce8bf293dce4af&q=${entry}&image_type=photo`
    );
    console.log(response);
  }
  // it will log searchinput entry aka whatever you write
  //this function expects parameter called entry and logs it

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        {/* ¸pass function submit ion search input */}
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
