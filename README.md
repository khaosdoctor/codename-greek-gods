# codename-greek-gods

> Greek gods names parser for [Codename](https://github.com/khaosdoctor/Codename) (Standalone)

## Usage

Install the package using either `npm install codename-greek-gods --save` or `yarn add codename-greek-gods`.

Require it and use the function `parse`:

```js
const gods = require('codename-greek-gods')

console.log(gods.parse('2.1.4').codenameText) // V2.1.4 - Hera
```

For more information about the API, see [Codename](https://github.com/khaosdoctor/Codename) project, this parser only abstracts the `parse` function, returning an instance of the original Codename parser