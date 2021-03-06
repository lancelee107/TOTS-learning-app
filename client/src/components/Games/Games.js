import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-materialize'
import './Games.css';
import Navbar from '../Navbar'
import Footer from '../Footer'

class Games extends Component {
    
    scrollGameSound = () => {
        let scrollSound = new Audio("../soundFiles/click.wav")
        scrollSound.play()
    }
        
    render() {
        return (
            <Fragment>
                <Navbar/>
                <div id='carouselDiv'>
                    <Carousel id='thisdiv'>
                        
                        <Link id='soundgame' to='/games/soundgame' onMouseDownCapture = {this.scrollGameSound} >
                            <img className='gameImg' src="./images/sound.PNG" alt="soundGame" />
                            <span className='gameName'>Sound Game</span>
                        </Link>
                        <Link id='shapegame' to='/games/shapegame' onMouseDownCapture = {this.scrollGameSound}>
                            <img className='gameImg' src="./images/shapes.PNG" alt="nature" />
                            <span className='gameName'>Shape Game</span>
                        </Link>
                        <Link id='colorgame' to='/games/colorgame' onMouseDownCapture = {this.scrollGameSound}>
                            <img className='gameImg' src="./images/color.PNG" alt="color game" />
                            <span className='gameName'> Color Game</span>
                        </Link>
                        <Link id='cardgame' to='#'>
                            <img className='gameImg' src="./images/memory.PNG" alt="color game" />
                            <span className='gameName'>(coming soon)</span>
                        </Link>
                        <Link id='numbergame' to='/games/numbergame' onMouseDownCapture = {this.scrollGameSound}>
                            <img className='gameImg' src="./images/number.PNG" alt="number game" />
                            <span className='gameName'>Number Game</span>
                        </Link>
                    </Carousel>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default Games;