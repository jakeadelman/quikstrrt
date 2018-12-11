import React from 'react';

class PicButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {showImgs: false, sentToChild: false, src0: null}

    this.handleClick = this.handleClick.bind(this);
    this.handleImgClick = this.handleImgClick.bind(this);
    
    }

    handleImgClick= (src0) => {
        if(this.state.sentToChild===false){
            const targ = src0.target.attributes[1].nodeValue
            console.log(src0.target.attributes[1].nodeValue, 'THIS SRC');
            this.props.fromChildToParentCallback(targ)
        this.setState({sentToChild: true})} else {
            const targ = src0.target.attributes[1].nodeValue
            console.log(src0.target.attributes[1].nodeValue, 'THIS SRC');
            this.props.fromChildToParentCallback(targ)
        }

        //try {
        //    var background = "/images/img4.jpg";
        //    console.log(background);
        //    return <div className="furtherback" styles={{backgroundImage: `url(${background})`}}/>}catch {
        //    console.log('err')
        //}
    }

    handleClick = () => {
        if (this.state.showImgs === false){
        this.setState({showImgs: true});} else if(this.state.showImgs === true){
            this.setState({showImgs:false})
        }
        

        //try {
        //var img = <div><img src="src/imgs/img1.jpg" alt="img1"/></div>
          
       // return <div>hello</div>
    //} catch {
         //   console.log('err')
        //}
    }

    render(){
        let imgRay = [{name: "img1", class: "inner-image"}, {name: "img2", class: "inner-image inner-image-2"}, {name: "img3", class: "inner-image inner-image-3"}, 
        {name: "img4", class: "inner-image inner-image-4"}, {name: "img5", class: "inner-image inner-image-5"}]
        
        
        let imgs = imgRay.map(image => {
            console.log(image)
            let src0 = "/images/"+image.name+".jpg";
            let class0 = image.class;
            return <img onClick={(src0)=> this.handleImgClick(src0)} key={image.name} src={src0} alt={src0} height="100" className={class0}/>
        })

        
        return(
            <div className="pic-button-div">
                <button className="pic-button" onClick={this.handleClick}>
                    Click me
                </button>
                {this.state.showImgs === true ? imgs: null}
            </div>
        )
    }
}
export default PicButton;