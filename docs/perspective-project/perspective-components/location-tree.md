---
sidebar_position: 6
sidebar_label: Location Tree
title: Location Tree
---

## Overview

The Location Tree component is a custom Perspective component that provides a hierarchical tree view of locations. It allows users to easily navigate and select locations from a structured list.

## Props

The Location Tree component has the following props:
| Prop Name | Type | Description | Input/Output |
| --------- | ---- | ----------- | -------------- |
| `showSearch` | boolean | If true, shows a search box at the top of the tree to filter locations. | Input |
| `selectedItem` | object | The currently selected item in the tree. Contains the properties `id` (string), `notes` (string), `storageCapacityUnitId` (string), `description` (string), `storageCapacity` (number), `lotStorageStrategy` (string), `type` (string), `parentId` (string), `enabled` (boolean), `path` (string), `allowNegativeInventory` (boolean), `sortOrder` (number), `name` (string), `processType` (string), `lotUseStrategy` (string), `spare1` (string), `spare2` (string), `spare3` (string) | Output |
| `currentItemId` | string | The ID of the item most recently clicked on. This is useful for tracking user interaction with the tree. | Output |
| `forceRefresh` | boolean | If true, forces the tree to refresh its data from the server. Automatically resets to false after 500ms. | Input |
| `allowEdit` | boolean | If true, allows the user to edit the tree (add, edit, delete, cut, paste, etc.). | Input |
| `rootPath` | string | If set, only shows locations that are descendants of the specified location path. | Input |
| `hideItems` | array[string] | An array of location IDs to hide from the tree. Also hides their children. | Input |
| `showImport` | boolean | If true, shows an "Import" button to allow importing locations from a CSV or JSON file. | Input |
| `showExport` | boolean | If true, shows an "Export" button in the context menu to allow exporting locations to a CSV or JSON file. | Input |
| `importTooltip` | string | The tooltip text to show when hovering over the "Import" button. | Input |

## Events

The Location Tree component emits the following events:
| Event Name | Description | Payload |
| ---------- | ----------- | ------- |
| `onAdd` | Emitted when the user adds a new location. | `{ currentItemId: string }` |
| `onDelete` | Emitted when the user deletes a location. | `{ currentItemId: string }` |
| `onImport` | Emitted when the user imports locations. | `None` |
| `onExport` | Emitted when the user exports locations. | `{ currentItemId: string}` |
