// const users = [
//   {
//     id: 1,
//     pseudo: "bouba",
//     password: "monpetitourson",
//   },
//   {
//     id: 2,
//     pseudo: "candy",
//     password: "aupaysdecandy",
//   },
//   {
//     pseudo: "casimir",
//     password: "l'ileauxenfants",
//   },
// ];

// export function getUserById(id){
//     return users.find((user)=>user.id ===id)
// }
// export function getUser(pseudo, password) {
//   return users.find(
//     (user) => user.pseudo === pseudo && user.password === password
//   );
// }
const baseApi = new URL("http://localhost:3000");

export async function getUserById(id) {
  return await fetch(new URL(`/users/${id}`, baseApi)).then((response) =>
    response.json()
  );
}

export async function getUserLogin(pseudo, password) {
  return await fetch(new URL("/login", baseApi), {
    method: "post",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      pseudo,
      password,
    }),
  }).then((response) => response.json());
}

export async function getUserByToken(token) {
  return await fetch(new URL("/users/current", baseApi), {
    headers: {
      authorization: token,
    },
  }).then((response) => response.json());
}

export async function postUser(username, email, password){
  return await fetch(new URL("/users", baseApi), {
    method:"post",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  }).then((response)=> response.json());

}
