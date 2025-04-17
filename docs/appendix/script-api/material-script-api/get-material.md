---
sidebar_position: 19
title: "getMaterial"
description: "Retrieves the material with the given ID or path."
---

# system.mes.material.getMaterial

## Description

Retrieves a [Materials](../../data-model/material-model/material) record by its ID or path.

## Syntax

```python
system.mes.material.getMaterial(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                                 |
| ---------- | -------- | ------------------------------------------- |
| `idOrPath` | `String` | The ID or path of the material to retrieve. |

## Returns

Returns a JSON representation of the material. Returns nothing if no material is found.

| Name              | Type            | Description                                                    |
| ----------------- | --------------- | -------------------------------------------------------------- |
| `name`            | `String`        | The name of the material.                                      |
| `description`     | `String`        | The description of the material.                               |
| `path`            | `String`        | The path to the material.                                      |
| `materialClassId` | `String` (ULID) | The ULID of the material class associated with this material.  |
| `erpId`           | `String` (ULID) | The ULID of the erp associated with this material.             |
| `unitOfMeasureId` | `String` (ULID) | The ULID of the unit of measure associated with this material. |
| `shelfLifeDays`   | `Integer`       | The shelf life in days of this material.                       |
| `id`              | `String` (ULID) | The ULID of the material.                                      |
| `notes`           | `String`        | Notes related to the material.                                 |
| `enabled`         | `Boolean`       | Indicates if the material is active and enabled.               |
| `spare1`          | `String`        | Additional field for user-defined context.                     |
| `spare2`          | `String`        | Additional field for user-defined context.                     |
| `spare3`          | `String`        | Additional field for user-defined context.                     |

## Code Examples

```python
# Retrieve a material by ID or path
material = system.mes.material.getMaterial('IRB/5391537510212')

# Output the material
print(material)
```
