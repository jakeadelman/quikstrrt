import React from 'react'
import Suggestions from './Suggestions'
var Typeahead = require('react-typeahead').Typeahead;
var suggest = require('suggestion');

class Search extends React.Component {
  constructor(props){
      super(props);
      this.state = {
            query: '',
            results: []
        }
    this.getInfo = this.getInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    }

  getInfo = () => {
    var sugers = []
      
    if (sugers.length === 0){
      suggest(this.state.query, { levels: 1 }, function (err, suggestions) {
      if (err) throw err;
      var sugs = suggestions.slice(0,5);
      console.log(sugs);
      sugers.push(sugs)
  }); }
      else {this.setState({results: sugers});
    sugers = []}
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          setTimeout(
            this.getInfo(),4000)
        }
      } else if (!this.state.query) {
        this.setState({results: []})
      }
    })
  }

  render() {
    return (
      <form>
        <Typeahead
          placeholder="<< search >>"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          inputProps={this.onChange && this.ref}
          maxVisible={2}
          options={this.state.results}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search



