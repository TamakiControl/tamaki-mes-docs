---
sidebar_position: 7
title: "getMaterialClass"
description: "Retrieves the material class with the given ID or path."
---

# system.mes.material.getMaterialClass

## Description

Retrieves a [Material Classes](../../data-model/material-model/material-class) record by its ID or path.

## Syntax

```python
system.mes.material.getMaterialClass(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                                       |
| ---------- | -------- | ------------------------------------------------- |
| `idOrPath` | `String` | The ID or path of the material class to retrieve. |

## Returns

Returns a JSON representation of the material class. Returns nothing if no material class is found.

| Name          | Type            | Description                                                   |
| ------------- | --------------- | ------------------------------------------------------------- |
| `name`        | `String`        | The name of the material class.                               |
| `description` | `String`        | The description of the material class.                        |
| `path`        | `String`        | The path to the material class.                               |
| `parentId`    | `String` (ULID) | The ULID of the parent material class to this material class. |
| `id`          | `String` (ULID) | The ULID of the material class.                               |
| `notes`       | `String`        | Notes related to the material class.                          |
| `enabled`     | `Boolean`       | Indicates if the material class is active and enabled.        |
| `spare1`      | `String`        | Additional field for user-defined context.                    |
| `spare2`      | `String`        | Additional field for user-defined context.                    |
| `spare3`      | `String`        | Additional field for user-defined context.                    |

## Code Examples

```python
# Retrieve a material class by ID or path
material_class = system.mes.material.getMaterialClass('RAW')

# Output the material class
print(material_class)
```
