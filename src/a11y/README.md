# A11Y

## @mixin screen-reader-only

Hide an element to all devices **except screen readers** with `.sr-only`. Combine `.sr-only` with `.is-focusable` to show the element again when it’s focused (e.g. by a keyboard-only user).
Useful for "Skip to main content" links

+ **Group:** A11y
+ **Access:** public

### Parameters

| Name         | Type                                                             | Description                                   | Default        |
| :----------- | :--------------------------------------------------------------- | :-------------------------------------------- | :------------- |
| `$className` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"is-sr-only"` |
| `$size`      | **[Number](https://sass-lang.com/documentation/values/numbers)** | a valid CSS number                            | `.625rem`      |

### Examples

```html
<a class="sr-only is-focusable" href="#content">Skip to main content</a>
```

### Links

+ <http://a11yproject.com/posts/how-to-hide-content/>
+ <http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1>

### Since

+ **0.1.0**

### Authors

+ HTML5 Boilerplate

