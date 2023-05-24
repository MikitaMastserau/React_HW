import { useDispatch } from "react-redux";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { getPokemonsThunk } from "../api";

export const PokemonsContainer = () => {
   const dispatch = useDispatch();

   const handlePokemonsLoad = () => dispatch(getPokemonsThunk());

   return (
      <>
         <PokemonsLayout handlePokemonsLoad={handlePokemonsLoad} />
      </>
   );
};