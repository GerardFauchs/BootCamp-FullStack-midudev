export default function Note({ id, content, date }) {
  return (
    <article>
      <h3>{id}</h3>
      <p>{content}</p>
      <p>
        <small>
          <time>{date}</time>
        </small>
      </p>
      <hr />
    </article>
  );
}
