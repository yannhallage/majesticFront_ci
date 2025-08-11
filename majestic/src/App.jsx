import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import MovieDetailsPage from '@/pages/MovieDetailsPage';
import BookingPage from '@/pages/BookingPage';
import TheatersPage from '@/pages/TheatersPage';
import TheaterDetailsPage from '@/pages/TheaterDetailsPage';
import EventsPage from '@/pages/EventsPage';
import OnStagePage from '@/pages/OnStagePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movie/:id" element={<MovieDetailsPage />} />
          <Route path="booking/:id" element={<BookingPage />} />
          <Route path="salles" element={<TheatersPage />} />
          <Route path="salles/:id" element={<TheaterDetailsPage />} />
          <Route path="theatre" element={<OnStagePage />} />
          <Route path="evenements" element={<EventsPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;