# Images

## @mixin img-responsive

Responsive images keep images from scaling beyond the width of their parents.

+ **Group:** Images
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$className`   | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"img-responsive"`    |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

usage

```scss
@include img-responsive();
```

### Since

+ **0.1.0** 1. Set a maximum relative to the parent

2. Scale the height according to the width, otherwise you get stretching

### Authors

+ Mark Otto

