import { useState } from 'react'


const Button = (props) =>
{
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const StatisticsLine = (props) =>
{
  return (
    <p>{props.text} {props.value} </p>
  )
}

const Statistics = (props) =>
{
  const totalFeedback = props.good + props.neutral + props.bad
  const averageFeedback = (props.good - props.bad) / totalFeedback
  const positiveFeedback = (props.good / totalFeedback) * 100
  if (totalFeedback == 0)
  {
    return (
      <p>No feedback given</p>
    )
  }
  else 
  {
        return (
      <div>
        <StatisticsLine text='good' value={props.good} />
        <StatisticsLine text='neutral' value={props.neutral} />
        <StatisticsLine text='bad' value={props.bad} />
        <StatisticsLine text='all' value={totalFeedback}/>
        <StatisticsLine text='average' value={averageFeedback}/>
        <StatisticsLine text='positive' value={`${positiveFeedback}%`} />
      </div>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBad = () =>
  {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
