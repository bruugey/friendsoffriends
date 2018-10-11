import React, { Component } from 'react'
import Flickity from 'react-flickity-component'

import maya from '../images/maya.jpg'
import alejandra from '../images/alejandra.jpg'
import julia from '../images/julia.jpg'

var flickityOptions = {
    "freeScroll": false, "contain": true, "prevNextButtons": true, "pageDots": false, "draggable": false, "accessibility": true, "arrowShape": { x0: 10, x1: 65, y1: 45, x2: 70, y2: 40, x3: 20 }
}


export default class Slider extends Component {

    componentDidMount = () => {
        this.flkty.on('change', () => {
            this.props.changeDisplay(this.flkty.selectedIndex)
        })
    }

    render() {
        return (
            <div className="slider">
                <Flickity options={flickityOptions} flickityRef={c => this.flkty = c}>
                    <div className="carousel-cell" style={{ backgroundImage: `url(${maya})`}}></div>
                    <div className="carousel-cell" style={{ backgroundImage: `url(${alejandra})`}}></div>
                    <div className="carousel-cell" style={{ backgroundImage: `url(${julia})`}}></div>
                </Flickity>
            </div>
        )
    }
}
