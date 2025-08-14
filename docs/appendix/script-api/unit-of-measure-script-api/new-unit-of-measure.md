---
sidebar_position: 2
title: "newUnitOfMeasure"
description: "Generates an empty non-persisted unit of measure object to provide the structure to save a new record into the database."
---

# system.mes.unitOfMeasure.newUnitOfMeasure

## Description

Generates an empty non-persisted [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveUnitOfMeasure](./save-unit-of-measure) method in order to persist the record.

## Syntax

```python
system.mes.unitOfMeasure.newUnitOfMeasure()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created unit of measure object. The following is a list of keys and default values:

| Key       | Default Value |
|-----------|---------------|
| `name`    | `null`        |
| `symbol`  | `null`        |
| `id`      | `null`        |
| `notes`   | `null`        |
| `enabled` | `true`        |
| `spare1`  | `null`        |
| `spare2`  | `null`        |
| `spare3`  | `null`        |

## Code Examples

```python
# Generate the object structure for a new unit of measure object with no initial arguments
new_uom = system.mes.unitOfMeasure.newUnitOfMeasure()

# Set basic attributes for the new unit of measure
new_uom['name'] = 'Pound'
new_uom['symbol'] = 'lb'
# (You can continue setting other properties as needed here)

# Save the new unit of measure to the system
saved_uom = system.mes.unitOfMeasure.saveUnitOfMeasure(**new_uom)

# Output the JSON representation of the saved unit of measure
print(saved_uom)
```
