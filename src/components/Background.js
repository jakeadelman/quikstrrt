import React from 'react';
import '../App.css';
import Search from './Search3';
import PicButton from './PicButton';


class Background extends React.Component {
    constructor(props){
        super(props);
        this.state = {background: ''};

        this.receiveChildValue = this.receiveChildValue.bind(this);
    }
    
    receiveChildValue = (value) => {
        console.log("Parent received value from child: " + value);
        this.setState({background: value})
    };


    render(){
        const styles = {
            furtherback: {
                backgroundImage: `url(${this.state.background})`
            }
        }

        return(
           
            <div className="furtherback" style={styles.furtherback}>
                
                    <PicButton fromChildToParentCallback={this.receiveChildValue} />
                <div className="backgrounddiv">
               
                    <Search />
                
                </div>
            </div>
        )
    }


}




export default Background;