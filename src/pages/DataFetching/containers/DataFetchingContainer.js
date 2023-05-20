import { useEffect } from "react";

import { DataFetchingLayout } from "../components/DataFetchingLayout";
import { useFetching } from "hooks";
import { getPokemons } from "../api";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export const DataFetchingContainer = () => {

   const { data, errors, isLoading, handleDataLoad } = useFetching(() => getPokemons(BASE_URL), true);

   return (
      <>
         <DataFetchingLayout data={data} errors={errors} isLoading={isLoading} handleDataLoad={handleDataLoad} />
      </>
   );
};