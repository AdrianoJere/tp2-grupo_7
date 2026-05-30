import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Home       from './pages/Home'
import Caloni     from './pages/Caloni'
import Gutierrez  from './pages/Gutierrez'
import Imperiales from './pages/Imperiales'
import Explorer   from './pages/Explorer'
import ApiModule  from './pages/ApiModule'
import Gallery    from './pages/Gallery'
import Bitacora   from './pages/Bitacora'
import Arbol      from './pages/Arbol'
import './styles/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/"           element={<Home />}       />
            <Route path="/caloni"     element={<Caloni />}     />
            <Route path="/gutierrez"  element={<Gutierrez />}  />
            <Route path="/imperiales" element={<Imperiales />} />
            <Route path="/explorer"   element={<Explorer />}   />
            <Route path="/api"        element={<ApiModule />}  />
            <Route path="/gallery"    element={<Gallery />}    />
            <Route path="/bitacora"   element={<Bitacora />}   />
            <Route path="/arbol"      element={<Arbol />}      />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
