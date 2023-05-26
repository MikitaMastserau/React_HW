import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { PokemonInfoLayout } from "../components/PokemonInfoLayout";
import { getPokemonInfoThunk } from "../api";
import { isPokemonInfoLoadingSelector, pokemonAbilitiesSelector, pokemonInfoErrorsSelector, pokemonNameSelector, pokemonSpritesSelector, pokemonStatsSelector } from "../selectors";

export const PokemonInfoContainer = () => {
   const dispatch = useDispatch();
   const { pokemonName } = useParams();

   const name = useSelector(pokemonNameSelector);
   const stats = useSelector(pokemonStatsSelector);
   const abilities = useSelector(pokemonAbilitiesSelector);
   const sprites = useSelector(pokemonSpritesSelector);
   const isLoading = useSelector(isPokemonInfoLoadingSelector);
   const errors = useSelector(pokemonInfoErrorsSelector);


   useEffect(() => {
      dispatch(getPokemonInfoThunk(pokemonName))
   }, [dispatch, pokemonName]);

   return (
      <>
         <PokemonInfoLayout
            name={name}
            stats={stats}
            abilities={abilities}
            sprites={sprites}
            isLoading={isLoading}
            errors={errors} />
      </>
   );
};