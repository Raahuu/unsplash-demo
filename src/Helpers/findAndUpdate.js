const findAndUpdate = (payload, state) => {
  const temporarystate = JSON.parse(JSON.stringify(state));
  state.forEach((item, index) => {
    if (item.id === payload.id) {
      temporarystate[index].id = payload.id;
      temporarystate[index].author = payload.author;
      temporarystate[index].description = payload.description;
      temporarystate[index].title = payload.title;
    }
  });
  return temporarystate;
};

export default findAndUpdate;
