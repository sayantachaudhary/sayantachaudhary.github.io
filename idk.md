# Take responsibility

https://nosleepjavascript.com/stoic-developer/

- Reason from first principles rather than by analogy
  Boil things down to their most fundamental truths, and then reason up from there
  - Why does this thing exist?
  - What problems does this thing solve?
  - How does this thing actually work?
- Understand the material, Get an overall view, Visualize it
  Form associations, Pick out key ideas, Repeat and use
- You have to suffer first before you can truly appreciate like what other people have done for you
  because otherwise you just take it for granted — lydia hallie
- Learn the work from doing the work — B📞S
- ~What do i need to know to learn this~ What do i need to know to tech this 📌
- The 5 O'Clock Rule
- Know Gotchas/Pitfalls (Mistakes to Avoid)
- Technically Accurate
- Care how your tools work — mpj
- Actual fundamentals, then simplify it
- Fundamentals are always worth it
  - Browser APIs
  - React version of this, DOM version of this
- Depth much much much more important in learning than speed
- It's all about your users (always has been) https://youtu.be/xCr7KkZFFA4?si=pQ-8L3VPXSX_CguW
- Find the content types that work for you
  Understand what works for you, and don't worry about what works for other ppl
- Resist dogma (keep an open mind, influencers are lying for click)
- Learn the thing to build the app, not build the app to learn the thing
- Absorb new information, build something using that knowledge, repeat

<!-- -------------------------------------------------------------------------------- -->

<!-- - Adding new notes -->
<!-- - Toggle importance -->
<!-- - Docker > Ship ASAP -->
<!--   End to End lifecycle of JWT -->

Notes:
One thing at a time
Ensure that everything still works
Get it working, and keep it working
Choose your tools wisely
Break the code on purpose
async/await simplifies making async calls
Browser can execute only JavaScript
console.log is for console

sayanta:Sv7MNJ99cWz8pvaE@cluster0.kkvr7dj.mongodb.net

---

React Fiber Reconciler
Reconciliation
Concurrent Rendering
https://youtu.be/0ympFIwQFJw?si=g6PAMJ900XxzDEFH

React Compiler vs swc
rollup

i want to know how react works what thing are build the react
i want from start to end using flow and using arrow

like first it's just javascript -> then -> -> then

i want to know where does
Fiber Reconciler falls and where other things and so on

JavaScript → React API → Element Tree → Fiber Reconciler → Scheduler → Renderer (DOM) → Browser

# REDUX

# HTML & CSS
golden rule always make design first
In the real world, it’s up to your web designer to supply you with these kinds of mockups.
Your job as a developer is to implement the individual layouts using media queries to separate out the various CSS rules that apply to each one.

the mockups for each layout

- it's always a good idea to have a mockup representing the exact page you want to
  build before you start coding it up, but this is particularly true for forms

tell me how do o manage element by adding name to the class in html, like how do i give name to the html elements
i see that some people gives two classname to the same elements what's that for,
tell me everything about how do i name my html to style, also how do i style bunch of elements using name class name, explain me from the first principal, why we do this in the first place

Why Multiple Class Names?

<!-- forms.md -->
<!-- grid.md -->
<!-- typography.md -->

- accessibility checklist for website
- 💡 Make script that if we put all contact then it will convert all the name to some other language for banty mummy
- Website for ashapuri society

dark mode
learn margin and padding
how to set margin padding spacing and all
how to set width and height, what is the best practice

6. ⭐ Layout Primitives (MOST IMPORTANT)
This is what people forget.
You need reusable spacing/layout helpers:
Stack (vertical layout)
.stack > * + * {
  margin-top: var(--space-4);
}


https://github.com/jensimmons/cssremedy/tree/master

what is the limitation of plain html css js that we need framworks
Do We Need JS Frameworks

# Deploy

SEO
- Minify CSS/JS before deploying
also tell me all the things i should do before prodcution 
that people do when using framworks but i want to do this in plain css js html

<meta name="description">
<meta property="og:title"> and og:image for social sharing
The two most commonly forgotten ones are meta description and aria-label on icon buttons. 
Your burger button = and theme button 🌙 both need aria-labels since they have no visible text.

tell me whe do use color: inherit or font: inhert ?

## Make Blog

Must-Have Elements on a Blog Listing Page (Homepage / Blog Feed)
This is the page where multiple blog posts are shown.
🧱 Basic Structure for Each Blog Card
🏷 Category / Tag
📰 Title (Heading – H2 or H3)
📅 Publish Date
✍️ Author Name
🖼 Featured Image
📝 Short Excerpt (2–4 lines)
🔘 Read More Button
💬 (Optional) Comment count
⏱ (Optional) Reading time (e.g., 5 min read)

Essential Elements
📰 Blog Title (H1)
✍️ Author name
📅 Publish date
🏷 Category
🏷 Tags
🖼 Featured image
📖 Full content (well formatted)
🔗 Social share buttons
📌 Related posts section
💬 Comment section
🧭 Breadcrumb navigation (Home > Category > Post)

make a system to make blog only using markdown
you write markdown then it will convert into html
how do i create resuable html css for blog website 
can i use mdx

- take blogs from fullstack open
- Add mongodb for likes

is there any website or resouces to see which aria-attribute i should use on which element or tag
like what kind of aria attirbute i should use on navbar and button and so one

search that things related to heading
that it created new line or something when we use
interneting is hard semantic

- overflow & overlay
- clamp() is prefered over media queries.
- background: currentColor;
- object-fit: contain;

that are the most important element of component 
that is used, or i should create so that i can use everywhere

i want to know that is any of the component liberary or css liberary
that gives pre-build navbar any of those uses js for navbar or they just use css

the tweaks, the gotchas
https://cssmasterclass.io/courses
ipsum quia dolor sit amet

upload in vercel
how to optimize image in html

<!-- <section id="about"> -->
<!--   <h2>About me</h2> -->
<!--   <!-- <p> --> -->
<!--   <!--   I'm a web developer who builds fast and functional websites with --> -->
<!--   <!--   clean code and a focus on simplicity and usability. --> -->
<!--   <!-- </p> --> -->
<!--   <p> -->
<!--     <!-- When i'm not coding or training models, you can find me exploring --> -->
<!--     <!-- the latest developments in the field of artificial intelligence. --> -->
<!--     <!-- i'm an Ai engineer with a year of experience in machine learning, --> -->
<!--     <!-- and software development. i specialize in developing Ai solutions --> -->
<!--     <!-- that bridge the gap between theoretical research and practical --> -->
<!--     <!-- applications. --> -->
<!--     <!-- Building products to solve problems. Specialized in building MVP's. --> -->
<!--   </p> -->
<!--   <!-- <ol> --> -->
<!--   <!--   <h4>Key points about me</h4> --> -->
<!--   <!--   <li>i like being honest with myself.</li> --> -->
<!--   <!--   <li>i hate captial i</li> --> -->
<!--   <!--   <li>i believe in good humor or no humor at all.</li> --> -->
<!--   <!-- </ol> --> -->
<!--   <p></p> -->
<!--   <div class="btn-group"> -->
<!--     <a href="#" class="btn btn-primary">Get in touch</a> -->
<!--     <a href="#" class="btn btn-outline">Resume</a> -->
<!--   </div> -->
<!-- </section> -->
