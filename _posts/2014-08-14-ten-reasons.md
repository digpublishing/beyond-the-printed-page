---
title: "10 Reasons Why You Should Be Thinking About HTML for Digital Publications"
author: Justin Putney
issue: 1
permalink: 10-reasons-why-you-should-be-thinking-about-HTML-for-digital-publications
---
## Advantages of Using HTML in Digital Publishing

HTML has many advantages over other publishing options currently available. Here are 10 reasons your should be thinking about HTML:

1. **Universal**---HTML is by far the most universally readable content format available (more so than even PDF). HTML is the language of the web, it is supported on all devices, and it’s not going away. This advantage is so important that I’ve expanded on it below.

2. **Inexpensive**---HTML is relatively inexpensive to produce and in many cases the cost of distribution is ZERO. 
3. **Multimedia and Interactivity**---The sky is the limit when it comes to content. Anything that a web developer can create can go into a publication. in5 already supports for the audio, video, interactivity, animation, and Folio Overlays available in Adobe InDesign without a lick of coding required.
4. **Design-driven Workflow**---The tools are still young, but a beautiful layout can be rendered in HTML from a visual tool.
5. **Simplicity**---Exporting HTML content is closer to a PDF export (i.e., a single-step process) than building a Folio. Once the content is HTML, it can be edited directly.
6. **Content Ownership**---A decent HTML workflow allows you to keep your content, rather than storing it in someone else’s pipeline. If you need to make an edit (e.g., update a copyright year), you can simply open the HTML file in a text editor.
7. **Easy to Extend**---Since the web is built on HTML, it’s easy to find new bits of functionality that can be included in a publication: YouTube videos, Google Analytics, ads, etc.
8. **Smaller File Size**---A format like the Folio used in DPS takes screen captures of every page, in addition to creating images for overlays, which creates a very large download. Conversely, HTML is a more direct translation of the digital assets.
9. **Progressive Loading**---HTML makes it easy to load content as it is viewed, rather than waiting to download everything upfront.
10. **Selectable Text and Accessibility**---HTML allows for selectable text, and even when text is rendered as image, alternate text can be provided for screen readers.

html5 publication
A digital publication with live text and interactivity that is rendered with HTML.

## What is HTML?
HTML is a tagged-text file format. An HTML file typically  contains only text, but it has the ability to reference images and multimedia, as well as Cascading Style Sheets (CSS) for layout and JavaScript for interactive functionality. The newest version of this format is HTML5.

I’ll be the first to admit that there’s a lot of hype surrounding HTML5, which is not actually a radical departure from HTML4. If you’ve used HTML at any point in the past, much of what you’ll see under the hood will be familiar. There are still the same old familiar `<body>`, `<p>`, and `<span>` tags.

HTML5 introduces support for a few new tags, several of which are useful for digital publications.

## HTML5 Features for Publishers

Among the improvements in HTML5, the following are of particular use for publications:

- **Native Multimedia**---the new `<audio>` and `<video>` tags allow for more multimedia possibilities in native HTML (this was once only possible with plugins).
- **Font Embedding**---while HTML text is not nearly as sophisticated as PDF text, the ability to embed fonts and control more aspects of text rendering has made HTML a viable format for beautiful type.
- **Offline Storage**---content from a web site or Web App can now be cached so that it can be viewed on a mobile device which is no longer connected to the internet.
- **Viewport and Zoom Control**---content can be scaled to the size of the reader’s screen. The user can also adjust the zoom of the content, if desired.  

These new features help to build publications that are truly digital, rather than pixel-based copies of print editions.

## Universal Format: 3 Layers of Delivery

This is where HTML is currently more complex than some other commercially available publishing options. There are (at least) 3 different ways to get HTML-based content to your readers.

