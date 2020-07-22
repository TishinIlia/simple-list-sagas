export const getList = () =>
  fetch(`https://api.jsonbin.io/b/5f179697918061662846684b/1`).then(response =>
    response.json()
  );
