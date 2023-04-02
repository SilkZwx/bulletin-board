import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AddThreadPage} from './AddThreadPage';
import { ThreadPostPage } from "./ThreadPostPage";

export const Router = () => {
  return (
    <Routes>
      <Route path='/*' element={<HomePage />} /> 
      <Route path='/Thread/new' element={<AddThreadPage />} />
      <Route path='/thread/:id/:title' element={<ThreadPostPage />} />
    </Routes>
  );
}