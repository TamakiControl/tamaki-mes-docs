---
sidebar_position: 22
title: "importFromJson"
description: "Imports inventory operations from a JSON file provided as a string or as raw bytes"
---

# system.mes.inventory.operation.importFromJson

## Description

Imports [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) from a JSON file provided as a string or as raw bytes.
The service layer will parse the JSON content and create or update operation entities based on the 'name' and 'location'
columns.

Recommended to export at least one pre-existing operation to JSON using the [Export Operations](export-as-json.md)
functionality to ensure the correct format of the JSON file.

## Syntax

```python
system.mes.inventory.operation.importFromJson(importString)
system.mes.inventory.operation.importFromJson(importBytes)
```

## Parameters

| Parameter      | Type      | Nullable | Description                    |
|----------------|-----------|----------|--------------------------------|
| `importString` | `String`  | False    | The JSON content as a string.  |
| `importBytes`  | `PyArray` | False    | The JSON content as raw bytes. |

## Returns

The number of operations successfully imported or updated.

## Code Examples

Here is an example of how to use the `importFromJson` method in the context of a [Perspective File Upload Component](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload)
`onFileReceived` event handler. Reference [Perspective - File Upload Scripting](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload/perspective-file-upload-scripting)
for more information on the `onFileReceived` event handler.

### Bytes
```python
def runAction(self, event):
	jsonBytes = event.file.getBytes()
	system.mes.inventory.operation.importFromJson(jsonBytes)
```

### String
```python
def runAction(self, event):
	jsonString = event.file.getString()
	system.mes.inventory.operation.importFromJson(jsonString)
```
