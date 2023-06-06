import { useState } from 'react';
import './App.css';
import AuthForm from './components/auth_form/auth_form';
import MapOfCity from './components/map/map_of_city/map_of_city';
import { hasUser } from './storage';

function App() {
  const [isAuth, setIsAuth] = useState(hasUser());

  const content = isAuth ? (
    <MapOfCity setIsAuth={setIsAuth} />
  ) : (
      // РЕВЬЮ: можно ли без передачи пропов понимать, меняется ли isAuth? Наверняка, есть какие-то хуки
      <AuthForm isAuth={isAuth} setIsAuth={setIsAuth} />
  );

  return <div className="App">{content}</div>;
}

export default App;
