---
sidebar_position: 28
title: "newProperty"
description: "Generates an empty non-persisted properties object to provide the structure to save a new record into the database."
---

# system.mes.material.newProperty

## Description

Generates an empty non-persisted [Material Properties](../../data-model/material-model/material-property) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveProperty](./save-property) method in order to persist the record.

## Syntax

```python
system.mes.material.newProperty()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created material property object. The following is a list of keys and default values:

| Key                   | Default Value |
| --------------------- | ------------- |
| `materialClassId`     | `null`        |
| `name`                | `null`        |
| `description`         | `null`        |
| `dataType`            | `String`      |
| `lowLimit`            | `null`        |
| `highLimit`           | `null`        |
| `format`              | `null`        |
| `unitOfMeasureId`     | `null`        |
| `unitOfMeasureName`   | `null`        |
| `unitOfMeasureSymbol` | `null`        |
| `options`             | `null`        |
| `nullable`            | `false`       |
| `defaultValue`        | `null`        |
| `id`                  | `null`        |
| `notes`               | `null`        |
| `enabled`             | `true`        |
| `spare1`              | `null`        |
| `spare2`              | `null`        |
| `spare3`              | `null`        |

## Code Examples

```python
# Generate the object structure for a new property object with no initial arguments
new_property = system.mes.material.newProperty()

# Define property details
new_property['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
new_property['name'] = 'Density'
# (You can continue setting other properties as needed here)

# Save the property
saved_property = system.mes.material.saveProperty(**new_property)

# Output the JSON representation of the saved property
print(saved_property)
```
