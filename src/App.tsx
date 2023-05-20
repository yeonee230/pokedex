import React, { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { getInitialPokemonData } from './app/reducers/getInitialPokemonData';


function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {dispatch(getInitialPokemonData())} , [dispatch] )
  
  return (
       <>Hello word 🔆</>
  );
}

export default App;
