import { useReducer } from 'react'

const Count = ({ el, onClickAdd, onCLickDecrease }) => {
  return (
    <div className="count">
      <button onClick={onCLickDecrease}>-</button>
      <h2>{el}</h2>
      <button onClick={onClickAdd}>+</button>
    </div>
  )
}

const reducer = (state, action) =>
  ({
    increment_counter: { ...state, counter: state.counter + state.interval },
    decrement_counter: { ...state, counter: state.counter - state.interval },
    increment_interval: { ...state, interval: state.interval + 1 },
    decrement_interval: {
      ...state,
      interval: state.interval === 1 ? state.interval : state.interval - 1,
    },
  })[action.type] || state

const App = () => {
  const [state, dispatch] = useReducer(reducer, { interval: 1, counter: 0 })

  const daysOfWeek = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  const currentDate = new Date()
  const dayOfWeek = daysOfWeek[currentDate.getDay()]
  const dayOfMonth = currentDate.getDate() + state.counter
  const month = months[currentDate.getMonth()]
  const year = currentDate.getFullYear()

  const addCounter = () => dispatch({ type: 'increment_counter' })
  const decreaseCounter = () => dispatch({ type: 'decrement_counter' })
  const addInterval = () => dispatch({ type: 'increment_interval' })
  const decreaseInterval = () => dispatch({ type: 'decrement_interval' })

  return (
    <>
      <div className="container">
        <Count
          el={`Intervalo: ${state.interval}`}
          onClickAdd={addInterval}
          onCLickDecrease={decreaseInterval}
        />
        <Count
          el={`Contador: ${state.counter}`}
          onClickAdd={addCounter}
          onCLickDecrease={decreaseCounter}
        />
      </div>
      <div className="container">
        <h2>
          Hoje é {dayOfWeek}, {dayOfMonth} de {month} de {year}
        </h2>
      </div>
    </>
  )
}

export { App }
