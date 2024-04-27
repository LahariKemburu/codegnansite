import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './navigation/Nav'
import Footer from './Footer/Footer';
import Home from './Home/Home.jsx';
import About from './about/About';
import Placements from './placements/Placements';
import Companies from "./Companies.jsx"; // Make sure the file is named companies.jsx
import Collaboration from './Collabarations.jsx';
import Pre from './Prefooter/Prefooter.jsx';
import Gallery from './about/Gallery.jsx';
import Course_template from './course_template/Course_template.jsx';
import JavaCoursePage from './course_template/Java_course_page.jsx';
import Python_training_in_banglore from './Training/Python_training_in_banglore.jsx';
import Python_training_in_hyderabad from './Training/python_training_in_hyderabad.jsx';
import Python_training_in_Vijayawada from './Training/Python_training_in_Vijayawada.jsx';
import Python_full_stack_training_in_banglore from './Training/Python-full-stack/Python_full_stack_in_Banglore.jsx';
import Python_full_stack_training_in_hyderabad from './Training/Python-full-stack/Python_full_stack_in_Hyderabad.jsx';
import Python_full_stack_training_in_vijayawada from './Training/Python-full-stack/Python_full_stack_Vijayawada.jsx';

function App() {
  return(
    <div>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>  } />
        <Route path="/about" element={<About/>  } />
        <Route path='/placements' element={<Placements />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/java_course_page' element={<JavaCoursePage />}></Route>
        <Route path='/python_training_in_banglore' element={<Python_training_in_banglore />}></Route>
        <Route path='/python_training_in_hyderabad' element={<Python_training_in_hyderabad />}></Route>
        <Route path='/python_training_in_Vijayawada' element={<Python_training_in_Vijayawada/>}></Route>
        <Route path='/python-full-stack-developer-in-banglore' element={<Python_full_stack_training_in_banglore/>}></Route>
        <Route path='/python-full-stack-developer-in-hyderabad' element={<Python_full_stack_training_in_hyderabad/>}></Route>
        <Route path='/python-full-stack-developer-in-vijayawada' element={<Python_full_stack_training_in_vijayawada/>}></Route>

      </Routes>
      {/* <Pre></Pre> */}
       <Footer></Footer>    
       {/* <Companies/> */}
       {/* <Collaboration/> */}
    </div>
  );
 
}

export default App
