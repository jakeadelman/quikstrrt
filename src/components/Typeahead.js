import React from 'react';
var Typeahead = require('react-typeahead').Typeahead;


export default class Type extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (val) => {
        val
    }


  render(){return(<Typeahead
    options={['John', 'Paul', 'George', 'Ringo']}
    maxVisible={2}
    onChange={this.handleChange}
  />)}
}