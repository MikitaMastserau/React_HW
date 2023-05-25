import { Title } from "components/Title";
import { SubTitle } from "components/SubTitle";
import { LoadingSpinner } from "components/LoadingSpinner";

import styles from "./styles.module.scss";

export const PokemonInfoLayout = ({ name, sprites, isLoading, errors }) => {

   return (
      <>
         <Title title="Pokemon Info" />

         {isLoading ? <LoadingSpinner /> :
            <>
               <SubTitle title={name} color={"orangered"} />

               <div className={styles.pokemonCard}>
                  <img src={sprites?.other["official-artwork"].front_default} />
               </div>
            </>
         }

         {errors && <p className={styles.errors}>{errors}</p>}
      </>
   );
};