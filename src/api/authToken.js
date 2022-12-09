export const setAuthToken = (user) => {
    // get jwt token
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user.email)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // set local storage jwt token
        localStorage.setItem("genius-car", data.token)
    })
}