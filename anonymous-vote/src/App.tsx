import { useState } from 'react'
import './index.css'
import type  { VoteOption } from './types'
import AdminPanel from './components/AdminPanel'
import VoteItem from './components/VoteItem'  
import Timer from './components/Timer'

function App() {
  const [options, setOptions] = useState<VoteOption[]>([])
  const [isVoting, setIsVoting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)

  const startVote = (duration: number) => {
    setIsVoting(true)
    setTimeLeft(duration)
  }

  return (
    <div className="container">
      <h1>익명 투표</h1>
      {!isVoting && (
        <AdminPanel setOptions={setOptions} onStartVote={startVote} />
      )}
      {isVoting && (
        <>
          <Timer seconds={timeLeft} onTimeout={() => setIsVoting(false)} />
          {options.map((opt) => (
            <VoteItem key={opt.id} option={opt} />
          ))}
        </>
      )}
    </div>
  )
}

export default App