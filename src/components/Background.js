import React from 'react';
import '../App.css';
import Search from './Search2'


class Background extends React.Component {
    

    render(){
        return(
            <div className="backgrounddiv">
            <img className="imgback" src={ require('../imgs/img1.jpg') } alt="fuck"/>
                <Search />
                
            </div>
        )
    }
}

export default Background;