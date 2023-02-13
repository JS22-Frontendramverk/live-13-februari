import { useLocation } from "react-router-dom"

function About() {
  const { state } = useLocation();

  return (
    <div className="App">
      <h1>Detta är om-sidan</h1>
      <p>State: { state.name }</p>
    </div>
  )
}

export default About
