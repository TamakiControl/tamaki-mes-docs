---
sidebar_position: 9
sidebar_label: Widget Tree
title: Widget Tree
---

## Overview

The Widget Tree component is a custom Perspective component that provides a list of dashboard widgets in a tree view. Although widgets are not hierarchical, the tree structure allows for easy integration with other tree components and provides a consistent user experience.

## Props

The Widget Tree component has the following props:
| Prop Name | Type | Description | Input/Output |
| --------- | ---- | ----------- | -------------- |
| `showSearch` | boolean | If true, shows a search box at the top of the tree to filter widgets. | Input |
| `selectedItem` | object | The currently selected item in the tree. Contains the properties `id` (string), `notes` (string), `defaultHeight` (number), `defaultWidth` (number), `description` (string), `minWidth` (number), `minHeight` (number), `enabled` (boolean), `name` (string), `viewPath` (string), `iconPath` (string), `category` (string), `spare1` (string), `spare2` (string), `spare3` (string) | Output |
| `currentItemId` | string | The ID of the item most recently clicked on. This is useful for tracking user interaction with the tree. | Output |
| `forceRefresh` | boolean | If true, forces the tree to refresh its data from the server. Automatically resets to false after 500ms. | Input |
| `allowEdit` | boolean | If true, allows the user to edit the tree (add, edit, delete, cut, paste, etc.). | Input |
| `showImport` | boolean | If true, shows an "Import" button to allow importing widgets from a CSV or JSON file. | Input |
| `showExport` | boolean | If true, shows an "Export" button in the context menu to allow exporting widgets to a CSV or JSON file. | Input |
| `importTooltip` | string | The tooltip text to show when hovering over the "Import" button. | Input |

## Events

The Widget Tree component emits the following events:
| Event Name | Description | Payload |
| ---------- | ----------- | ------- |
| `onAddWidget` | Emitted when the user adds a new widget. | `None` |
| `onDelete` | Emitted when the user deletes a widget. | `{ currentItemId: string }` |
| `onImport` | Emitted when the user imports widgets. | `None` |
| `onExport` | Emitted when the user exports widgets. | `{ currentItemId: string}` |
