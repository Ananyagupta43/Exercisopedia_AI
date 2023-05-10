import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { YogaProvider } from "./YogaContext";
import Home from "./pages/Home/Home";
import Yoga from "./pages/Yoga/Yoga";
import About from "./pages/About/About";
import Tutorials from "./pages/Tutorials/Tutorials";
import Navbar from './components/New_navbar';
import NewHome from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails'
import Footer from './components/Footer';
import Login from './pages/login/Login';
import SignUp from "./pages/Signup";
import ExercisesPage from "./pages/exercise_page/ExercisesPage";
import GetStarted from './pages/GetStarted';
import Signout from './pages/Signout';
import SingleExercise from "./pages/single_exercise/SingleExercise";
import Form from "./pages/form/Form";
import Calculator from './pages/Calculator';
import { Box } from '@mui/system';
import UserProfile from './pages/UserProfile/UserProfile';
import "./App.css";
import YogaCanvas from "./pages/Yoga/YogaCanvas";

export default function App() {
  return (
    <YogaProvider>
      <Router>
        <Routes>
          <Route path="/newhome" element={<Home />} />
          <Route path="/start" element={<Yoga />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/yoga" element={<YogaCanvas />} />
        </Routes>
        <Box width="400px" sx={{ width: { xl: '1536px' } }} m="auto" className="main-container" >
      <Routes>
        <Route path="/" element={<NewHome />} />
        
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/exercisespage" element={<ExercisesPage />} />
        <Route path="/Getstarted" element={<GetStarted />} />
        <Route path="/logout" element={<Signout />} />
        <Route path="/singleExercise" element={<SingleExercise />} />
        <Route path="/form" element={<Form /> } />
        <Route path="/calculator/:name" element={<Calculator /> } />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </Box>
      </Router>
    </YogaProvider>
  );
}
