import { useState } from 'react'
import type { VoteOption } from '../types'

interface Props {
  setOptions: (opts: VoteOption[]) => void
  onStartVote: (duration: number) => void
}

function AdminPanel({ setOptions, onStartVote }: Props) {
  const [tempOptions, setTempOptions] = useState<VoteOption[]>([])
  const [duration, setDuration] = useState(30)

  const addOption = () => {
    const text = prompt('항목 내용을 입력하세요')
    if (text) {
      setTempOptions([
        ...tempOptions,
        { id: Date.now(), text, votes: 0 },
      ])
    }
  }

  const handleStart = () => {
    setOptions(tempOptions)
    onStartVote(duration)
  }

  return (
    <div>
      <h2>투표 항목 설정</h2>
      <button onClick={addOption}>항목 추가</button>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        min={5}
      />
      <span>초</span>
      <br />
      <button onClick={handleStart}>투표 시작</button>
      <ul>
        {tempOptions.map((opt) => (
          <li key={opt.id}>{opt.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default AdminPanel
