export async function load({ params }) {
  const articleResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const article = await articleResponse.json();

  return {
    article,
  };
}
