---
sidebar_position: 20
title: "importFromJson"
description: "Imports inventory operations from a JSON file provided as raw bytes"
---

# system.mes.inventory.operation.importFromJson

## Description

Imports [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) from a JSON file provided as raw bytes.
The service layer parses the JSON content and creates or updates inventory operation entities.

Recommended to export at least one pre-existing inventory operation to JSON using the [exportAsJson](export-as-json.md)
functionality to ensure the correct format of the JSON file.

## Syntax

```python
system.mes.inventory.operation.importFromJson(importBytes)
```

## Parameters

| Parameter     | Type      | Nullable | Description                    |
| ------------- | --------- | -------- | ------------------------------ |
| `importBytes` | `PyArray` | False    | The JSON content as raw bytes. |

## Returns

An ApiResponse object where `data` is the number of inventory operations successfully imported or updated.

## Code Examples

Here is an example of how to use the `importFromJson` method in the context of a [Perspective File Upload Component](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload)
`onFileReceived` event handler. Reference [Perspective - File Upload Scripting](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload/perspective-file-upload-scripting)
for more information on the `onFileReceived` event handler.

```python
def runAction(self, event):
	jsonBytes = event.file.getBytes()
	system.mes.inventory.operation.importFromJson(jsonBytes)
```
