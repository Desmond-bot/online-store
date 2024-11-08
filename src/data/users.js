const storedUsers = localStorage.getItem("users");
const users = storedUsers
  ? JSON.parse(storedUsers)
  : [
      { username: "user1", password: "password1" },
      { username: "user2", password: "password2" },
    ];

export default users;
