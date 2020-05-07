# Text

## @mixin text-reset

Reset text back to its original browser defaults

+ **Group:** Text
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$className`   | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"text-reset"`        |
| `$line-height` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a valid CSS number with which to rese         | `config.$line-height` |
| `$family`      | **[String](https://sass-lang.com/documentation/values/strings)** | a font family with which to reset             | `config.$font-family` |
| `$weight`      | **[String](https://sass-lang.com/documentation/values/strings)** | a font weight with which to reset             | `normal`              |

### Since

+ **0.1.0**

## @mixin text-truncate

Truncate the text

+ **Group:** Text
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$className`   | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"text-truncate"`     |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Since

+ **0.1.0**

## @mixin text-underline

Add an underline decoration to your heading.

+ **Group:** Text
+ **Access:** public

### Parameters

| Name         | Type                                                             | Description                                                                                                                    | Default                      |
| :----------- | :--------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :--------------------------- |
| `$className` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers                                                                                  | `"text-underline"`           |
| `$direction` | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS number to multiply by the rows to max out the height; generally should match the font size used within the element | `"bottom"`                   |
| `$border`    | **[String](https://sass-lang.com/documentation/values/strings)** | the number of rows the show;                                                                                                   | `config.$border-width solid` |
| `$padding`   | **[String](https://sass-lang.com/documentation/values/strings)** | -                                                                                                                              | `.25rem`                     |

### Since

+ **0.1.0**

