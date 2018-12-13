import React from 'react';
import '../App.css';
import Search from './Search';
import { im_def } from './default_image';

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = { background: im_def.toString() };
        this.receiveChildValue = this.receiveChildValue.bind(this);
    }

    receiveChildValue = (value) => {
        console.log("Parent received value from child: " + value);
        this.readIt()

        this.setState({ background: value })
    };



    render() {

        var backy = this.state.background;
        const styles = {
            furtherback: {
                backgroundImage: `url(${backy})`
            }
        }

        return (

            <div className="furtherback" style={styles.furtherback}>

                <div className="backgrounddiv">

                    <Search />

                </div>
            </div>
        )
    }


}




export default Background;