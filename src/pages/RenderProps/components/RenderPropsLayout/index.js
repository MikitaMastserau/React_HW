import { Title } from "components/Title";
import { MouseDetection } from "../MouseDetection";

import dogImage from "static/images/dog.png";

import styles from "./styles.module.scss";

export const RenderPropsLayout = () => {
   return <>
      <Title title="Render Props" />
      <MouseDetection renderProp={({ clientX, clientY }) => (
         <>
            <p>X: {clientX}</p>
            <p>Y: {clientY}</p>
            <img className={styles.image} style={{ top: clientY, left: clientX }} src={dogImage} alt="dog" />
         </>
      )} />
   </>
};