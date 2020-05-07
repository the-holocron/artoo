# Box Model

## @mixin is-scrollable

Enable scrollable blocks of code Use `<pre>`s for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper rendering. You may optionally add the `.pre-scrollable` class, which will set a max-height of 350px and provide a y-axis scrollbar

+ **Group:** Box model
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                                                                                                    | Default               |
| :------------- | :--------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :-------------------- |
| `$className`   | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers                                                                                  | `"is-scrollable"`     |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                                                                                                      | `config.$breakpoints` |
| `$height`      | **[Number](https://sass-lang.com/documentation/values/numbers)** | a valid CSS number to multiply by the rows to max out the height; generally should match the font size used within the element | `config.$font-size`   |
| `$rows`        | **[Number](https://sass-lang.com/documentation/values/numbers)** | the number of rows the show;                                                                                                   | `20`                  |

### Since

+ **0.1.0**

