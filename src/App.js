import React, { Component } from "react";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import ImageList from "./components/ImageList";
class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (entry) => {
    // when i write sometihng in input it gets put to entry in link
    const response = await axios.get(
      `https://pixabay.com/api/?key=21085798-195cd403946ce8bf293dce4af&q=${entry}&image_type=photo`
    );
    // console.log(response.data.hits);
    this.setState({
      images: response.data.hits,
    });
  };
  // it will log searchinput entry aka whatever you write
  //this function expects parameter called entry and logs it

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        {/* ¸pass function submit ion search input */}
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        We have {this.state.images.length}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
