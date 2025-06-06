---
sidebar_position: 36
title: "importFromJson"
description: "Imports locations from a JSON file provided as a string or as raw bytes"
---

# system.mes.location.importFromJson

## Description

Imports [Locations](../../data-model/location-model/location) from a JSON file provided as a string or as raw bytes.
The service layer will parse the JSON content and create or update location entities based on the 'name' and 'location'
columns.

Recommended to export at least one pre-existing location to JSON using the [Export Locations](export-as-json.md)
functionality to ensure the correct format of the JSON file.

## Syntax

```python
system.mes.location.importFromJson(importString)
system.mes.location.importFromJson(importBytes)
```

## Parameters

Either a string or bytes array representing the JSON content.

| Parameter          | Type     | Description                                                   |
| ------------------ |----------| ------------------------------------------------------------- |
| `importString`     | `String` | The JSON content as a string.                                  |
| `importBytes`      | `PyArray` | The JSON content as raw bytes.                                 |

## Returns

The number of locations successfully imported or updated.

## Code Examples

Here is an example of how to use the `importFromJson` method in the context of a [Perspective File Upload Component](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload)
`onFileReceived` event handler. Reference [Perspective - File Upload Scripting](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload/perspective-file-upload-scripting)
for more information on the `onFileReceived` event handler.

### Bytes
```python
def runAction(self, event):
	jsonBytes = event.file.getBytes()
	system.mes.location.importFromJson(jsonBytes)
```

### String
```python
def runAction(self, event):
	jsonString = event.file.getString()
	system.mes.location.importFromJson(jsonString)
```