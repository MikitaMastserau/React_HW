import styles from './styles.module.scss';

export const SubTitle = ({ title, color }) => {
   return (
      <h2 className={styles.title} style={{ color: `${color}` }}> {title}</h2 >
   );
};