---
sidebar_position: 2
sidebar_label: Expression Editor
title: Expression Editor
---

## Overview

The Expression Editor component is a custom Perspective component that provides an enhanced interface for creating and editing Expressions. It includes features such as syntax highlighting, tag insertion, and error checking to make it easier for users to create complex expressions.

## Props

The Expression Editor component has the following props:
| Prop Name | Type | Description | Input/Output |
| --------- | ---- | ----------- | -------------- |
| `expression` | string | The current Expression. | Both |
| `isValid` | boolean | Indicates whether the current expression is valid. | Output |
| `showOperatorsButton` | boolean | If true, shows a button to insert operators into the expression. | Input |
| `showFunctionsButton` | boolean | If true, shows a button to insert functions into the expression. | Input |
| `showTagBrowserButton` | boolean | If true, shows a button to insert tags into the expression. | Input |
| `cursorIndex` | number | The current cursor index in the expression. | Output |
| `expressionResult` | any | The result of the expression, if it is valid. | Output |

## Events

The Expression Editor component emits the following events:
| Event Name | Description | Payload |
| ---------- | ----------- | ------- |
| `onOpenTagBrowser` | Emitted when the user clicks the "Insert Tag" button. | None |

## Notes

- The Expression Editor is designed to be used in conjunction with the `TamakiMES/_components/ExpressionInput` Perspective View, which provides a complete interface for editing expressions, including a label, description, and error messages.
