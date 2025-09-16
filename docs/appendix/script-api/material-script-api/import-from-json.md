---
sidebar_position: 24
title: "importFromJson"
description: "Imports materials from a JSON file provided as raw bytes"
---

# system.mes.material.importFromJson

## Description

Imports [Materials](../../data-model/material-model/material) from a JSON file provided as raw bytes.
The service layer parses the JSON content and creates or updates material entities.

Recommended to export at least one pre-existing material to JSON using the [Export Materials](export-materials-as-json.md)
functionality to ensure the correct format of the JSON file.

## Syntax

```python
system.mes.material.importFromJson(importBytes)
```

## Parameters

A bytes array representing the JSON content.

| Parameter      | Type      | Nullable | Description                    |
|----------------|-----------|----------|--------------------------------|
| `importBytes`  | `PyArray` | False    | The JSON content as raw bytes. |

## Returns

An ApiResponse object where `data` is the number of materials successfully imported or updated.

## Code Examples

Here is an example of how to use the `importFromJson` method in the context of a [Perspective File Upload Component](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload)
`onFileReceived` event handler. Reference [Perspective - File Upload Scripting](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload/perspective-file-upload-scripting)
for more information on the `onFileReceived` event handler.

```python
def runAction(self, event):
	jsonBytes = event.file.getBytes()
	response = system.mes.material.importFromJson(jsonBytes)
	# response["data"] contains the number imported
```
