import { useState } from 'react'
import { Button } from '@/components/ui/button';
import { ModeToggle } from './components/mode-toggle';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex-col space-y-5'>
      <h1 className='text-4xl'>Design System Shadcn/ui</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Hello world!
        </p>
        <ModeToggle />

    </div>
  )
}

export default App
