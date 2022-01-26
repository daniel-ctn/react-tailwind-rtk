import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from 'features/counter/counterSlice'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'

function App() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className='flex items-center justify-center'>
        <button
          className='ml-1 mr-2'
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className='text-4xl px-4 mt-0.5'>{count}</span>
        <button
          className='text-3xl px-3 outline-0 bg-none appearance-none border-2 
          border-transparent color-[rgb(112,76,182)] pb-0.5 cursor-pointer 
          bg-[rgba(112,76,182,0.1)] rounded-sm transition tracking-tight'
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className='flex items-center justify-center'>
        <input
          className='text-3xl p-0.5 w-16 text-center mr-0.5'
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className='text-3xl px-3 outline-0 bg-none appearance-none border-2
          border-transparent color-[rgb(112,76,182)] pb-0.5 cursor-pointer
          bg-[rgba(112,76,182,0.1)] rounded-sm transition tracking-tight'
          aria-label='Increment value'
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className='text-3xl px-3 outline-0 bg-none appearance-none border-2
          border-transparent color-[rgb(112,76,182)] pb-0.5 cursor-pointer
          bg-[rgba(112,76,182,0.1)] rounded-sm transition tracking-tight'
          aria-label='Increment value'
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className='text-3xl px-3 outline-0 bg-none appearance-none border-2
          border-transparent color-[rgb(112,76,182)] pb-0.5 cursor-pointer
          bg-[rgba(112,76,182,0.1)] rounded-sm transition tracking-tight'
          aria-label='Increment value'
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}

export default App
