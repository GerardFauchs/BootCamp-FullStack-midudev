export const Note = (props) => {
  console.log({ props });

  const { id, content, date, important, categories = [] } = props;

  return (
    <article>
      <h3>Note {id}</h3>
      <p>{content}</p>
      <p>
        <small>
          <time>{date}</time>
        </small>
      </p>
      {important ? "Importante" : "NO Importante"}
      <h4>
        {categories.map((categoria) => {
          return <small key={categoria}>{categoria} </small>;
        })}
      </h4>
      <hr />
    </article>
  );
};
