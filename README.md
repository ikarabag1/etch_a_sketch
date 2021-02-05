# Part 1: Etch-a-sketch
### Recap
- selecting DOM elements with query selectors
- attaching events to DOM elements with `addEventListener`
- looping

### Instructions
We're going to build a virtual etch-a-sketch in the browser! Explore the existing html, css, and js code in the etch_a_sketch directory.

![Final product](assets/sketch-finished-product.gif)

You will primarily be adding code to index.js, but if you think something you need is missing from index.html or style.css, you can add it.

### Step 1: making 1 pixel work

![Just One Pixel](assets/one-pixel.gif)

Note that there's already 1 pixel in the screen div. It's already styled to look like a pixel. Eventually, we will fill the screen up with pixels, but first, we should make just this 1 pixel function correctly. Our goal is to make this pixel turn black when the mouse hovers over it.
- Tools you already have that will help: `addEventListener`, `<anyDomElement>.classList.add`
- Tools you will have to research: the `mouseenter` event
- Tip: check out the `.colored-in` class in the style.css

### Step 2: filling the screen with pixels
We want a bunch of tiny little pixels that behave just like our original. Let's fill the grey screen div up with them. It is totally ok if they do not fill the space perfectly, or if there are any awkward little gaps of grey. A hard-coded guesstimate of how many pixels should fit in the box is fine!
- Tools: `for` loops, `document.createElement`, `<anyDomElement>.classList.add`, `<anyDomElement>.append`

### Step 3: making all the pixels function like our original
Let's replicate the behavior of our original pixel for the entire bunch. Warning: if you find yourself writing several thousand `addEventListener`s, you are doing it wrong!
- Tools: everything from Step 1, using the `event` parameter and `event.target` inside your callback function, `document.querySelectorAll`

### Step 4: the clear screen button
Attach a click listener to the Clear Screen button. When clicked, this button should reset all the pixels to white.
- Tools: `document.querySelectorAll`, `<anyDomElement>.classList.remove`

### Step 5: celebrate your success! :cake: :tada: :gift:
Play with your new etch-a-sketch for 

# Part 2: Tabbed interface
![Finished Tabbed Interface](assets/tabs-finished-product.gif)

You are probably already familiar with tabbed interfaces from google chrome, or even VScode. Like the etch-a-sketch, start off by exploring the existing code in index.html, index.js, and style.css. Like the etch-a-sketch, you should mostly be adding code to index.js, but if you think something is missing from the other files you can add it.

### Step 1: just make a single tab work
Tab 1 begins as active. Let's start by just making Tab 2 functional, nothing more. Here are some steps to this process:
- Detect a click on Tab 2
- Deactivate the tab that's currently active
- Make tab 2 active
- Deactivate the content that's currently active
- Make content 2 active

### Step 2: making all the tabs work
To make all the tabs work, we have to extend the functionality to the other tabs. Should we do it manually (ie write out a separate event handler for each tab), or programatically(ie in a loop)?

The loop is definitely where we want to end up, but it's possible that doing it manually first will help you see the pattern, and it's a decent way to just get started if you feel stuck. So either way is ok, as long as we end at the loop implementation.

One brain-buster is: once we have identified a click on a tab, how do we figure out which content we need to activate?

### Step 3: test for edge cases
What should happen if you click on the tab that's already active? If you click on a tab that was previously active? Try to break your creation!