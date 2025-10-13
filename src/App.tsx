import { useAuth } from '@/hooks/use-auth';
import useRoute from './hooks/use-route';
import MainLayout from './layouts/main-layout';
import Login from './pages/account/login';
import Register from './pages/account/register';
import './styles/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfilePage from './pages/account/profile';

function App() {
    const auth = useAuth()
    const links = useRoute(auth?.user?.role ?? "")

    return (    
        <div className='w-screen box-border'>
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainLayout />}>
                            {links.map(e => (e.to == "/")? <Route key={e.name} index element={e.element}/>:<Route key={e.name} path={e.to} element={e.element}/>)}
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        
                    </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
