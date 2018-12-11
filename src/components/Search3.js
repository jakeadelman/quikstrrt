import React from 'react'
import Suggestions from './Suggestions';
var suggest = require('suggestion');
var sugers = []
class Search extends React.Component {
  constructor(props){
      super(props);
      this.state = {
            query: '',
            results: [],
            areResults: false
        }
    this.getInfo = this.getInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    }

  getInfo = async () => {
      
   /// if (sugers.length === 0){
      await suggest(this.state.query, { levels: 1 }, function (err, suggestions) {
      if (err) throw err;
      var sugs = suggestions.slice(0,5);
      console.log(sugs);
    
      sugers.push(sugs)
        }); 
      this.setState({results: sugers, areResults: true});
      sugers = []
        
    ///} else {this.setState({results: sugers});}
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      } else if (!this.state.query) {
        this.setState({results: [], areResults: false})
      }
    })
  }

  render() {
      var map = () => {
        var rr = this.state.results.map(r=>r);
        var len = rr.length
        var arr = []
        if(len>0){
        arr.push(rr[0])
        }
        console.log(arr[0]);
        if (arr[0]){
        var thatty = arr[0].map(r=>{return <li key={Math.random()*10000}>{r}</li>})
        return thatty;
        }}

    return (
    <div>
      <form>
        <input
          placeholder="<< search >>"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      </form>
      <div className="mapped">
    {map()}
      </div>
      </div>
    )
  }
}

export default Search



