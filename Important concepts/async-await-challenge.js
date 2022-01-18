function getUserAvatar() {
  fetch('/users')
    .then(res => res.json())
    .then(users => {
      for (let user of users) {
        fetch(`/users/${user.id}`)
          .then(res => res.json())
          .then(data => console.log(data))
      }
    })
}
