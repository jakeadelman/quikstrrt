import React from 'react';
var suggest = require('suggestion');
var sugers = []
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
      areResults: false
    }
    this.getInfo = this.getInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    //this.renderLogos = this.renderLogos.bind(this);

  }



  getInfo = async () => {

    /// if (sugers.length === 0){
    await suggest(this.state.query, { levels: 1 }, function (err, suggestions) {
      if (err) throw err;
      var sugs = suggestions.slice(0, 5);
      console.log(sugs);

      sugers.push(sugs)
    });
    if (sugers.length) {
      this.setState({ results: sugers, areResults: true });
      sugers = []
    };

    ///} else {this.setState({results: sugers});}
  }
  handleSearchClick = (e) => {
    e.preventDefault();
    var args = e.target.textContent;
    var arr = args.replace(" ", "+")
    console.log(arr)
    window.location = "https://google.ca/search?q=" + arr;
    ///console.log(e.target.textContent);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var args = e.target[0].value
    if (args === '/tv') {
      window.location = "https://tradingview.com/chart"
    } else if (args === '/bf') {
      window.location = "https://bitfinex.com/"
    } else if (args === '/do') {
      window.location = "https://digitalocean.com/login/"
    } else {
      var arr = args.replace(" ", "+", 10)
      window.location = "https://google.ca/search?q=" + arr;
      ///console.log(e.target.textContent);
    }
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1 && this.state.query.charAt(0) !== "/") {

        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      } else if (!this.state.query) {
        this.setState({ results: [], areResults: false })
      }
    })
  }

  render() {
    var renderLogos =
      (<div>
        <a href="https://github.com/jakeadelman"><img className="logo-img" src="/images/github.svg" alt="git" /></a>
        <a href="https://gmail.com/"><img className="logo-img" src="/images/google.svg" alt="gisdf" /></a>
        <a href="https://twitch.tv/cryptotraderstv/"><img className="logo-img" src="/images/twitch.svg" alt="gitds" /></a>
        <a href="https://twitter.com/"><img className="logo-img" src="/images/twitter.svg" alt="gidt" /></a>

      </div>
      )


    var map = () => {
      var rr = this.state.results.map(r => r);
      var len = rr.length
      var arr = []
      if (len > 0) {
        arr.push(rr[0])
      }
      console.log(arr[0]);
      if (arr[0]) {
        var thatty = arr[0].map(r => { return <button className="singleMap" onClick={(e) => this.handleSearchClick(e)} key={Math.random() * 10000}>{r}</button> })
        return thatty;
      }
    }

    return (
      <div className="impdiv">
        <form onSubmit={(e) => this.handleSubmit(e)} className="impform">
          <input
            placeholder="Search.."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            className="imp"
          />
        </form>
        {this.state.results.length > 0 ? <div className="mappedBack">
          <div className="mapped">

            {map()}

          </div>
        </div> : null}
        <div className="pre-log">
          <div className="logo-container">
            {renderLogos}
          </div>
        </div>



      </div>
    )
  }
}

export default Search



