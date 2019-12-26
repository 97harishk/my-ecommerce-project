import React, { Component } from 'react'
import './Banner.css'
import LeftArrow from './LeftArrow/LeftArrow'
import RightArrow from './RightArror/RightArrow'
import Slide from './Slide/Slide'
import slide1 from '../../assets/images/banner/slide-1.jpg'
import slide2 from '../../assets/images/banner/slide-2.jpg'
import slide3 from '../../assets/images/banner/slide-3.jpg'
export class Banner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          images: [slide1, slide2, slide3],
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
