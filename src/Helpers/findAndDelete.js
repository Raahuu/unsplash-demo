const findAndDelete = (id, state) => {
  return state.filter((item) => item.id !== id);
};

export default findAndDelete;
