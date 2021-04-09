import React from "react";

class SearchInput extends React.Component{
  state = { entry: '' }
  
  onFormSubmit = (event) => {
    event.preventDefault()
    //get onSearchSubmit from props and call it with parameter of state entry.
    //it will get called in input because it referenced there
    this.props.onSearchSubmit(this.state.entry)
}
  render()
  {
    return (
      <div className="ui segment">
        Searchbar
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                value={this.state.entry}
                onChange={(event) =>
                  this.setState({
                    entry: event.target.value.toUpperCase(),
                  })
                }
                placeholder="search..."
                type="text"
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
 }

export default SearchInput;
