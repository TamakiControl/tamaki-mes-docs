---
sidebar_position: 0
sidebar_label: Customization
title: Customization
---

## Overview

All of our custom colors are defined as CSS variables in the `:root` selector of the custom stylesheet. This makes it easy to change the colors of the project by simply changing the value of the CSS variable. They are defined like this:

```css
:root {
	--color-primary: --primary-color: 49.12% 0.3096 275.75;

	...

	--primary: oklch(var(--color-primary));
}
```

## On-the-Fly Color Customization

Because our colors are defined as oklch values, you can easily create custom darker or lighter shades of any color like this:

```css
background: oklch(var(--color-primary) / 50%);
```

which will create a 50% lighter shade of the primary color.
