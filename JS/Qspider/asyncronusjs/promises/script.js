const promise = new Promise((res, rej) => {
  setTimeout(() => {
    if (10 < 20) {
      res("succes");
    } else {
      rej("fail");
    }
  }, 2000);
});

console.log(promise);

const data = fetch("https://api.github.com/users")
  .then((data) =>
    data
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  )
  .catch((err) => {
    console.log(err);
  });


  console.log(data)



  fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((users) => {
    // users is the array of user objects
    users.forEach((user) => {
      console.log(user.login); // Print usernames one by one
    });

    // Example: Collect all usernames in an array
    const usernames = users.map((user) => user.login);
    console.log(usernames);
  })
  .catch((err) => {
    console.log(err);
  });
