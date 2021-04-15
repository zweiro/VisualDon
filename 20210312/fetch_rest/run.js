const R = require('ramda')
const fetch = require('node-fetch')

const URL_USERS = 'https://jsonplaceholder.typicode.com/users'
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts'

const get = url => fetch(url).then(r => r.json())

const reducer = (r, d) => {
    const userId = d.userId
    const prev = r[userId] || []
    return {
        ...r,
        [userId]: [...prev, d.title]
    }
}

Promise.all([get(URL_USERS), get(URL_POSTS)]).then(([users, posts]) => {
    const user = posts.reduce(reducer, {})

    console.log(users.map(d => ({
        nom_utilisateur: d.username,
        ville: d.address.city,
        nom_compagnie: d.company.name,
        titres_posts: user[d.id]
    })))
})