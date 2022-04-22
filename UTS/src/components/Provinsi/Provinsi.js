
import styles from "./Provinsi.module.css";

function Provinsi(props) {

  const { provinsidata, setprovinsidata } = props;

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.provinsi}>
          <h2 className={styles.provinsi__title}>Provinsi</h2>
          <h2 className={styles.provinsi__subtitle}>Data Covid Berdasarkan Provinsi</h2>
          <div className={styles.table__container}>
          <table className={styles.table} border="1px">
              <thead>
                  <th>No.</th>
                  <th>Kota</th>
                  <th>Kasus</th>
                  <th>Sembuh</th>
                  <th>Meninggal</th>
                  <th>Dirawat</th>
              </thead>
              <tbody>
                {
                    provinsidata.map((data, index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{data.kota}</td>
                                <td>{data.kasus}</td>
                                <td>{data.sembuh}</td>
                                <td>{data.meninggal}</td>
                                <td>{data.dirawat}</td>
                            </tr>
                        )
                    })
                }
              </tbody>
          </table>
          </div>
          
        </section>
      </div>
    </div>
  );
}

export default Provinsi;