# Positioning

## @mixin centers

Perfectly center things along the x or y-axis, or perhaps both

+ **Group:** Positioning
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$className`   | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"center"`            |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```html
<div class="pos-rel" style="height: 100px;">
  <div class="center">absolute centered on both axis</div>
  <div class="center-x">absolute centered on x axis</div>
  <div class="center-axis-y-xs-up">absolute centered on y axis</div>
</div>
```

### Since

+ **0.1.0**

## @mixin clearfix

Clearfix

+ **Group:** Positioning
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$className`   | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"clearfix"`          |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include clear($className: c, $breakpoints: ("sm": 480px));
```

```html
<div class="clear-fix">...</div>
```

### Links

+ <http://nicolasgallagher.com/micro-clearfix-hack/>

### Since

+ **0.1.0** For modern browsers

1. The space content is one way to avoid an Opera bug when the
   `contenteditable` attribute is included anywhere else in the document.
   Otherwise it causes space to appear at the top and bottom of elements
   that are clearfixed.
2. The use of `table` rather than `block` is only necessary if using
   `::before` to contain the top-margins of child elements.

### Authors

+ Nicolas Gallagher

