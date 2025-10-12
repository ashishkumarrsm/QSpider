const api = "https://api.github.com/users";
const root = document.getElementById("root");

let fetchApiData = async (api) => {
  let apiResponsce = await fetch(api);

  let data = apiResponsce.json();
  console.log(data);
  return data;
};
fetchApiData(api).then((res) => {
  res.forEach((element) => {
    console.log(element);
    root.innerHTML += `
    <p style="color: red;">this is the data of that api ${element.login}</p>
    <p>this is the data of that api ${element.id}</p>
    `;
  });
});
