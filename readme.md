# Beyond the Printed Page

This repo houses the source code for the soon-to-be-relaunched Beyond the Printed Page digital publishing blog.

This site is a collaborative effort between the Digital Publications team at the Getty and other arts/publishing professionals.

Currently this site is in active development pending a relaunch. 


## Dependencies
- Jekyll (v2.0+) and GH Pages
- jQuery 2.1.3 (included in repo)
- Normalize.scss (included in repo)
- Bourbon and Neat (included in repo)

### Installation
```shell
# in project root
bundle install

```

### Development
```shell
# in project root run
bundle exec jekyll serve
# then view changes at localhost:4000 in browser
```



JS compiles into a single `main.js` file (using Jekyll's new `include_relative` tag). SCSS compiles into `main.css` (note that source files require YAML front-matter in both cases).

## Webfonts
Webfonts should be added into the `assets/fonts` directory. Jekyll does not process Sass partials inside the `_scss` folder. In order to avoid hard-coding font URLs (since no `{{site.baseurl}}` is allowed), `@font-face` declarations should happen in the `assets/styles/fonts.scss` file instead. This is imported before all other styles and should only include `@font-face` declarations. 
If no webfonts are being used (or if you are relying on a CDN), this CSS file and the corresponding link can be removed.





