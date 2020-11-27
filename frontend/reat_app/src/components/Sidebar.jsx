import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/components/Sidebar.scss'

const Sidebar =()=>(
    <div id="sticky-sidebar" className="col-3 px-1 bg-dark position-fixed">
        <div class="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
        </div>               
    </div>
)

export default Sidebar