# public/images/

Static images served as-is at the site root. Put the **logo** here, e.g.:

```
public/images/logo.svg
public/images/logo.png
```

Reference it from any component with an absolute path (no import needed):

```astro
<img src="/images/logo.svg" alt="Tango Studio" width="140" height="32" />
```

Use this folder for the logo, favicons and OG images.
For images you want Astro to optimize (hashing, resizing, `<Image />`),
use `src/assets/images/` instead and `import` them.
