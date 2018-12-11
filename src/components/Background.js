import React from 'react';
import '../App.css';
import Search from './Search3';


class Background extends React.Component {
    

    render(){
        return(
            <div className="furtherback">
            <div className="backgrounddiv">
            
                <Search />
            </div>
            </div>
        )
    }
}

export default Background;