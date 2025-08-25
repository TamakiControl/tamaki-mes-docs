---
sidebar_position: 8
sidebar_label: Unit of Measure Tree
title: Unit of Measure Tree
---

## Overview

The Unit of Measure Tree component is a custom Perspective component that provides a list of units of measure in a tree view. Although UoMs are not hierarchical, the tree structure allows for easy integration with other tree components and provides a consistent user experience.

## Props

The Unit of Measure Tree component has the following props:
| Prop Name | Type | Description | Input/Output |
| --------- | ---- | ----------- | -------------- |
| `showSearch` | boolean | If true, shows a search box at the top of the tree to filter unit of measures. | Input |
| `selectedItem` | object | The currently selected item in the tree. Contains the properties `id` (string), `notes` (string), `symbol` (string), `enabled` (boolean), `name` (string), `spare1` (string), `spare2` (string), `spare3` (string) | Output |
| `currentItemId` | string | The ID of the item most recently clicked on. This is useful for tracking user interaction with the tree. | Output |
| `forceRefresh` | boolean | If true, forces the tree to refresh its data from the server. Automatically resets to false after 500ms. | Input |
| `allowEdit` | boolean | If true, allows the user to edit the tree (add, edit, delete, cut, paste, etc.). | Input |
| `hideItems` | array[string] | An array of unit of measure IDs to hide from the tree. | Input |
| `showImport` | boolean | If true, shows an "Import" button to allow importing unit of measures from a CSV or JSON file. | Input |
| `showExport` | boolean | If true, shows an "Export" button in the context menu to allow exporting unit of measures to a CSV or JSON file. | Input |
| `importTooltip` | string | The tooltip text to show when hovering over the "Import" button. | Input |

## Events

The Unit of Measure Tree component emits the following events:
| Event Name | Description | Payload |
| ---------- | ----------- | ------- |
| `onAdd` | Emitted when the user adds a new unit of measure. | `None` |
| `onDelete` | Emitted when the user deletes a unit of measure. | `{ currentItemId: string }` |
| `onImport` | Emitted when the user imports unit of measures. | `None` |
| `onExport` | Emitted when the user exports unit of measures. | `{ currentItemId: string}` |
