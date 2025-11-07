---
sidebar_position: 12
title: "newProductionOrderProperty"
description: "Generates an empty non-persisted production order properties object to provide the structure to save a new record into the database."
---

# system.mes.productionOrder.newProductionOrderProperty

## Description

Generates an empty non-persisted [Production Order Properties](../../data-model/production-order-model/production-order-property) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveProductionOrderProperty](./save-production-order-property) method in order to persist the record.

## Syntax

```python
system.mes.productionOrder.newProductionOrderProperty()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created production order property object. The following is a list of keys and default values:

| Key                   | Default Value |
|-----------------------|---------------|
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
# Generate the object structure for a new production order property object with no initial arguments
productionOrderProperty = system.mes.productionOrder.newProductionOrderProperty()

# Define production order property details
productionOrderProperty['name'] = 'Batch Size'
productionOrderProperty['description'] = 'Batch size property'
# (You can continue setting other properties as needed here)

# Save the production order property
savedProperty = system.mes.productionOrder.saveProductionOrderProperty(**productionOrderProperty)

# Output the JSON representation of the saved production order property
print(savedProperty)
```
