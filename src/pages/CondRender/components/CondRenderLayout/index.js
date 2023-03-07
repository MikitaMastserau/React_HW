import { Title } from "components/Title";

import styles from "./styles.module.scss";

export const CondRenderLayout = ({ handleClick, isActive }) => {
   return (
      <>
         <Title title="Conditional Rendering" />
         <div className={styles.wrapper}>
            <div className={styles.display} style={{ backgroundColor: isActive ? "cornflowerblue" : "cadetblue" }}>{isActive && "H e l l o !"}</div>
            <button className={styles.btn} onClick={handleClick}>{isActive ? "OFF" : "ON"}</button>
         </div>
      </>
   );
};