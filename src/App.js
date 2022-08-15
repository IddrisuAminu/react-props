import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'

function App() {

  let title ="My activities to do for the week"
  return (
    <div>
      <NavBar title={title} />
      <main>
        <Todo title="learning react" datetime="15th August 2022" />
        <Todo title="learning javascript" datetime="15th August 2022" />
        <Todo title="learning figma" datetime="15th August 2022" />
        <Todo title="learning aws" datetime="15th August 2022" />
        <Todo title="learning css" datetime="15th August 2022" />
        
</main>
    </div>
  )
}

export default App