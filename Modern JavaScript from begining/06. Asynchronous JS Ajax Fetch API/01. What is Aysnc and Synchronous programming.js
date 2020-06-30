//* Synchronous code

/*
 * In this method we have to wait until the posts are fetched and do something with the post, Only after that done we can move on to the doTheNextThing function.
 
 * This is called blocking code. It's going to block the posts are fetched or loaded which slows the overall process.
 */

post = loadPostSync();
// Wait till posts are fetched
// do something with posts
doTheNextThing(); // Has to wait until posts to load

//* Async code

/*
 * Instead of pulling the posts out of a synchronous function we are passing in a callback function which is one method for handling async code.
 * This callback will run and fetch the post and allow us to do something with post
 
 * But in this case doTheNextThing function does not have to wait until the posts are fetched and loaded.
 
 * So the program is not blocked and it will keeps going even if it takes the time to post to be fetched. Its not going to stop doTheNextThing function from running. That's why its faster
 */

loadPostSync(function () {
	// Wait till posts are fetched
	// do something with posts
});

doTheNextThing(); // Doesn't have to wait until posts load

/*
* Ways to handle async code:
1. Callback
2. Promises
3. Async/await
*/
