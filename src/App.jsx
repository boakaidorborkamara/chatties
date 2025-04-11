import { useState } from 'react'
import { SideBar } from './components/SideBar'
import { ChatArea } from './components/ChatArea'

function App() {

  return (
    <div className='flex'>
      <section className='basis-2/5'>
          <SideBar/>
      </section>

      <section className='basis-5/5' >
        <ChatArea/>
      </section>
    </div>
  )
}

export default App
