import { Route, Routes } from 'react-router-dom'

import Home from 'pages/Home'
import Header from 'components/layout/Header'

function App() {
  return (
    <div className="flex items-center justify-center">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
