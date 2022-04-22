import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./Form_Covid.module.css";

function FormCovid(props) {

  const { provinsidata, setprovinsidata } = props;

  const [jumlah, setJumlah] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [status, setStatus] = useState('');


  const [isstatusError, setisstatusError] = useState(false);
  const [isProvinsiError, setisProvinsiError] = useState(false);
  const [isJumlahError, setisJumlahError] = useState(false);

  function handleJumlah(e) {

    setJumlah(e.target.value);
  }


  function handleStatus(e) {
 
    setStatus(e.target.value);
  }

  function handleProvinsi(e) {
    setProvinsi(e.target.value);
  }


  function handleSubmit(e) {
    
e.preventDefault();


    if (provinsi === "") {
      setisProvinsiError(true);
    }
 
    else if (jumlah === "") {
      setisJumlahError(true);
    }

    else if(status === '') {
      setisstatusError(true);
    }

    else {
      const cariprovinsi = provinsidata.find((data)=>{
        return data.kota === provinsi
      })
      if (status==='positif') {
        cariprovinsi.kasus=jumlah
      }
      else if (status==='sembuh') {
      cariprovinsi.sembuh=jumlah
      }
      else if (status==='meninggal'){
      cariprovinsi.meninggal=jumlah
      }
      else if (status==='dirawat'){
      cariprovinsi.dirawat=jumlah
      }
      const databaru = provinsidata
      for (let i = 0; i < databaru.length; i++) {
        if (databaru[i].kota===provinsi) {
        databaru[i]=cariprovinsi
        }
      }

      setprovinsidata ([...databaru])
      
      setisJumlahError(false);
      setisstatusError(false);
      setisProvinsiError(false);

    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>
          <div className={styles.form__group}>
              <label htmlFor="provinsi" className={styles.form__label}>
                Provinsi
              </label>
              <select value={provinsi} id="provinsi" name="provinsi" className={styles.form__input} onChange={handleProvinsi}>
                {
                 provinsidata.map((data) => {
                  return (
                    <option value={data.kota} key={data.kota}>{data.kota}</option>
                  )
                 }) 
                }  
              </select>
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {isProvinsiError && <Alert>Pilihlah Provinsi</Alert>}
            </div>          


            <div className={styles.form__group}>
              <label htmlFor="status" className={styles.form__label}>
                Status
              </label>
              <select value={status} d="status" name="status" className={styles.form__input} onChange={handleStatus}>
                <option value='positif'>Positif</option>
                <option value='sembuh'>Sembuh</option> 
                <option value='meninggal'>Meninggal</option> 
                <option value='dirawat'>Dirawat</option>  
              </select>
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {isstatusError && <Alert>Pilihlah Status</Alert>}
            </div>          


            <div className={styles.form__group}>
              <label htmlFor="jumlah" className={styles.form__label}>
                Jumlah
              </label>
              <input
                id="jumlah"
                className={styles.form__input}
                type="text"
                name="jumlah"
                // Memberikan value input: title
                value={jumlah}
                // Memberikan event onChange
                onChange={handleJumlah}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isJumlahError && <Alert>Isi Tidak Boleh Kosong</Alert>}
            </div>

            <div>
              <button className={styles.form__button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default FormCovid;