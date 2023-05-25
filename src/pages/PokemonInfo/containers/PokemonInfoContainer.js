import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { PokemonInfoLayout } from "../components/PokemonInfoLayout";
import { getPokemonInfoThunk } from "../api";
import { isPokemonInfoLoadingSelector, pokemonInfoErrorsSelector, pokemonInfoSelector } from "../selectors";

export const PokemonInfoContainer = () => {
   const dispatch = useDispatch();
   const { pokemonName } = useParams();

   const { name, abilities, sprites, stats } = useSelector(pokemonInfoSelector);
   const isLoading = useSelector(isPokemonInfoLoadingSelector);
   const errors = useSelector(pokemonInfoErrorsSelector);


   useEffect(() => {
      dispatch(getPokemonInfoThunk(pokemonName))
   }, [pokemonName]);

   return (
      <>
         <PokemonInfoLayout
            name={name}
            abilities={abilities}
            sprites={sprites}
            stats={stats}
            isLoading={isLoading}
            errors={errors} />
      </>
   );
};