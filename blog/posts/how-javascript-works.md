---
title: "How JavaScript Works?"
description: "Understanding how JavaScript works behind the scenes."
image: "/blog/assets/.png"
tags: ["frontend", "development", "javascript"]
date: "2026-02-02"
isPublished: true
---

After you complete this article, you will have a solid understanding of:

- How JavaScript executes code in a single thread
- What the Call Stack is and how it manages execution
- How Web APIs help with asynchronous operations
- The difference between Task Queue and Microtask Queue
- How the Event Loop coordinates all these components

As we all know JavaScript runs on just one thread, so it can only do one thing at a time. But somehow it handles many things at once. How does that work? It's like trying to text friends, make coffee, and watch Instagram reels, all with just one hand. If you've ever asked yourself how JavaScript does so many things without freezing even though it's **single threaded**, you're not alone. So let's take a closer look at how this actually happens behind the scenes, and how the **JS engine** manages to pull off this kind of 'multi-tasking'.

Let's do it step by step. First of all, JavaScript is not a "compiled" language so it doesn't directly translate to machine code like C, C++, or Go. We have to take the JavaScript file as an input, and we have to put it in some kind of machine that can understand that file and "interprets" it to machine code. As you probably know, that's what "interpreted languages" means. There are some upsides and downsides of being an interpreted language, but I'm not going into so much detail here so we don't get lost.

Some kind of machine in this context will be **V8 Engine** which Google Chrome or NodeJS uses (there are some other engines that can do the same job too). So basically, V8 Engine is a runtime that can take a JavaScript file as input and turn it into something computers can understand.

But like we said at the beginning, it runs on one thread. Why is that though?

So, this engine has mainly 2 parts called **Heap**, and **Call Stack**.

Heap part is the memory area where objects and variables are stored. Reference types (objects, arrays, functions etc.) are also stored in the heap. So this part is mainly for storage. Not to get too confused, let's forget this part for right now and let's focus on why JavaScript runs only on one thread.

The **Call Stack**, on the other hand, is the part that manages the execution of our program, and it's also what makes JavaScript single-threaded. Let's walk through a code example, step by step.

Let's say we have the following code to run;

```javascript
console.log("First");
console.log("Second");
```

For the first console.log function, something called execution context is created(you can nevermind it for right now), pushed into the call stack, logged in the console then popped out from the call stack. For the second console.log it's the same story. A new execution context is created, pushed into the call stack, logged in the console and popped out from the call stack... Just like we said, everything happens one by one in the call stack. Single task at a time!

> Note: For functions, the execution context means that every time a function is called, a new environment is created to handle that specific call. This environment stores: the function's local variables, arguments passed to the function, the value of the this keyword (basically, what this keyword points to in that context), and a reference to its outer (parent) scope for closure access. So basically, each function call runs in its own little 'box' with its own data. And we call that box the **execution context** to make it sound a bit cooler.

But what if we don't just have simple console.logs, but some heavy operations going on? For example:

```javascript
function veryHeavyOperation() {
  for (let i = 0; i < 100_000_000_000; i++) {
    console.log(
      "there’s some heavy operation happening at the moment… can you be quiet?",
    );
  }
}
function veryImportantTask() {
  console.log("This is a very important console.log!");
}
veryHeavyOperation();
veryImportantTask();
```

Now, before our important task works, we have to wait for the call stack to be available. Because there's a really huge for loop, and it just doesn't finish. In the meantime, our program is completely frozen. The reason? like we said 100 times-sorry but I think I'll probably keep saying it...-, **javascript is single threaded**.

But this is not actually what we want. In real world applications, we often do network requests, handle files operations, we wait for user inputs, we wait for timers and so on... We definitely can't block our call stack for all these operations.

Pending...
