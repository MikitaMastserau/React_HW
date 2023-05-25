import { useDispatch, useSelector } from "react-redux";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { getPokemonsThunk } from "../api";
import { isPokemonsLoadingSelector, pokemonsDataSelector, pokemonsErrorsSelector } from "../selectors";

export const PokemonsContainer = () => {
   const dispatch = useDispatch();

   const pokemonsData = useSelector(pokemonsDataSelector);
   const isLoading = useSelector(isPokemonsLoadingSelector);
   const errors = useSelector(pokemonsErrorsSelector);

   const handlePokemonsLoad = () => dispatch(getPokemonsThunk());

   return (
      <>
         <PokemonsLayout
            pokemonsData={pokemonsData}
            isLoading={isLoading}
            errors={errors}
            handlePokemonsLoad={handlePokemonsLoad} />
      </>
   );
};