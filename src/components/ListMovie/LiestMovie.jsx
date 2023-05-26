const ListMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <a href={id}>{title}</a>
        </li>
      ))}
    </ul>
  );
};

export default ListMovies;
