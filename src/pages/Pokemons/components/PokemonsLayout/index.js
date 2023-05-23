import { Title } from "components/Title";

import styles from "./styles.module.scss";

export const PokemonsLayout = ({ data, errors, isLoading, handlePokemonsLoad }) => {

   return (
      <>
         <Title title="Pokemons" />

         <div className={styles.wrapper}>
            <button className={styles.loadButton} onClick={handlePokemonsLoad}>Load Pokemons</button>
         </div>

         {/* {isLoading ? <p className={styles.loading}>Loading ...</p> :

            <div className={styles.wrapper}>
               {data?.results?.map(({ name, url }) => {
                  return (
                     <div className={styles.pokemonInfo} key={name}>
                        <p>{name}</p>
                        <a href={url} target="_blank" rel="noreferrer">{url}</a>
                     </div>
                  )
               })}
            </div>
         }

         {errors && <p className={styles.errors}>{errors}</p>} */}
      </>
   );
};