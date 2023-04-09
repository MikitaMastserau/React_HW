import { useDispatch, useSelector } from "react-redux";

import { getPokemonsThunk } from "../api";
import { Title } from "components/Title";

export const DataFetchingContainer = () => {
   // const dispatch = useDispatch();

   // const pokemons = useSelector((state) => state.dataFetching.data);

   // const handlePokemonsLoad = () => {
   //    dispatch(getPokemonsThunk);
   // };

   return (
      <>
         <Title title="Pokemons" />
         {/* <div>
            <button onClick={handlePokemonsLoad}>Get All Pokemons</button>

            <div>

            </div>
         </div> */}
      </>
   );
};