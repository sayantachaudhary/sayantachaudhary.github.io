---
title: "How React Actually Works?"
description: "Aim to demystify React's inner workings."
image: "/blog/assets/.png"
tags: ["frontend", "development", "javascript"]
date: "2026-01-16"
isPublished: true
---

After you complete this article, you will have a solid understanding of:

- How JSX is converted to JavaScript
- The purpose and structure of React Elements
- What rendering means in React
- When components re-render and why
- What is Virtual DOM and Fiber Tree
- How the Virtual DOM and Fiber Tree optimize performance
- How diffing algorithm works
- The reconciliation process that makes React efficient
- How React Works Behind the Scenes

If you've worked with ReactJS, you've probably heard the words “render” and “re-render” a million times. But have you ever stopped to think about what they actually mean? How does React work behind the scenes? How does it decide when to update the UI and when to stay put? In this post, we’ll dive into the inner workings of React, break down its optimization tricks, and see what really happens under the hood. Let's get into it!

When you write React code, you probably write JSX. JSX stands for JavaScript XML. It is a syntax extension introduced by ReactJS. Our web applications run on the browser—they run on the V8 Engine if you use Google Chrome, for example—and browsers don't know what JSX is. They only understand JavaScript. So our JSX code needs to be converted to JavaScript first, and for React, Babel handles this process.

## How Does Babel Convert JSX to JavaScript?

Babel takes the JSX and convert it to the `React.createElement()` function. This function returns a JavaScript object called a `React Element`.

Don't get confused too soon! Don't worry, we'll go through all of this throughout this blog and you'll have a solid understanding of these concepts.

Our main goal is always to get a `React Element` from JSX. We could skip writing JSX in our codebase and write a bunch of `React.createElement()` function calls. That would work with no problem. Or you can just write JSX—which is much easier—and let Babel convert your code into `React Elements`.

## What is React.createElement()?

Okay, so now we know we have to call `React.createElement()` to create our `React Element`. But what does this function actually do? How does it look? Why is it essential in our React apps?

`React.createElement()` is the fundamental function used by React to create React Elements. JSX is just syntactic sugar for this function call.

For example, if you write this JSX:

```html
<h1>DeepIntoDev</h1>
```

It is internally converted to:

```jsx
React.createElement("h1", null, "DeepIntoDev");
```

Syntax of React.createElement()

```jsx
React.createElement(type, props, ...children);
```

type (element or component):

- If it's a element, it represents a standard HTML tag (h1, p, div...)
- If it's a function or class, it represents a React component.

props (object):

- Attributes like className, id, onClick, etc.
- null means there are no attributes.

...children (optional):

- Content inside the element (text, other elements, or components)

Now, let's start with basic examples, then we will explore more complex scenarios.

JSX:

```jsx
<h1 className="text-3xl">Deep Into Dev</h1>
```

Converted to:

```jsx
React.createElement("h1", { className: "text-3xl" }, "Deep Into Dev");
```

JSX:

```html
<div>
  <h3 className="text-3xl">Deep Into Dev</h3>
  <span>Deep into React</span>
</div>
```

Pending...
