import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageSlider from './Components/ImageSlider/ImageSlider.jsx';
import WorkoutPlanList from './Components/WorkoutPlanList/WorkoutPlanList.jsx';
import WorkoutPlanDetails from './Components/WorkoutPlanDetails/WorkoutPlanDetails.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Reminders from './components/Reminders';

import ImageSlider from './Components/ImageSlider/ImageSlider.jsx';
import WorkoutPlanList from './Components/WorkoutPlanList/WorkoutPlanList.jsx';
import AppRouter from './Components/Registration/AppRouter';
import Navigation from './Components/Registration/Navigation.jsx';


const App = () => {
  return (
    <Router>

      <div className='App'>
        <ImageSlider />
        <h1 className='text-4xl font-bold text-center my-12'>
          My Exercise Plan
        </h1>
        <Routes>
          <Route path='/' element={<WorkoutPlanList />} />
          <Route path='/workout/:id' element={<WorkoutPlanDetails />} />
        </Routes>
      </div>
    </Router>
      <div>
        <ImageSlider/>
        <WorkoutPlanList/>
        <Navigation />
        <AppRouter />
      </div>
    </Router>
    
      <div>
      <h1>Fitness App</h1>
      <Reminders />
    <div className='App'>
      <ImageSlider />
     <h1 className='text-4xl font-bold text-center my-8'>My Exercise Plan</h1>
      <WorkoutPlanList />

    </div>

  );
};




export default App;
