// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 */
function Home(props) {
  /**
   * Mengangkat stave movies: lifting state.
   * Dari Component Movies ke Component Home.
   * Agar bisa digunakan oleh Component yang lain.
   */
  const { movies, setMovies } = props;
  const title = "Latest Movie";
  return (
    <>
      <Hero />
      {/* Mengirim props: state movies */}
      <Movies movies={movies} setMovies={setMovies} titles={title} />
    </>
  );
}

export default Home;
