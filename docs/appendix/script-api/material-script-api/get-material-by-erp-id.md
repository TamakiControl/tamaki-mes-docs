---
sidebar_position: 20
title: "getMaterialByErpId"
description: "Retrieves the material with the given erp ID."
---

# system.mes.material.getMaterialByErpId

## Description

Retrieves a [Materials](../../data-model/material-model/material) record given an erp ID.


## Permissions

This method requires the `MATERIAL.READ.GET` permission.

## Syntax

```python
system.mes.material.getMaterialByErpId(erpId)
```

## Parameters

| Parameter | Type            | Nullable | Description                                                 |
|-----------|-----------------|----------|-------------------------------------------------------------|
| `erpId`   | `String` (ULID) | False    | The ID of the erp associated with the material to retrieve. |

## Returns

Returns a JSON representation of the material. Returns nothing if no material is found.

| Name              | Type            | Description                                                    |
|-------------------|-----------------|----------------------------------------------------------------|
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
# Retrieve a material with the given erp ID
material = system.mes.material.getMaterialByErpId('1030-8450-01')

# Output the material
print(material)
```
