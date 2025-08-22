---
sidebar_position: 7
sidebar_label: Material Tree
title: Material Tree
---

## Overview

The Material Tree component is a custom Perspective component that provides a hierarchical tree view of materials and material classes. It allows users to easily navigate and select materials from a structured list.

## Props

The Material Tree component has the following props:
| Prop Name | Type | Description | Input/Output |
| --------- | ---- | ----------- | -------------- |
| `showSearch` | boolean | If true, shows a search box at the top of the tree to filter materials. | Input |
| `selectedItem` | object | The currently selected item in the tree. Contains the properties `id` (string), `notes` (string), `description` (string), `type` (string), `parentId` (string), `enabled` (boolean), `path` (string), `name` (string), `spare1` (string), `spare2` (string), `spare3` (string) | Output |
| `currentItemId` | string | The ID of the item most recently clicked on. This is useful for tracking user interaction with the tree. | Output |
| `forceRefresh` | boolean | If true, forces the tree to refresh its data from the server. Automatically resets to false after 500ms. | Input |
| `allowEdit` | boolean | If true, allows the user to edit the tree (add, edit, delete, cut, paste, etc.). | Input |
| `rootPath` | string | If set, only shows materials that are descendants of the specified material path. | Input |
| `hideItems` | array[string] | An array of material/material class IDs to hide from the tree. Also hides their children. | Input |
| `showImport` | boolean | If true, shows an "Import" button to allow importing materials from a CSV or JSON file. | Input |
| `showExport` | boolean | If true, shows an "Export" button in the context menu to allow exporting materials to a CSV or JSON file. | Input |
| `importTooltip` | string | The tooltip text to show when hovering over the "Import" button. | Input |

## Events

The Material Tree component emits the following events:
| Event Name | Description | Payload |
| ---------- | ----------- | ------- |
| `onAdd` | Emitted when the user adds a new material. | `{ currentItemId: string, type: string ('material' or 'materialClass') }` |
| `onDelete` | Emitted when the user deletes a material. | `{ currentItemId: string }` |
| `onImport` | Emitted when the user imports materials. | `None` |
| `onExport` | Emitted when the user exports materials. | `{ currentItemId: string}` |
