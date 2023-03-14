function fetchingData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      displayUser(data);
    });
}

fetchingData();

const handleDelete = (id) => {
  const userDiv = document.getElementById(id);
  userDiv.remove();
};

function displayUser(users) {
  if (users.length > 0) {
    const userDisplayDiv = document.getElementById("user_list_container");
    users.map((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `
      <div id='${user.id}' class="card w-96 my-4 mx-auto shadow-md bg-white rounded-lg p-5 ">
      <div class="m-3">
        <h2 class="text-lg mb-2">Name: ${user.name}</h2>
        <p
          class="text-md text-gray-700 hover:text-gray-900 transition-all duration-200 mb-2"
        >
          Email: ${user.email}
        </p>
        <p
          class="text-md text-gray-700 hover:text-gray-900 transition-all duration-200"
        >
        Address: ${user.address.city}
        </p>
        <button onClick={handleDelete(${user.id})}
          class="bg-red-400 text-white rounded px-3 py-1 hover:bg-red-300 mt-3"
        >
          Delete
        </button>
      </div>
    </div>`;
      userDisplayDiv.appendChild(userDiv);
    });
  }
}
