import styles from "./styles.module.scss";
import headingStyles from "../../../../components/HeadingStyles/styles.module.scss";

export const CondRenderLayout = ({ handleClick, isActive }) => {
   return (
      <div>
         <h1 className={headingStyles.heading}>conditional rendering</h1>
         <div className={styles.wrapper}>
            <div className={styles.display} style={{ backgroundColor: isActive ? "cornflowerblue" : "cadetblue" }}>{isActive && "H e l l o !"}</div>
            <button className={styles.btn} onClick={handleClick} isActive={isActive}>{isActive ? "OFF" : "ON"}</button>
         </div>
      </div>
   );
};