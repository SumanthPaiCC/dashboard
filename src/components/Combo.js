import React, { Component } from 'react'
import Header from './Header'
import Grapher from './Grapher'
import Lister from './Lister'

 class Combo extends Component {
    render() {
        return (
            <>
                <div>
                    <Header/>
                </div>
                <div>
                    <Grapher/>
                </div>
                <div>
                    <Lister/>
                </div>
            </>
        )
    }
}

export default Combo
