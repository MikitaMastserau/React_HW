import { useFetching } from "hooks";

import { DataFetchingLayout } from "../components/DataFetchingLayout";
import { getPokemonsList } from "../api";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export const DataFetchingContainer = () => {

   const { data, errors, isLoading, handleDataLoad } = useFetching(() => getPokemonsList(BASE_URL), true);

   return (
      <>
         <DataFetchingLayout data={data} errors={errors} isLoading={isLoading} handleDataLoad={handleDataLoad} />
      </>
   );
};