import styles from './AddMovieForm.module.css';
const AddMovieForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.add_movie}>
                <div className={styles.add_movie_kiri}>
                    <img
                        className={styles.add_movie_image}
                        src="https://picsum.photos/536/354"
                        alt="placeholder"
                    />
                </div>
                <div className={styles.add_movie_kanan}>
                    <h2 className={styles.add_movie_form_header}>Add Movie</h2>
                    <form className={styles.add_movie_form_content}>
                        <label htmlFor='title' className={styles.add_movie_form_label}>Title</label>
                        <input type='text' id='title' className={styles.add_movie_form_input} />

                        <label htmlFor='year' className={styles.add_movie_form_label}>Year</label>
                        <input type='text' id='year' className={styles.add_movie_form_input} />

                        <button className={styles.add_movie_form_btn}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddMovieForm;