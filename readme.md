# Handlebars Resume Builder

<hr>

### What does this do?

Making a resume sucks. If you have repeating elements, and you want to position them _just right_, using Microsoft Word is a really good way to give yourself stress nightmares. You know what I like using to style things? CSS.

Oh, and you know how I like to store objects? JavaScript.

So this little handy tool lets you input your work history -- plus education, projects, skills, whatever you want, really -- into a javascript file, make a handlebars template to output the results, and style the whole thing with CSS. Neat, right?

Of course, it's only useful if you prefer javascript, handlebars, and CSS to a word processor. If you're sitting here like, "great! what's handlebars?" this might not be the tool for you. (If I tell you "It's a javascript-based templating system" and you say, "Oh, yes, one of those, I know what those are like," then you can stick around.)

Basically, if you've ever thought, 'I wish I could use web technologies to create a paper document', read on.

### How do I use it?

This project uses Grunt and Sass and Handlebars.

First, run:
```
npm install
```

Then run:
```
grunt
```

Then, open your browser to localhost:8000/dest. I'm using the livereload browser extension to deal with that, but if your'e not, there's a little script tag you can include at the bottom of the html instead.

Then, edit the files in the src/ directory! Put in your information, edit the template, do whatever you want. 

*Note:* The grey box shows how big an 8.5x11 inch piece of paper is. If you overflow that box, you're gonna have a bad time. 

If you're done and the resume looks the way you want it to, go into your browser and hit "Print". Then, fiddle with the options as you see fit (pro tip: select *Margins: None* on chrome) and select "Save to PDF". Now you have a PDF of your resume! This also preserves any hyperlinks, if you're into that kind of thing.

Congratulations! You now have a cool new resume!

<hr>

### Q: Can I help?

Please do! I made this for myself and decided to put it up here as a bit of an afterthought, so feel free to contribute, or just tell me I'm bad at my hobbies, because that's cool too and a great way to make friends.

### Q: Why doesn't it work?

See above -- I haven't done much (read: any) testing on this outside of my personal use of it. #dogfood. So if you have an issue, let me know!

### Q: Is it responsive?

A: No. It is for one screen, and that screen is a simulation of an 8.5x11 inch piece of paper. If you want to make a resume for web-viewing, you're barking up the wrong tree.
