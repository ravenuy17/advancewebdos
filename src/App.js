import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/login'
import Sidebar from './Pages/sidebar'
import Signupteacher from './Pages/teacherSignUp'
import Header from './Pages/header'
import Addcts from './Pages/addcts'
import Newsandannc from './Pages/newsAndAnnouncements'
import Allcourses from './Pages/allCourses'
import Upcomeing from './Pages/upcoming'
import Viewcourses from './Pages/viewCourses'
import Signupstudent from './Pages/studentSignUp'
import Setting from './Pages/settings'
import Students from './Pages/students'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Signupteacher' element={<Signupteacher/>}></Route>
        <Route path='/Signupstudent' element={<Signupstudent/>}></Route>
        <Route path='/Sidebar' element={<Sidebar/>}></Route>
        <Route path='/Header' element={<Header/>}></Route>
        <Route path='/Addcts' element={<Addcts/>}></Route>
        <Route path='/Newsandannc' element={<Newsandannc/>}></Route>
        <Route path='/Allcourses' element={<Allcourses/>}></Route>
        <Route path='/Upcomeing' element={<Upcomeing/>}></Route>
        <Route path='/Viewcourses' element={<Viewcourses/>}></Route>
        <Route path='/Setting' element={<Setting/>}></Route>
        <Route path='/Students' element={<Students/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App