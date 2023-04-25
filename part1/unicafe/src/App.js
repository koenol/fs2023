import { useState } from 'react'



const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Feedback = (props) => {
  return (
    <div>
      <h1>Feedback</h1>
      <Button text="Good" handleClick={props.handleGood} />
      <Button text="Neutral" handleClick={props.handleNeutral} />
      <Button text="Bad" handleClick={props.handleBad} />
    </div>
  )
}

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback
      </div>
    )
  }
  return (
    <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text="Good:" value={props.good} />
            <StatisticsLine text="Neutral:" value={props.neutral} />
            <StatisticsLine text="Bad:" value={props.bad} />
            <StatisticsLine text="All:" value={props.good + props.neutral + props.bad} />
            <StatisticsLine text="Average:" value={((props.good * 1) + (props.bad * -1)) / (props.good + props.neutral + props.bad)} />
            <StatisticsLine text="Positive:" value={(props.good / (props.good + props.neutral + props.bad) * 100).toString() + " %"}/>
          </tbody>
        </table>
    </div>
  )
}

const StatisticsLine = (props) => {
  return (
      <tr><td width="100">{props.text}</td><td>{props.value}</td></tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral +1)
  const handleBad = () => setBad(bad +1)

  return (
    <div>
      <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
