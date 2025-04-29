import AppRoutes from "./routes/appRoutes"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AppRoutes />
      </div>
    </>
  )
}

export default App
