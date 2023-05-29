import { Link } from "react-router-dom";

import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";
import { ROUTE_NAMES } from "routes/routeNames";

import styles from "./styles.module.scss";

export const PokemonsLayout = ({ pokemonsData, isLoading, errors, handlePokemonsLoad }) => {

   return (
      <>
         <Title title="Pokemons" />

         <div className={styles.buttonWrapper}>
            <button className={styles.loadButton} onClick={handlePokemonsLoad}>Load Pokemons</button>
         </div>

         {isLoading ? <LoadingSpinner /> :

            <div className={styles.wrapper}>
               {pokemonsData?.map(({ name, id, pokemonIcon }) => {
                  return (
                     <div key={id} className={styles.pokemonItem}>
                        <Link to={`${ROUTE_NAMES.POKEMONS}/${name}`} >
                           <div className={styles.pokemonLink}>
                              <img src={pokemonIcon} alt="" />
                              <p>{name}</p>
                           </div>
                        </Link>
                     </div>
                  );
               })}
            </div>
         }

         {errors && <p className={styles.errors}>{errors}</p>}
      </>
   );
};