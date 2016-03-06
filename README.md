# post-rendered-height [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
> Sets the height of elements in a web browser post rendering.

This is useful in the following scenarios:

* You've set some of your elements to have height 100%.  On mobile devices, the address
bar can dissappear while scrolling down.  height 100% causes a re-paint when this
occurs.  Use `post-rendered-height` to set a fixed height attribute on the element
to circumvent this.

## Highlights

* Small footprint
* Performant
* Only fires on orientationchange events.
* Declaritive based configuration.  Control which elements receive `post-rendered-height`
by using attributes.

## Example

```html
<div style="height: 100%" post-rendered-height>
</div>
<script src="./path/to/post-rendered-height.js"></script>
<script>
  PostRenderedHeight.init();// kick it off
</script>
```

## API

### PostRenderedHeight

A namespace of methods that apply to the current window.

#### .init()

Initializes `post-rendered-height` attributed elements.  This method is idempotent,
as it adds the following property to all elements containing the `post-rendered-height`
attribute: `__PostRenderedHeight__height__set`.

## License
``````
The MIT License (MIT)

Copyright (c) 2016 Kogo Software LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/post-rendered-height.svg
[npm-url]: https://npmjs.org/package/post-rendered-height
[npm-image]: http://img.shields.io/npm/v/post-rendered-height.svg
