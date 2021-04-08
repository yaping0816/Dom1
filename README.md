# DOM 1

Guided project for **DOM 1** Module.

In this project we will learn how to use a variety of DOM selectors and manipulate the DOM imperatively.

## Prerequisites

- Chrome
- Node

## Project Setup

- [ ] Clone this repository.
- [ ] Navigate into the project folder with your command line.
- [ ] Run `npm install` to download dependencies.
- [ ] Run `npm start` to compile and serve the project.
- [ ] Use Chrome to navigate to the URL indicated by the output of `npm start`.


<!-- what is a DOM -->

- DOM is an interface (a collection of buttons, levers, readouts) that your code can use to manipulate the page. Dom is a global variable which is on the windoW object.
- 
- D: when the broswer send request to server, the server will respond with like index.html, .css, .js, img, .woff, etc. index.html is the DOCUMENT that allow the broswer to show something

- O: between receiving the HTML file and displaying it on the webpage, the broswer converts the HTML elemtents into objects which are known as DOM nodes and all of them are contained in a big object(document object) which is DOM. Even if the document object is displayed in console in a mark-up sytax, it's actually an object, you can see the key and value pairs using console.dir(document), you can also use document.body to show the value of body in docuement

- M: DOM is a tree-like structure
  
- DOM is just a tree of nodes (or objects). Each node represents part of the browsers page that the viewers interact with. The DOM isn’t specific to Javascript or any other language. It’s just the structure that all browsers refer to and that constructs all web pages. The document object is essentially the DOM.

- The list of HTML elements(you can see this by console.log('document') in the console) that come up is quite literally the DOM. Being fluent with the document object and the browsers Elements tab is absolutely essential for any Javascript developer, but what some may not realize, is that when you’re working with these tools, you are directly working with your DOM.

- With DOM, you can change almost everything, except the stylesheets, your stylesheets is kind of like a different DOM

- DOM is dynamiclly chaning

<!-- DOM Selectors -->

- textContent: you can't set textContent or change style on a collection of elements, only used after one element

- querySelector v. querySelectorAll: 
- after a single element vs. a collection of elements
- querySelectorAll never give us a null, gine us empty list if cannot find it
- since querySelectorAll produce an array like-items, you need to use .forEach to style each elements in the collection, but it's not a real array
- with the querySelectot, you got an element or null (or the first match if several elements match the css select)

<!-- the document object -->
- when an HTML document loaded into a web broswer, it becomes a document object. The document object is the root node of the HTML document.

<!-- When to use DOM manipulation -->
Whenever you're building single-page application, meaning an app that feels like the desktop application. The old way is to use PHP and having the server give us fully fleshed out HTML has the downside that whenever you want to see something different, you need to navigate to different documents and that causes of an instant of reload, an instant of responsiveness and the page has to load, the thing about the DOM surgery is that its super fast compared to loading the enrire new document. DOM performed on the front end with the js allowing web applications to feel like destop programs.