
// const jsonTrending = [
//     { id: 1, owner: 1, content: "Test" },
//     { id: 2, owner: 1, content: "Test2" },
//     { id: 3, owner: 1, content: "Test3" },
//   ];
//   const jsonNewest = [
//     { id: 15, owner: 1, content: "Test" },
//     { id: 14, owner: 1, content: "Test2" },
//     { id: 13, owner: 1, content: "Test3" },
//   ];
//   const jsonAllPosts = [...jsonTrending, ...jsonNewest]


const baseApi = new URL('http://localhost:3000')

export async function getPostById(id){
return await fetch(new URL(`/posts/${id}`, baseApi))
.then(response => response.json())

}

export async function getTrendingPost(){
return await fetch(new URL('/posts/trendings', baseApi))
.then(response => response.json())
}

export async function getNewestPost(){
return await fetch (new URL('/posts/newest', baseApi))
.then(response => response.json())
}