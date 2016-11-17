# abas-demo-site

Content for creating ABAS branded demo sites, such as:

- [http://abasystems.github.io/react-object-table/]
- [http://abasystems.github.io/react-interactive-tutorials/]

The demo site framework contains all the styles, a base template to use with Jekyll, and the
following javascript components:

- Source code previewer

## Installation

Download the package:

```
npm install abas-demo-site
```

### Styles

Either import the styles in your preprocessed stylesheet:

```scss
@import "node_modules/abas-demo-site/dist/abas-demo-site";
```

Or host and include the built css directly:

```html
<link href="/node_modules/abas-demo-site/dist/abas-demo-site.css" rel="stylesheet">
```

### Widgets

Initialise the demo site components

```javascript
import { init } from 'abas-demo-site'

init();
```

### Base Template

To use the base template, you will need to replace the default Jekyll _layouts directory with the
dist folder of this package:

```yml
layouts_dir: 'node_modules/abas-demo-site/dist'
```

The base layout depends on the following templates existing in your Jekyll _includes folder:

- head.html
- required_static.html

## Usage

### Source code previewer

To implement a source code previewer, use the following HTML mount:

```html
<code
  class="script"
  data-source="static/demo-script.jsx"
>Loading ...</code>
```
