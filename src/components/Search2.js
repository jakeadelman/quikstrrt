import React from 'react'
import Suggestions from './Suggestions'

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
      suggest(this.state.query, { levels: 1 }, function (err, suggestions) {
        if (err) throw err;
        var sugs = suggestions.slice(0,5);
        console.log(suggestions);
        sugers.push(sugs)
    });
    if (sugers){this.setState({results: sugers})
    console.log(this.state)}
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          setTimeout(
            this.getInfo(),2000)
        }
      } else if (!this.state.query) {
        this.setState({results: []})
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="<< search >>"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search



