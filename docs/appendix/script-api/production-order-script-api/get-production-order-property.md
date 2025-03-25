---
sidebar_position: 15
title: "getProductionOrderProperty"
description: "Retrieves a production order property by its ID or name."
---

# system.mes.productionOrder.getProductionOrderProperty

## Description

Retrieves a [Production Order Properties](../../data-model/production-order-model/production-order-property) record by its specified ID or name.

## Syntax

```python
system.mes.productionOrder.getProductionOrderProperty(idOrName)
```

## Parameters

| Parameter  | Type     | Description                                                    |
| ---------- | -------- | -------------------------------------------------------------- |
| `idOrName` | `String` | The ULID or name of the production order property to retrieve. |

## Returns

Returns a JSON representation of the production order property. Returns nothing if no production order property is found.

| Name                  | Type            | Description                                                                                                                                    |
| --------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                | `String`        | The name of the production order property.                                                                                                     |
| `description`         | `String`        | A description of the production order property.                                                                                                |
| `dataType`            | `String`        | The data type of the property (e.g., Integer, String, Float).                                                                                  |
| `lowLimit`            | `Double`        | The minimum value allowed for a numerical property.                                                                                            |
| `highLimit`           | `Double`        | The maximum value allowed for a numerical property.                                                                                            |
| `format`              | `String`        | The format of the property, if applicable.                                                                                                     |
| `unitOfMeasureId`     | `String` (ULID) | The ULID of the unit of measure for this production order property.                    |
| `unitOfMeasureName`   | `String`        | The name of the unit of measure for this production order property. For display purposes only.                                                                    |
| `unitOfMeasureSymbol` | `String`        | The symbol of the unit of measure for this production order property. For display purposes only.                                                                    |
| `options`             | `String`        | List of possible values for the property (e.g., `"[option1, option2]"`).                                                                       |
| `nullable`            | `Boolean`       | Defines if the property can accept null values.                                                                                                |
| `defaultValue`        | `Mixed`         | The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is.                           |
| `id`                  | `String` (ULID) | The ULID of the production order property.                                                                                                     |
| `notes`               | `String`        | Notes related to the production order property.                                                                                                |
| `enabled`             | `Boolean`       | Indicates if the property is active and enabled.                                                                                               |
| `spare1`              | `String`        | Additional field for user-defined context.                                                                                                     |
| `spare2`              | `String`        | Additional field for user-defined context.                                                                                                     |
| `spare3`              | `String`        | Additional field for user-defined context.                                                                                                     |

## Code Examples

```python
# Retrieve a production order property by ID or name
property = system.mes.productionOrder.getProductionOrderProperty('Batch Size')

# Output the production order property
print(property)
```
