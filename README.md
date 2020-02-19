# Nepal all you need to know 
[![Netlify Status](https://api.netlify.com/api/v1/badges/d51b252f-b108-4cbe-9511-ac2773c3345f/deploy-status)](https://app.netlify.com/sites/nepal-allyouneedtoknow/deploys)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Contents](#contents)
    - [List](#list)
    - [Tips](#tips)
    - [Single page](#single-page)
    - [Blog post](#blog-post)
- [Shortcodes](#shortcodes)
- [Front matter](#front-matter)
- [Local test](#local-test)
- [License](#license)

## Contents
You can write four types of contents: `List`, `Tips`, `Blog post` or `Single page`  


### List
This is automatic content. 
When you create a folder under `it` or `en` a page is generated with a list of the elements contained in the folder.

You can customize a `front matter` creating an `_index.md` page in the folder.

### Tips
This is a special template.
You must putting in `data/en/tips` or `data/it/tips` folder the real content.
For using this special template, you must set `layout: tips` in your `front matter`.
Examples in `content/en/tips.md` or `content/it/consigli.md`.

Format `data` content like this:
```yaml
name: General
source:
  - icon: fa fa-flag
    number: 0
    description: Example 1

  - icon: fa fa-money
    number: 1
    description: Example 2
```

### Single page
This is a standard template if you don't specify any `layout:` in a `front matter`.
Is a simple white page and you can find examples in `content/en/donate.md` or `content/it/donazioni.md`.

### Blog post
Is a single page template with additions.
You must set `blog: true` in a `front matter` for transform your default page.
Blog post adds `Disqus` comments and related post section.

### Shortcodes
Some `shortcodes` are available:

+ bundle-image
+ ref
+ tips-category

`bundle-image`: you can insert an image on a page
```js
{{< bundle-image name="name of image in a media folder" alt="alt description" caption="caption description" >}}
```

`ref`: you can linking another page 
```js
[Link name]({{< ref "page_name.md" >}})
[Link name]({{< ref "page_name.md#anchor" >}})
```

`tips-category`: print a list of category tips
```js
{{< tips-category "page_name.md" >}}
```

## Front matter
`Front matter` example:

```yaml
---
date: 2020-02-11
author: Alessandro
authorLink: Twitter
title: "My Blog Post"
description: "My Blog Post description"
tags: [ keyword 1, keyword 2, keyword 3 ]
categories: [ mycategory ]
blog: true
highlight: true
image: media/my-image.jpg
markup: blackfriday
translationKey: my-article
---
```

`date`: file date

`author`: name of author (`params.author[Author name]`) in a `config.toml`. **Accepted values**: `Alessandro`, `Denise` 

`authorLink`: social link about author. **Accepted values**: `Twitter`, `Instagram`, `Website`

`title`: page title

`description`: page description

`tags`: keywords for a page

`categories`: page categories

`blog`: use if you want a page like a Blog Post

`highlight`: include `highlight.js` javascript and css files

`image`: main image for page. Useful for social sharing

`markup`: content format; use always `blackfriday`

`translationKey`: linking multilanguage page with different name. 

## Local test
Hugo includes a development server, so you can view your changes as you go -
very handy. Spin it up with the following command:

``` sh
hugo serve
```

Now you can go to [localhost:1313][local] and the Sustain
theme should be visible.

## License
<p>
  <a href="./LICENSE"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/642px-MIT_logo.svg.png" height="60px"></a>
</p>

[local]: http://localhost:1313/