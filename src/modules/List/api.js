export const getList = form =>
  fetch(`https://api.jsonbin.io/b/5b97f370db948c68635f6dbc`).then(response =>
    response.json()
  );
