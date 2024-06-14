import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/dashboard/Dashboard'
import Browse from './components/browse/Browse'
import Gallery from './components/gallery/Gallery'

export default function Client() {
    return (
        <div>
            <Dashboard />
            <Browse />
            <Gallery />
        </div>
    )
}