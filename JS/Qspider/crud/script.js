let users = [];
let editId = null;

// Get form and table elements
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const tableBody = document.getElementById("userTableBody");

// Function to render all users in the table
function renderUsers() {
  tableBody.innerHTML = "";
  users.forEach((user, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>
          <button class="edit-btn" onclick="editUser(${index})">Edit</button>
          <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// CREATE or UPDATE
userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (name === "" || age === "") {
    alert("Please fill out all fields!");
    return;
  }

  if (editId === null) {
    // CREATE
    users.push({ name, age });
  } else {
    // UPDATE
    users[editId] = { name, age };
    editId = null;
    userForm.querySelector("button").textContent = "Add User";
  }

  nameInput.value = "";
  ageInput.value = "";
  renderUsers();
});

// READ - called initially
renderUsers();

// UPDATE - fill form with data
function editUser(index) {
  nameInput.value = users[index].name;
  ageInput.value = users[index].age;
  editId = index;
  userForm.querySelector("button").textContent = "Update User";
}

// DELETE
function deleteUser(index) {
  if (confirm("Are you sure you want to delete this user?")) {
    users.splice(index, 1);
    renderUsers();
  }
}

