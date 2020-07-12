const signupUser = (userList, newUser) => {
  let flag = 0;
  userList.forEach((user) => {
    if (user.username === newUser.username) {
      flag = 1;
    }
  });
  if (!flag) {
    let tempUserList = JSON.parse(JSON.stringify(userList));
    tempUserList.push({
      username: newUser.username,
      password: newUser.password,
    });
    return { users: tempUserList, status: "Success" };
  }
  return { error: "User already exists" };
};

export default signupUser;
