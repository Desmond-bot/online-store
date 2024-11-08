import users from "../data/users";

export const validateUser = (username, password) => {
  return users.some(
    (user) => user.username === username && user.password === password
  );
};

export const addUser = (newUser) => {
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
};