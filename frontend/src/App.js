import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/* components */
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import Message from './components/layout/Message'

/* pages */
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'
import Profile from './components/pages/User/Profile'
import MyPets from './components/pages/Pet/MyPets'
import AddPet from './components/pages/Pet/AddPet'
import PetDetails from './components/pages/Pet/PetDetails'
import EditPet from './components/pages/Pet/EditPet'
/* context */
import { UserProvider } from './context/UserContext'
import MyAdoptions from './components/pages/Pet/MyAdoptions'

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/user/profile' element={<Profile />} />
            <Route path='/pets/mypets' element={<MyPets />} />
            <Route path='pets/add' element={<AddPet />} />
            <Route path='pets/edit/:id' element={<EditPet />} />
            <Route path='pets/myadoptions' element={<MyAdoptions />} />
            <Route path='pet/:id' element={<PetDetails />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App;
