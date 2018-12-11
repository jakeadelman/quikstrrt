import _ from 'lodash';
import React, { Component } from 'react'
import { Search, Grid } from 'semantic-ui-react'
var suggest = require('suggestion');



export default class SearchExampleStandard extends Component {
  constructor(props){
      super(props);
      this.state = {
        sugRay: []
      }
      this.handleSearchChange.bind(this);
  }


  handleSearchChange = (value) => {
    var sugRay = []
    suggest(value, { levels: 1 }, function (err, suggestions) {
        if (err) throw err;
        var sugs = suggestions.slice(0,5)
        sugRay.push(sugs)
    });


    if(sugRay){
        
        this.setState({sugRay: sugRay});
        
        console.log(sugRay)
    } else {
        sugRay = []
    }
   
  }

  render() {
    const {value, sugRay} = this.state
   
    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            value={value}
            {...this.props}
          />
          
        </Grid.Column>
        {sugRay.map(async (item)=>
            <li>{await console.log("we are here",item)}</li>) }
      </Grid>
    )
  }
}
