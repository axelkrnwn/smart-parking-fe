import { useAuth } from './hooks/use-auth';
import useRoute from './hooks/use-route';
import MainLayout from './layouts/main-layout';
import CreateAssignment from './pages/assignment/create-assignment';
import Login from './pages/account/login';
import Register from './pages/account/register';
import CreateCourse from './pages/course/create-course';
import './styles/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfilePage from './pages/account/profile';
import CourseDetailPage from './pages/course/course-detail';
import Submission from './pages/assignment/submission';
import CreateCourseDetail from './pages/course/create-course-detail';
import UpdateAssignment from './pages/assignment/update-assignment';
import Submit from './pages/assignment/submit';

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
                        <Route path="/course/create" element={<CreateCourse />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        
                        <Route path="/course/:id" element={<MainLayout />}>
                            <Route index element = {<CourseDetailPage />} />
                            <Route path='submission/:assignmentid' element = {<Submission />} />
                            <Route path='assignment' element = {<CreateAssignment />} />
                            <Route path='assignment/:assignmentid' element = {<UpdateAssignment />} />
                            <Route path='submit/:assignmentid/:submissionid?' element = {<Submit />} />
                            <Route path='detail' element = {<CreateCourseDetail />} />
                        </Route>
                    </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
