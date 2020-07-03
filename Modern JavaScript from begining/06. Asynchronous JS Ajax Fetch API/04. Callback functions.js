const post = [
	{ title: "post 1", body: "this is body for post 1" },
	{ title: "post 2", body: "this is body for post 2" },
	{ title: "post 3", body: "this is body for post 3" },
];

function createPost(newPost, callback) {
	setTimeout(function () {
		post.push(newPost);
		callback();
	}, 1000);
	return post;
}

function getPost() {
	setTimeout(function () {
		let output = document.querySelector("#output");
		let op = "";
		post.map((i) => {
			op += `<li>title:${i.title} body: ${i.body} </li>`;
		});
		output.innerHTML = op;
	}, 2000);
}

// We can pass in getPost method as an object then call it back just after the object is added
createPost({ title: "post 4", body: "this is body for post 4" }, getPost);

console.log(post);
