// Functional Programming: Understand the Hazards of Using Imperative Code

/*
1. Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. 
2. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

3. In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

4. JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. 

5. For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array.

*/

// tabs is an array of titles of each site open within the window
var Window = function (tabs) {
	this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
	this.tabs = this.tabs.concat(otherWindow.tabs);
	return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
	this.tabs.push("new tab"); // Let's open a new tab for now
	return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
	// Only change code below this line

	var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
	var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

	this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

	// Only change code above this line

	return this;
};

// Let's create three browser windows
var workWindow = new Window([
	"GMail",
	"Inbox",
	"Work mail",
	"Docs",
	"freeCodeCamp",
]); // Your mailbox, drive, and other work sites
var socialWindow = new Window(["FB", "Gitter", "Reddit", "Twitter", "Medium"]); // Social sites
var videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
	.tabOpen() // Open a new tab for cat memes
	.join(videoWindow.tabClose(2)) // Close third tab in video window, and join
	.join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

const arr = [
	"FB",
	"Gitter",
	"Reddit",
	"Twitter",
	"Medium",
	"new tab",
	"Netflix",
	"YouTube",
	"Vine",
	"GMail",
	"Work mail",
	"Docs",
	"freeCodeCamp",
	"new tab",
];

console.log(arr);
