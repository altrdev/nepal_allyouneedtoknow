# Nepal all you need to know 
[![Netlify Status](https://api.netlify.com/api/v1/badges/d51b252f-b108-4cbe-9511-ac2773c3345f/deploy-status)](https://app.netlify.com/sites/nepal-allyouneedtoknow/deploys)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Local test](#local-test)
- [Git hooks](#git-hooks)
- [License](#license)

## Features
Features about theme are available [here][sustain-aynk]

## Local test
Hugo includes a development server, so you can view your changes as you go -
very handy. Spin it up with the following command:

``` sh
hugo serve
```

Now you can go to [localhost:1313][local] and the site should be visible.

For include a draft posts:

``` sh
hugo serve -D
```

For include content with publishdate in the future:

``` sh
hugo serve -F
```

## Git hooks

You can install a Git hooks:

``` sh
cd git_hooks/
./setup-hooks.sh
```

## License
<p>
  <a href="./LICENSE"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/642px-MIT_logo.svg.png" height="60px" alt="license"></a>
</p>

[local]: http://localhost:1313/
[sustain-aynk]: https://github.com/altrdev/hugo-sustain-aynk
