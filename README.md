# Filter Utilities for Tailwind CSS

Composable filter utilities for Tailwind CSS.

The problem with the filter property is that filters can't be composed using
different classes. This plugin uses the same [trick Adam Wathan used to get
`font-variant-numeric` utilities
working](https://twitter.com/adamwathan/status/1301577034183966720), which
makes each and every filter function totally composable!

For example, if you want to increase the brightness of a button when it's being
hovered, you can use the `hover:brightness-125` utility:

``` html
<button class="[your button utils] hover:brightness-125">
    Button text
</button>
```

And because the filters are composable, you can combine them however you wish.
For instance, this will make the element blurry and slightly dim:

``` html
<div class="blur brightness-75"></div>
```

The `backdrop-filter` property is also supported. Simply prefix the various
filter utilities with `bg-` to get the backdrop variant of the filter. For
example, `bg-blur bg-brightness-125` will apply
`backdrop-filter: blur(1px) brightness(1.25);`

For that sweet, sweet, frosty Apple effect, you can, for instance, combine the
`bg-white`, `bg-opacity-75`, and `bg-blur-xl` classes, as such:

``` html
<div class="fixed top-0 left-0 w-full h-16 shadow-sm bg-white bg-opacity-75 bg-blur-xl">
  Frosty Sticky Header
</div>
```

## Installing

Add `tailwind-filter-utilities` to your NPM dependencies:

```
npm add -D tailwind-filter-utilities
```

Add the plugin to your `tailwind.config.js`:

``` js
plugins: [
  require('tailwind-filter-utilities'),
],
```

## Supported Filters

The supported filters are blur, brightness, grayscale, and drop shadow.

### Blur

| Class | Properties |
| - | - |
| `.blur-xs` | `filter: blur(0.5px)` |
| `.blur-sm` | `filter: blur(1px)` |
| `.blur` | `filter: blur(2px)` |
| `.blur-md` | `filter: blur(4px)` |
| `.blur-lg` | `filter: blur(10px)` |
| `.blur-xl` | `filter: blur(22px)` |
| `.blur-2xl` | `filter: blur(48px)` |

| Class | Properties |
| - | - |
| `.bg-blur-xs` | `backdrop-filter: blur(0.5px)` |
| `.bg-blur-sm` | `backdrop-filter: blur(1px)` |
| `.bg-blur` | `backdrop-filter: blur(2px)` |
| `.bg-blur-md` | `backdrop-filter: blur(4px)` |
| `.bg-blur-lg` | `backdrop-filter: blur(10px)` |
| `.bg-blur-xl` | `backdrop-filter: blur(22px)` |
| `.bg-blur-2xl` | `backdrop-filter: blur(48px)` |

### Brightness

| Class | Properties |
| - | - |
| `.brightness-25` | `filter: brightness(0.25)` |
| `.brightness-50` | `filter: brightness(0.5)` |
| `.brightness-75` | `filter: brightness(0.75)` |
| `.brightness-100` | `filter: brightness(1)` |
| `.brightness-125` | `filter: brightness(1.25)` |
| `.brightness-150` | `filter: brightness(1.5)` |
| `.brightness-175` | `filter: brightness(1.75)` |

| Class | Properties |
| - | - |
| `.bg-brightness-25` | `backdrop-filter: brightness(0.25)` |
| `.bg-brightness-50` | `backdrop-filter: brightness(0.5)` |
| `.bg-brightness-75` | `backdrop-filter: brightness(0.75)` |
| `.bg-brightness-100` | `backdrop-filter: brightness(1)` |
| `.bg-brightness-125` | `backdrop-filter: brightness(1.25)` |
| `.bg-brightness-150` | `backdrop-filter: brightness(1.5)` |
| `.bg-brightness-175` | `backdrop-filter: brightness(1.75)` |

### Grayscale

| Class | Properties |
| - | - |
| `.grayscale-0` | `filter: grayscale(0)` |
| `.grayscale-25` | `filter: grayscale(0.25)` |
| `.grayscale-50` | `filter: grayscale(0.5)` |
| `.grayscale-75` | `filter: grayscale(0.75)` |
| `.grayscale` | `filter: grayscale(1)` |

| Class | Properties |
| - | - |
| `.bg-grayscale-0` | `backdrop-filter: grayscale(0)` |
| `.bg-grayscale-25` | `backdrop-filter: grayscale(0.25)` |
| `.bg-grayscale-50` | `backdrop-filter: grayscale(0.5)` |
| `.bg-grayscale-75` | `backdrop-filter: grayscale(0.75)` |
| `.bg-grayscale` | `backdrop-filter: grayscale(1)` |

### Drop Shadow

| Class | Properties |
| - | - |
| `.drop-shadow-xs` | `filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.05))` |
| `.drop-shadow-sm` | `filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05))` |
| `.drop-shadow` | `filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06))` |
| `.drop-shadow-md` | `filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.06))` |
| `.drop-shadow-lg` | `filter: drop-shadow(0 7px 12px rgba(0, 0, 0, 0.1)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05))` |
| `.drop-shadow-xl` | `filter: drop-shadow(0 15px 20px rgba(0, 0, 0, 0.1)) drop-shadow( 0 5px 5px rgba(0, 0, 0, 0.04))` |
| `.drop-shadow-2xl` | `filter: drop-shadow(0 13px 36px rgba(0, 0, 0, 0.25))` |

## Configuration

This plugin is configured like any other Tailwind plugin. For example, if you
wish to add additional blur levels, you would do as follows:

``` javascript
// tailwind.config.js
module.exports = {
  theme: {
    extends: {
      blur: {
        '10xl': '9000px',
        // ...
      },
    }
  },
  plugins: [
    require('tailwind-filter-utilities'),
    // ...
  ],
}
```

**For more details on what you can configure and how, please take a look at the
[default configuration file](https://github.com/kalfheim/tailwind-filter-utilities/blob/master/src/config.js).**

## Contributing

If you encounter any problems, or have ideas to improve the plugin, please
don't hesitate to submit a pull request. If it's a bug fix, or a not entirely
terrible idea, I'll definitely push the merge button! (as long as it doesn't
break anything)

## MIT License

See the LICENSE file for details.
