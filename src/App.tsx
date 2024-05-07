import { useState } from 'react'
import { Button } from '@/components/ui/button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex-col space-y-5'>
      <h1>Design System Shadcn/ui</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Hello world!
        </p>
        <div className='bg-pink-100 text-slate-100'>
          Testing
        </div>
    </div>
  )
}

export default App