![3 layers of HTML publishing: naked HTML, Web App, Encapsulated](http://digitalpublishingbliki.com/wp-content/uploads/2014/08/html5_publishing-graphics_19.png)

However, that complexity is not strictly a disadvantage, since it stems from having more choices.

### 1. Naked HTML

Naked HTML
Bare-naked HTML can be viewed on any device’s web browser.

Content can be delivered to a reader by posting it directly to the web and sharing it via URL.

In some cases, it’s as simple as putting your files on Dropbox and sharing the URL.

**Pros:** Quick and easy. Viewable on desktop computers as well as mobile devices.

**Cons:** Can be more difficult to monetize. Doesn’t have the branded experience of an app with a home screen icon.

### 2. Web Apps

Web App
The Web App is HTML disguised as a native app on the device.

A Web App (capital “W,” capital “A”) is technically a web site, but it can be saved to the home screen and subsequently opened as if it were a native app. When the app is launched, it opens the site in a “headless” browser (i.e., it doesn’t have the address bar or other user interface elements).

The Web App allows a publisher to bypass the app store submission and approval process, as well as avoid the recurring developer account fee (Apple’s start at $99/year). This is great for publications that are rushed (and can’t wait for approval), and don’t comply with app store guidelines (such as internal documents or marketing materials).

The Web App isn’t just for small publishers and internal communications. When Apple removed Google Maps as the default map search on iOS devices, Google famously made Maps available as a Web App.

**Pros:** Easy to create and deliver. Offers the branded experience of an app with a home screen icon, but without the headache or cost of an app store.

**Cons:** Difficult to monetize.

### 3. Encased Apps

Encapsulated HTML App
HTML can be encapsulated in a native app “wrapper.”

In addition to HTML’s utility within the browser and as a Web App, HTML can also be encased within a native desktop or mobile app.

HTML can be included as a piece of an app. For example, Yelp wrote an article on how they’re using the iOS WebView object to quickly integrate web features into their native app.

Alternatively, a native “wrapper” can be placed around the HTML and it can become the entire app. Here are a few ways to easily create a native app from HTML:

- **The Baker Framework**---[an open source framework](http://bakerframework.com/) that has all the code already there. Drop your HTML in a folder, tweak a few options (e.g., add the name of your app and some icons), and your ready to publish.
- **PhoneGap Build**---PhoneGap is a code library that allows you to publish HTML to a native app on almost any platform. [PhoneGap Build is an inexpensive web service that does most of the packaging for you.](http://ajarproductions.com/blog/2014/07/23/how-to-create-mobile-apps-as-a-non-developer/)
- **Liquid State Publishing System**---Liquid State is a full-service publishing channel. It accepts HTML (among other formats) as input and outputs to several platforms.  

**Pros:** Branded experience. Easier to sell in an app store.  
**Cons:** Higher level of effort in some cases.

## Where else can HTML Live?

HTML can also live within DPS (as a Web Content Overlay) as well as within EPUB (which is really just a special instance of HTML under the hood). Moreover, HTML can live within HTML as an iframe.

The bottom line is that if you familiarize yourself with HTML and what you can do with it, your time will be well spent.

## Challenges with HTML

While HTML is a ubiquitous and versatile format, it’s far from perfect. Some elements, like having fine control of text that is also selectable, are not yet at the level of a format like PDF. Additionally, the distribution of HTML as an app currently requires at least one extra step, but the tools for creating HTML-based digital publications are only in their infancy and I expect they will evolve quickly.

One other shortcoming of HTML (versus PDF or SWF) is that it generally requires multiple files: the HTML, plus the images, media, CSS, and JavaScript files. In most cases, this is only a minor inconvenience.

## How do I create HTML as a non-coder?

You don’t have to know how to code HTML or CSS to benefit from the advantages listed in this article.

Adobe has multiple tools that create HTML: Dreamweaver, Muse, Animate, and Reflow.

Two years ago, in recognition of HTML’s potential as a publication format, my wife and I launched a Kickstarter project to create a tool that exported HTML5 layouts from Adobe InDesign. That tool has evolved significantly and is now known as in5. in5 supports all of the features listed in this article, including audio and video, viewport scaling, font embedding, offline storage, Web App export, and even a Baker Framework export. All of the content can be created visually using InDesign’s native capabilities. A free trial version of in5 is available on our website.



