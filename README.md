# uptick-demo-site

[![npm version](https://badge.fury.io/js/uptick-demo-site.svg)](http://badge.fury.io/js/uptick-demo-site)
![Downloads](http://img.shields.io/npm/dm/uptick-demo-site.svg?style=flat)

Content for creating Uptick-branded demo sites, such as:

- http://uptick.github.io/react-object-table/

The demo site framework contains all the styles, a base template to use with Jekyll, and some
common Javascript widgets.

## Installation

Download the package:

```shell
npm install uptick-demo-site
```

### Styles

Either import the styles in your preprocessed stylesheet:

```scss
@import "node_modules/uptick-demo-site/dist/uptick-demo-site";
```

Or host and include the built css directly:

```html
<link href="/node_modules/uptick-demo-site/dist/uptick-demo-site.css" rel="stylesheet">
```

### Widgets

Initialise the demo site components

```javascript
import { init } from 'uptick-demo-site'

init()
```

### Base Template

To use the base template, you will need to replace the default Jekyll _layouts directory in your
config with the dist folder of this package:

```yml
_config.yml

layouts_dir: 'node_modules/uptick-demo-site/dist'
```

The base layout depends on the following templates existing in your Jekyll _includes folder:

- head.html
- required_static.html

### Favicon

Copy `favicon.png` from this project's source directory into your jekyll root folder. Then add to
the `jekyll-seo-tag` plugin to your project:

```yml
_config.yml

plugins:
  - jekyll-seo-tag
```

## Usage

### Base Template Customisation

A number of variables are used to customise the base template, which are set in your Jekyll config:

```yml
_config.yml

package_name: Cool Package
package_github_url: https://github.com/uptick/cool-package
package_npm_url: https://www.npmjs.com/package/cool-package
```

### Source Code Previewer

To implement a source code previewer, use the following HTML mount:

```html
<code
  class="script"
  data-source="static/demo-script.jsx"
>Loading ...</code>
```
