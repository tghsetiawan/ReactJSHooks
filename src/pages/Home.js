import React from 'react'
import Hitung from '../components/Hitung'

export default function Home() {
    return (
        <div style={{padding: '20px'}}>
            <header>
                <h4>Belajar React Hooks - Aplikasi Counting Pengunjung</h4>
            </header>

            <hr />
                <Hitung/>
            <hr />

            <footer>
                <h2>create by learn react js</h2>
            </footer>
            
        </div>
    )
}
