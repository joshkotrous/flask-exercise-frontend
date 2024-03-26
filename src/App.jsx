import './App.css'

import { AppRoutes } from './AppRoutes'
import { Navigation } from './components/Navigation'
import {NextUIProvider} from '@nextui-org/react';
import {BrowserRouter, useNavigate} from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Navigation />
      <div className="flex flex-col justify-center items-center h-screen">
        <AppRoutes />

      </div>
    </NextUIProvider>

  )
}

export default App
