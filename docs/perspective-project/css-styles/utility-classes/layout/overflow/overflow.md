---
sidebar_position: 1
sidebar_label: Overflow
title: Overflow
description: Control the overflow behavior of elements.
---

## Overview

These classes control the overflow behavior of elements. Overflow behavior is how content that is too large to fit in an element is handled.

## Classes

| Class Name           | Description                                                                             |
| -------------------- | --------------------------------------------------------------------------------------- |
| `overflow-auto`      | The content is clipped and a scrollbar is added.                                        |
| `overflow-hidden`    | The content is clipped and hidden.                                                      |
| `overflow-clip`      | The content is clipped and hidden.<span style={{'color': 'red'}}>\*</span>              |
| `overflow-visible`   | The content is not clipped and may be rendered outside the box.                         |
| `overflow-scroll`    | The content is clipped and a scrollbar is added.                                        |
| `overflow-x-auto`    | The content is clipped and a scrollbar is added horizontally.                           |
| `overflow-x-hidden`  | The content is clipped and hidden horizontally.                                         |
| `overflow-x-clip`    | The content is clipped and hidden horizontally.<span style={{'color': 'red'}}>\*</span> |
| `overflow-x-visible` | The content is not clipped and may be rendered outside the box horizontally.            |
| `overflow-x-scroll`  | The content is clipped and a scrollbar is added horizontally.                           |
| `overflow-y-auto`    | The content is clipped and a scrollbar is added vertically.                             |
| `overflow-y-hidden`  | The content is clipped and hidden vertically.                                           |
| `overflow-y-clip`    | The content is clipped and hidden vertically.<span style={{'color': 'red'}}>\*</span>   |
| `overflow-y-visible` | The content is not clipped and may be rendered outside the box vertically.              |
| `overflow-y-scroll`  | The content is clipped and a scrollbar is added vertically.                             |

<span style={{'color': 'red'}}>\*</span> The `overflow-clip` and `overflow-x-clip` and `overflow-y-clip` classes are the same as `overflow-hidden`, except they fix several browser-specific bugs. Another big difference is that `clip` allows you to clip the content of one axis while allowing the other axis to overflow. This is useful when you want to hide the overflow on one axis but not the other. <strong>`overflow-clip` may not be supported in older browsers. Make sure to check compatibility if used.</strong>
