import type { VoteOption } from '../types'
import { useState, useEffect } from 'react'

interface Props {
  option: VoteOption
}

function VoteItem({ option }: Props) {
  const [voted, setVoted] = useState<number | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('vote_id')
    if (stored) {
      setVoted(Number(stored))
    }
  }, [])

  const handleVote = () => {
    localStorage.setItem('vote_id', option.id.toString())
    setVoted(option.id)
    alert('투표가 저장되었습니다.')
  }

  return (
    <div className="vote-item">
      <button onClick={handleVote} disabled={voted === option.id}>
        {option.text} {voted === option.id && '(선택됨)'}
      </button>
    </div>
  )
}

export default VoteItem
