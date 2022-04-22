import styles from "./Box.module.css";

function Box(props) {
  const { data } = props;
  return (
    <div className={styles.box}>
      <h3 className={styles.box__title}>{data.status}</h3>
      <p className={styles.box__date}>{data.total}</p>
    </div>
  );
}

export default Box;