import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { useEffect, useState } from 'react';
import { getAllGames } from './API/gameServices';
import AddNewGame from './pages/NewGame';
import ShowReviewsPage from './pages/ShowReviewsPage';



function App() {

  const [games, setGames] = useState([]);

  useEffect(()=> {
    async function fetchData() {
      try {
        const response = await getAllGames();
        setGames(response)
        console.log(games);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
    <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard games={games}/>} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="new-game" element={<AddNewGame />} />
            <Route path="show-reviews" element={<ShowReviewsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
