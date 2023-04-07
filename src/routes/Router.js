import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AddThreadPage} from '../pages/AddThreadPage';
import { ThreadPostPage } from "../pages/ThreadPostPage";

export const Router = () => {
  return (
    <Routes>
      <Route path='/*' element={<HomePage />} /> 
      <Route path='/Thread/new' element={<AddThreadPage />} />
      <Route path='/thread/:id/:title' element={<ThreadPostPage />} />
    </Routes>
  );
}