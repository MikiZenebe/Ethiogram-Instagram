import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Post from './components/Post'

//Import Images
import Miki from './img/miki.jpg'
import MikiLk from './img/mikiLk.jpg'
import Natu from './img/natu.jpg'

function App() {
  return (
    <div className='App'>
      <Header />
      <Post username="miki_zenebe" caption='The day in the class' ImageUrl={Miki} />
      <Post username="miki_reta" caption='Just shut the fuck up ur mouth' ImageUrl={MikiLk} />
      <Post username="natu" caption='blender is life..Tab Tab' ImageUrl={Natu} />
    </div>
  )
}

export default App