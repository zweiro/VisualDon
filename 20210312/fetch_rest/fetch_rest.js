const fetch = require('node-fetch');
const R = require('ramda');

let  usersWithoutMessages = [];
const parseUsers = users => {
    let parsedUsers = [];
    users.forEach(user => {
        parsedUsers.push({
            nom_utilisateur: user.username,
            ville: user.address.city,
            nom_companie: user.company.name
        });
    });
    usersWithoutMessages = parsedUsers;
    console.log(usersWithoutMessages);
};

const parsePosts = posts => {
    let parsedPosts = [];
    posts.forEach(user => {
        let posts = 
        parsedUsers.push({
            id: posts.userId,
        });
    });
    usersWithoutMessages = parsedUsers;
    console.log(usersWithoutMessages);
    return 
};

const users = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => parseUsers(json));


const users = fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response_posts) => response_posts.json())
  .then((posts_json) => parsePosts(posts_json));