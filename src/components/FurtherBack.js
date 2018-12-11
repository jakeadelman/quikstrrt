import React from 'react';

export default class FurtherBack extends React.Component {
    constructor(props){
        super(props);
        this.state = {};

    }

    render(){
        return(
            <div className="furtherback" style={styles.furtherback}>
            </div>
            
           
           
        )
    }
}

var background = "/images/img2.jpg";

const styles = {
    furtherback: {
        backgroundImage: `url(${background})`
    }
}