import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello World from Tailwind!
      </h1>

      <main>
        <Card username="arjuncodess" post="Full Stack Developer" />
      </main>
    </>
  )
}

export default App
