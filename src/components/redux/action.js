function addUser(post) {
    return {
        type: "ADD_USER",
        payload: { text: post.text, id: post.id }
    }
}

function getUser(data) {
    return {
        type: "GET_USER",
        payload: data
    }
}

export { addUser, getUser }