---
sidebar_position: 5
sidebar_label: Downtime Reason Tree
title: Downtime Reason Tree
---

## Overview

The Downtime Reason Tree component is a custom Perspective component that provides a hierarchical tree view of downtime reasons. It allows users to easily navigate and select downtime reasons from a structured list, making it possible to categorize and analyze downtime events. Unlike the other trees, this component can be passed a locationId to filter the reasons shown based on the location.

## Props

The Downtime Reason Tree component has the following props:
| Prop Name | Type | Description | Input/Output |
| --------- | ---- | ----------- | -------------- |
| `showSearch` | boolean | If true, shows a search box at the top of the tree to filter reasons. | Input |
| `selectedItem` | object | The currently selected item in the tree. Contains the properties `code` (number), `notes` (string), `description` (string), `parentId` (string), `enabled` (boolean), `path` (string), `locationId` (string), `name` (string), `id` (string), `locationPath` (string) | Output |
| `currentItemId` | string | The ID of the item most recently clicked on. This is useful for tracking user interaction with the tree. | Output |
| `forceRefresh` | boolean | If true, forces the tree to refresh its data from the server. Automatically resets to false after 500ms. | Input |
| `allowEdit` | boolean | If true, allows the user to edit the tree (add, edit, delete, cut, paste, etc.). | Input |
| `locationId` | string | If set, filters the reasons shown in the tree to only those associated with the specified location. | Input |
| `rootPath` | string | If set, only shows reasons that are descendants of the specified reason path. | Input |
| `hideItems` | array[string] | An array of reason IDs to hide from the tree. Also hides their children. | Input |
| `showImport` | boolean | If true, shows an "Import" button to allow importing reasons from a CSV or JSON file. | Input |
| `showExport` | boolean | If true, shows an "Export" button in the context menu to allow exporting reasons to a CSV or JSON file. | Input |
| `importTooltip` | string | The tooltip text to show when hovering over the "Import" button. | Input |

## Events

The Downtime Reason Tree component emits the following events:
| Event Name | Description | Payload |
| ---------- | ----------- | ------- |
| `onAdd` | Emitted when the user adds a new reason. | `{ currentItemId: string, locationId: string }` |
| `onDelete` | Emitted when the user deletes a reason. | `{ currentItemId: string }` |
| `onImport` | Emitted when the user imports downtime reasons. | `None` |
| `onExport` | Emitted when the user exports downtime reasons. | `{ currentItemId: string}` |
