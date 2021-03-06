import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Parents from './components/Parents';
import Login from './components/Login';
import About from './components/About';
// import Cards from './components/cardGame';
import ColorGame from './components/colorGame';
import NumberGame from './components/NumberGame/numberGame';
import Games from './components/Games'
import ShapeGame from './components/shapeGame/shapeGame';
import SoundGame from './components/soundGame/soundGame';
import CardFlip from './components/CardFlip/CardFlip'

const AppRouter = () => {

        return (
            <Router>
                <div>
                    <Route exact path='/' component={Login} />
                    <Route path='/home' component={Games} />
                    <Route path='/about' component={About} />
                    <Route path='/parents' component={Parents} />
                    <Route path='/games/colorgame' component={ColorGame} />
                    {/* <Route path='/games/cardgame' component={Cards} /> */}
                    <Route path='/games/numbergame' component={NumberGame} />
                    <Route path='/games/shapegame' component={ShapeGame} />
                    <Route path='/games/soundgame' component={SoundGame} />
                    <Route path='/games/cardflip' component={CardFlip} />
                </div>
            </Router>
        )

    }

    export default AppRouter;