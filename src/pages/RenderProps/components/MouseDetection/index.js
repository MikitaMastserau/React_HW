import { useState } from "react";

import styles from "./styles.module.scss"

export const MouseDetection = ({ renderProp }) => {
   const [coordinates, setCoordinates] = useState({ clientX: 0, clientY: 0 });

   const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCoordinates({ clientX, clientY });
   };

   return (
      <div className={styles.wrapper} onMouseMove={handleMouseMove}>
         {renderProp({ clientX: coordinates.clientX, clientY: coordinates.clientY })}
      </div>
   );
};