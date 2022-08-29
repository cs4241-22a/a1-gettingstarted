Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Glitch
===

*DUE: Monday, August 30th by 11:59 AM (before the start of class!)*  

This assignment is a "warm-up" exercise. 
You will simply deploy the starting Web site that you will use this term to [Glitch](http://www.glitch.com/). 

Treat this assignment as a chance to get up to speed on Git, GitHub, and Glitch. 
If you already know these, great! 
However, if you're new to them, spend several hours practicing, experimenting, and reading documentation. Don't just get your website up and done, as
you'll need skills with these tools throughout the rest of the course.

Assignment details
---

This assignment requires that your website is both contained in a GitHub repository and hosted in Glitch. There are two ways to do this:

1. Fork this repo and clone it to your computer, make changes locally on your computer, push the repo onto GitHub, and then import your GitHub repo into Glitch.
2. Fork this repo and then import it directly to Glitch, use the Glitch editor to make changes, and then export your repo from Glitch back to GitHub.
3. Same as #1, but instead of importing from Github to Glitch you just upload the files (or copy/paste) them directly to Glitch.

## Option 1 - Clone to computer, push to Github, import to Glitch (recommended)

1. Fork the starting project code in GitHub. This repo contains:
    * the server code, `server.js`
    * A starting `index.html` file that you will edit as described below
    * A package.json file that helps configure Glitch
    * This README
2. Edit `index.html` to show the following information about you:
    * your name and class at WPI (e.g. class of 2020) Note: Do not put any contact or personal information that you do not potentially want other people outside of this class to see.
    * your major(s) and minor(s)
    * previous computer science courses that you have taken at WPI
    * your experience with the following technologies and methods (none, some, a lot)
        * HTML
        * CSS
        * Java
        * JavaScript
        * Ruby
        * Python
        * unit testing
4. Complete some technical and/or design achievements (see below).
5. Test your project to make sure that when someone goes to your main page, it displays correctly. You can do this locally by simply running `node server.js` from within the assignment directory.

6. Modify the README file according to the specification below.
7. Commit and push all your changes to GitHub. 
8. Deploy your project to Glitch. You can do this by [importing the repo from GitHub](https://medium.com/glitch/import-code-from-anywhere-83fb60ea4875)
9. Ensure that your project has the proper naming scheme (guide follows) so we can find it.
9. Create and submit a Pull Request to the original repo.

## Option 2 - Fork repo and import to Glitch, edit on Glitch, and then export back to GitHub
Most of these steps are the same as option 1, except that you being by creating a new project Glitch using this repo as a staring point (just choose New Project > Import from GitHub for this and then paste in the link to your repo). At the end, you can export your Glitch project to GitHub by [following these instructions](https://www.youtube.com/watch?time_continue=77&v=aWJFbtrgW4E&feature=emb_logo). *Note that the location of the projecct export feature in Glitch has moved from what they show in this video.* It's now located in Tools > Import and Export (tools is located in the bottom left of the Glitch editor).

## Option 3 - Clone to computer, edit locally, push to GitHub, upload to Glitch
This is the same as option 1, except that for step 6 (Deploy to Glitch) you simply upload each file to your Glitch repository (using New File > Upload a File).

Naming and URL Scheme
---

You must use a consistent naming scheme for all projects in this course.
If we can't find it, we can't grade it.

By default Glitch often assigns your application a random name. To change it, click on the project dropdown menu in the upper left corner of Glitch. You will then see an additional text field displaying the project name in the resulting menu; click here to edit the name.

The name scheme should be `a1-yourGitHubUsername`.
The `a1` will need to be updated to `a2`, `a3`, and so on in future projects.

Achievements
---
Below are some suggested technical and design achievements. You can use these to help boost your grade up to an A and customize the assignment to your personal interests. These are recommended acheivements, but feel free to create/implement your own... just make sure you thoroughly describe what you did in your README and why it was challenging. ALL ACHIEVEMENTS MUST BE DESCRIBED IN YOUR README IN ORDER TO GET CREDIT FOR THEM.

*Technical*
1. (max 5 points) Style your page using CSS. Each style rule you apply will get you 1 extra point for a maximum of 5 points. Be sure to describe your style rules in your README.
2. (5 points) Add a simple JavaScript animation to the page.
3. (max 5 points) Experiment with other HTML tags (links, images, tables etc.) Each extra tag you use will get you 1 extra point for a maximum of 5 points. Be sure to describe the links you use in your README.

*Design*
1. (10 points) Create a color palette using [color.adobe.com](https://color.adobe.com). Use all the colors in the palette in your webpage by implementing the appropriate CSS. Add a small screenshot of the color wheel for your color palette to your repo.
2. (5 points) Use a font from [Goolge Fonts](https://fonts.google.com) in your website.

Resources
---

If you need a JavaScript/HTML/CSS refresher, see [HTML & CSS](https://wpi.primo.exlibrisgroup.com/discovery/fulldisplay?docid=alma9936730811904746&context=L&vid=01WPI_INST:Default&lang=en&search_scope=MyInst_and_CI&adaptor=Local%20Search%20Engine&tab=Everything&query=any,contains,Jon%20Duckett&offset=0) and/or [JavaScript Codeacademy](https://www.codecademy.com/en/tracks/javascript).

If you need a Git/GitHub refreseher, see [GitHub Bootcamp](https://help.github.com/categories/bootcamp/), the [GitHub Guides](https://guides.github.com/) (especially the ones on Hello World, and Understanding the GitHub Flow, and Forking Projects), and [CodeSchool's Try Git Course](https://www.codeschool.com/courses/try-git).

Submission Details
---

Joseph Dobbelaar
https://a1-r2pen2.glitch.me/

This project shows ...

## Technical Achievements
- **Styled page with CSS**: Added rules for ul, body, root, li, h1, a, and some custom div classes. There are also some style rules for selectors inside certain classes. These style rules all either have to do with the home menu animation (transitions and before/after data), general appearance (text color, background images, etc.), or for page formatting (flexboxes, alignment, etc.).
- **JavaScript Animation**: I made an animation for menu items where the text is cut by a sword before being dragged off to show a new page! There are several pieces to this. First, the sword moves to whichever link is was last hovered. This is done by setting the hoveredElement to whatever the mouse last touched and then adding a position class to the sword based on which element is hovered. The movement is handled in CSS with translations and transitions. Then, when a link is clicked, the sword and the clicked link are given the "cut" class. The sword is then thrown to the right, and the link's "before" and "after" properties (which were previously aligned to look like they are a single piece) are translated to the right and vertically away from each other. The whole app-container div then translates to the left 100vw, shifting the view from the home menu to the "content-page". During this transition, text is loaded into the HTML tags on the content page based on which link was clicked. The back arrow on the content page translates the app-container back to it's home position. 
- **Other HTML Tags**: Other HTML tags used were images (for the sword and the back button) and audio for background music, the sword moving sounds, the back button click, and the cut sound effect.
### Design Achievements
- **Google Font**: Implemented the [BebasNeue-Regular](https://fonts.google.com/specimen/Bebas+Neue#styles) font from Google Fonts. I used this everywhere except for the p tags on the second page becuase I didn't want them to be uppercase. I felt that BebasNeue was blocky enough and bold enough to get the user's attention on a menu without feeling overwhelming when scaled up really large.
- **Color Pallete**: Created an analogous color pallete with [color.adobe.com](https://color.adobe.com). Screenshot is in the "submission" directory. This color pallete is used alongside the colors white and black on the whole site. The background, which used the adobe color pallete, was created using [Haikei](https://app.haikei.app/)— a web app for generating curvy, multicolored SVG images. I generated a set of waves that I liked using the "layered waves" tool, brought it into photoshop, and replaced the colors with the ones from adobe. There are actually two background images that use this style, one with the waves on the left and one with the waves on the right. I hadn't initially planned for the pages to scroll horizontally, so "otherPageBackground.png" was an afterthought that I strung together when I wanted to add some more interactivity.

## EDIT: Even more technical stuff
- **Sound Engine**: I just spent a few hours making a sound engine and a music page for this site. The website has a choice of 8 different songs that can be selected by clicking on the music note in the bottom left of the home menu. The menu items also play different tones depending on the song and where in the song we are (since some songs have a key change. Metallica, for example, does this early on.) This was a bit of a coding challenge, but mostly just an organizational stretch because of how many static files are now involved in this little website. There's a new background, images for each band, songs for each band, and sounds for each possible note. Songs were just downloaded from youtube and notes were generated in GuitarPro7, which is a guitar tablature program I own. I decided to add a music page to my site because originally there was a page talking about the music I like, but I thought that was way too boring for something I care so much about. I figured making the menu something where you could (kinda) play along with some music I love would be a cool little trick.
- **CSS Keyframes**: Some CSS keyframe animations were added to make it clear which band is playing at a given time. I have very little experiece keyframing in CSS, so they're just a basic wobble animation.

Edit 8/29 @ 11:47am:
Glitch upload was having trouble with assets. All Glitch uploaded assets were not showing up, even in the Glitch editor. Files on the Glitch deployment are hosted in my Google drive. I'll fix this as soon as I can.
