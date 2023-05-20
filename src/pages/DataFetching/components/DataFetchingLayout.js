import { Title } from "components/Title";

import styles from "./styles.module.scss";

export const DataFetchingLayout = ({ pokemons, errors, isLoading }) => {

   return (
      <>
         <Title title="Data Fetching" />

         {isLoading ? <p className={styles.loading}>Loading ...</p> :

            <div className={styles.wrapper}>
               {pokemons.map(({ name, url }) => {
                  return (
                     <div className={styles.pokemonInfo} key={name}>
                        <p>{name} </p>
                        <a href={url} target="_blank" rel="noreferrer">{url}</a>
                     </div>
                  )
               })}
            </div>
         }

         {errors && <p className={styles.errors}>{errors}</p>}
      </>
   );
};