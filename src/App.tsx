import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './components/mode-toggle';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container flex h-screen flex-col items-center gap-y-20 pt-20">
      <h1 className="text-4xl">Design System Shadcn/ui</h1>
      <ModeToggle />
      <p>Hello world!</p>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </div>
  );
}

export default App;
