/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import NavbarStyle from "./Navbar.styled";
// Import Link dari React Router
import { Link } from "react-router-dom";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <NavbarStyle>
    <div>
      <nav>
        <div>
          <h1>Movie App</h1>
        </div>
        <div>
          {/*
           * Membuat Link/Navigasi.
           * Menggunakan Link Component dari React Router
           */}
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movie/create">
                Add Movie
              </Link>
            </li>
            <li>
              <Link to="/movie/popular">
                Popular
              </Link>
            </li>
            <li>
              <Link to="/movie/now">
                Now Playing
              </Link>
            </li>
            <li>
              <Link to="/movie/top">
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </NavbarStyle>
  );
}

export default Navbar;
