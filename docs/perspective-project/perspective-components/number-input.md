---
sidebar_position: 3
sidebar_label: Number Input
title: Number Input
---

## Overview

The Number Input component is a custom Perspective component that provides an enhanced interface for entering and editing numeric values. It fixes a number of issues with the default Perspective Numeric Input component and includes additional features to improve the user experience.

## Props

The Number Input component has the following props:
| Prop Name | Type | Description | Input/Output |
| --------- | ---- | ----------- | -------------- |
| `value` | number | The current value. | Both |
| `allowNegative` | boolean | If true, allows negative values. | Input |
| `allowLeadingZeros` | boolean | If true, allows leading zeros. | Input |
| `decimalScale` | number | The number of decimal places to allow. If set to 0, only integers are allowed. | Input |
| `fixedDecimalScale` | boolean | If true, always shows the number of decimal places specified by `decimalScale`, even while editing. | Input |
| `thousandSeparator` | boolean | If true, shows a thousands separator. | Input |
| `prefix` | string | A string to prefix the value with. | Input |
| `suffix` | string | A string to suffix the value with. | Input |
| `placeholder` | string | The placeholder text to show when the input is empty. | Input |
| `enabled` | boolean | If false, the input is disabled and cannot be interacted with. | Input |
| `readonly` | boolean | If true, the input is read-only and cannot be edited. | Input |
| `align` | string | The alignment of the text in the input. Can be "left", "center", or "right". Default is "left". | Input |
| `inputBounds` | object | An object specifying the minimum and maximum values allowed. E.g. `{ min: 0, max: 100 }`. | Input |
| `isOutOfBounds` | boolean | Indicates whether the current value is out of the specified bounds. | Output |
| `allowOutOfBounds` | boolean | If true, allows values outside of the specified bounds. | Input |

## Notes

- The Number Input is designed to be used in conjunction with the `TamakiMES/_components/NumberInput` Perspective View, which provides a complete interface for editing numbers, including a label, description, and error messages.
- List of known bugs with the default Perspective Numeric Input component that are fixed by this component:
  - Does not have "inputmode" attribute set to "numeric", which results in incorrect virtual keyboards on mobile devices/tablets
  - Implements unconventional method to grab focus, causing an incompatibility with the Expression Editor and any other component that tracks its focus state internally
  - Does not handle integers correctly. If you set the format to Integer ('0,0'), then type in a float (e.g. '1.23') and press enter it will change the display to show just '1' but the actual value will still be '1.23'
    - Display value rounds instead of truncates, a value of '2.9' in Integer format will result in a display value of '3'
    - It allows you to type in a decimal when in Integer mode
  - Captures scroll input on certain browsers/OSes even when the component does not have focus, causing the value to change unexpectedly
  - No way to have a fixed number of decimal places, e.g. always show 2 decimal places even while editing
  - No way to have a prefix or suffix on the number, e.g. a currency symbol
