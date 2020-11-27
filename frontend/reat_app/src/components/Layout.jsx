import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => (
    <div className="App">
        <Header/>
        
            <div className="main container">
                {children}

            </div>
    </div>
)
export default Layout