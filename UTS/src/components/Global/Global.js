import Box from "../Box/Box";
import styles from "./Global.module.css";

function Global(props) {
  const { globaldata } = props;
  return (
    <div>
      <div className={styles.container}>
        <section className={styles.global}>
          <h2 className={styles.global__title}>Indonesia</h2>
          <h2 className={styles.global__subtitle}>Data Covid Berdasarkan Global</h2>
          <div className={styles.box__container}>
            {globaldata.map((data) => {
              return <Box key={data.status} data={data} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Global;