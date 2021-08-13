const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];

/* SignUp if user does'nt have an Account*/
// const newUser = {
//   _id: "fhderc",
//   username: "jack",
//   email: "jack@jack.com",
//   password: "124333",
//   createdAt: "17/05/2019 10:00 AM",
//   isLoggedIn: false,
// };

// function SignUp(users, data) {
//   const found = users.some(
//     (el) => el.username === data.username && el._id === data._id
//   );
//   if (!found) {
//     // users.push(data);
//     // return users;
//     console.log("Signup successfully");
//   } else {
//     console.log("You have already an account");
//   }
// }
// SignUp(users, newUser);

/* SignIn if user have an Account*/
// const email = "thomas@thomas.com";
// const password = 123333;

function SignIn(data, email, password) {
  const found = data.find((user) =>
    email === user.email && password === user.password ? true : false
  );

  if (!found) {
    console.log("your Credential is not found so please SignUp");
  } else {
    found.isLoggedIn
      ? console.log("You are already Login")
      : console.log("User LoggeIn successfully");
  }
}

SignIn(users, "thomas@thomas.com", "123333");
