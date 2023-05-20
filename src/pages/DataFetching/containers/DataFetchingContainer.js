import { useEffect, useState } from "react";

import { DataFetchingLayout } from "../components/DataFetchingLayout";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export const DataFetchingContainer = () => {

   const [pokemons, setPokemons] = useState([]);
   const [errors, setErrors] = useState(null);
   const [isLoading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      fetch(BASE_URL).then((response) => response.json()).then((data) => {
         setPokemons(data.results);
      }).catch((errors) => {
         setErrors(errors.message);
      }).finally(() => {
         setLoading(false);
      });
   }, []);

   // #2 var

   useEffect(() => {
      (async () => {
         setLoading(true);
         try {
            const data = await fetch(BASE_URL).then((response) => response.json());
            setPokemons(data.results);
         } catch (errors) {
            setErrors(errors.message);
         } finally {
            setLoading(false);
         };
      })();
   }, []);

   return (
      <>
         <DataFetchingLayout pokemons={pokemons} errors={errors} isLoading={isLoading} />
      </>
   );
};