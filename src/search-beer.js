import React, { Component } from 'react';

export default class FindBeer extends Component {
  state = {
    termId: '',
    submitId: '25',
  };

  onSearchChange = (e) => {
    this.setState({
      termId: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitId: this.state.termId,
    });
    this.props.onBeer(this.state.termId);
  };
  render() {
    const searchText = 'number';
    return (
      <div>
        <form className="wrapp-for-form" onSubmit={this.onSubmit}>
          <input
            onChange={this.onSearchChange}
            type="number"
            min="1"
            max="100"
            size="15"
            className="search-input"
            placeholder={searchText}
            value={this.state.termId}
          />
          <button disabled={!this.state.termId} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
