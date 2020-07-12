const loginUser = (userList, credentials) => {
  let flag = 0;
  userList.forEach((user) => {
    if (user.username === credentials.username) {
      if (user.password === credentials.password) {
        flag = 1;
      }
    }
  });
  if (flag) return "Correct";
  return "Incorrect";
};

export default loginUser;
