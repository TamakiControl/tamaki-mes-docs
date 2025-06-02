---
sidebar_position: 24
title: "importMaterialsFromJson"
description: "Imports materials from a JSON file provided as a string or as raw bytes"
---

# system.mes.material.importMaterialsFromJson

## Description

Imports [Materials](../../data-model/material-model/material) from a JSON file provided as a string or as raw bytes.
The service layer will parse the JSON content and create or update material entities based on the 'name' and 'location'
columns.

Recommended to export at least one pre-existing material to JSON using the [Export Materials](export-materials-as-json.md)
functionality to ensure the correct format of the JSON file.

## Syntax

```python
system.mes.material.importMaterialsFromJson(importString)
system.mes.material.importMaterialsFromJson(importBytes)
```

## Parameters

Either a string or bytes array representing the JSON content.

| Parameter          | Type     | Description                                                   |
| ------------------ |----------| ------------------------------------------------------------- |
| `importString`     | `String` | The JSON content as a string.                                  |
| `importBytes`      | `PyArray` | The JSON content as raw bytes.                                 |

## Returns

The number of materials successfully imported or updated.

## Code Examples

Here is an example of how to use the `importMaterialsFromJson` method in the context of a [Perspective File Upload Component](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload)
`onFileReceived` event handler. Reference [Perspective - File Upload Scripting](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload/perspective-file-upload-scripting)
for more information on the `onFileReceived` event handler.

### Bytes
```python
def runAction(self, event):
	jsonBytes = event.file.getBytes()
	system.mes.material.importMaterialsFromJson(jsonBytes)
```

### String
```python
def runAction(self, event):
	jsonString = event.file.getString()
	system.mes.material.importFromJson(jsonString)
```
