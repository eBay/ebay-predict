# ebay-predict [![Build Status](https://travis-ci.com/eBay/ebay-predict.svg?branch=master)](https://travis-ci.com/eBay/ebay-predict)

`ebay-predict` is a simple tag to prefetch static assets from a prediction service. A prediction service is a server endpoint, that responds with the suggested JSON schema (see [below]()). If the service is not hosted on the same origin as the page, please ensure proper [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) support is enabled. `<ebay-predict>` triggers the prefetch only after the page `load` event, with a provided [delay](), to ensure the current page is rendered without any interferance.  

## Usage
1. Install and save the module
```sh
npm install ebay-predict --save
```
2. Add dependency in your page `browser.json`
```
"ebay-predict/browser.json"
```
3. The module exposes a tag `<ebay-predict>`. This can be embeded in the `<footer>` tag of page HTML
```html
<html>
...
<footer>
    <ebay-predict src="https://www.ebay.com/sch/predict" delay="200" limit="2"/> 
</footer>
</html>
```
### `<ebay-predict>` Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`src` | String | No | prediction service endpoint (mandatory)
`delay` | String | No | a delay in milliseconds for the prefetch to trgger, after the page `load` event (default: `"200"`)
`limit` | String | No | a limit on the number of resources (for each type) to be prefetched. Use caution when prefetching more than 2 resources, as that may contend with current page bandwidth (default: `"2"`)

## Server response
Below is the response schema from the prediction service
```json
{
    "css": ["https://ir.ebaystatic.com/rs/c/br/inception-PMg1-OXo.css", "https://ir.ebaystatic.com/rs/c/br/highlnfe-BTZUdVe3.css"],
    "js": ["https://ir.ebaystatic.com/rs/c/br/inception-dnRHPO-V.js", "https://ir.ebaystatic.com/rs/c/br/highlnfe-AK2d_fr4.js"],
    "media": ["https://i.ebayimg.com/00/s/MzZYNDI=/z/BGEAAOSw8FRZqY4x/$_57.PNG", "https://i.ebayimg.com/images/g/aYoAAOSwl89cAW9D/s-l500.webp"]
}
```

## Browser support
* Chrome (desktop & Android)
* Firefox
* Opera
* Safari (desktop & iOS)
* IE8+
* Android WebKit

## Issues
Have a bug or a feature request? [Please open a new issue](https://github.com/eBay/ebay-predict/issues)

## Maintainers
* [Senthil Padmanabhan](https://senthilp.com)

## Contribute
Pull Requests welcome. Please submit Github issues for any feature enhancements, bugs or documentation problems.

## License 
Copyright (c) 2018 eBay Inc.

Released under the [MIT](http://www.opensource.org/licenses/MIT) License
