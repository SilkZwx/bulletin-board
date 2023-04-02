import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AddThreadPage} from './AddThreadPage';

export const Router = () => {
  return (
    <Routes>
      <Route path='/*' element={<HomePage />} /> 
      <Route path='/Thread/new' element={<AddThreadPage />} />
    </Routes>
  );
}