import React, { Component } from 'react'
import './Banner.css'
import LeftArrow from './LeftArrow/LeftArrow'
import RightArrow from './RightArror/RightArrow'
import Slide from './Slide/Slide'
export class Banner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          images: [
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
          ],
          currentIndex: 0
        }
      }
         goToPrevSlide = (n) => {
             var i = this.state.images.length;
            if(n === 0){
                this.setState({currentIndex : i-1 })
            }
            else{
                this.setState({currentIndex : n-1 })
            }
            }
    
        goToNextSlide = (n) => {
            var i = this.state.images.length;
            if(n === i-1){
                this.setState({currentIndex : 0 })
            }
            else{
                this.setState({currentIndex : n + 1 })
            }
            }
    render() {
        let slide = this.state.images.map(image =>{
            return <Slide imageName={image} />
        })
        return (
            <div className="Main-banner">
                <LeftArrow clicked= {() => this.goToPrevSlide(this.state.currentIndex)}/>
                <RightArrow clicked= {() => this.goToNextSlide(this.state.currentIndex)} />
               {slide[this.state.currentIndex]}
            </div>
        )
    }
}

export default Banner
