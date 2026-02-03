---
sidebar_position: 16
title: "newProperty"
description: "Generates an empty non-persisted properties object to provide the structure to save a new record into the database."
---

# system.mes.location.newProperty

## Description

Generates an empty non-persisted [Location Properties](../../data-model/location-model/location-property) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveProperty](./save-property) method in order to persist the record.

## Syntax

```python
system.mes.location.newProperty()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created location property object. The following is a list of keys and default values:

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
# Generate the object structure for a new property object with no initial arguments
newProperty = system.mes.location.newProperty()

# Define property details
newProperty['name'] = 'Temperature'
newProperty['dataType'] = 'Float'
newProperty['unitOfMeasureId'] = '01JAP8RJBN-4VYZUKE1-LY2QHV8X'
newProperty['nullable'] = False
newProperty['lowLimit'] = -20
newProperty['highLimit'] = 50
# (You can continue setting other properties as needed here)

# Save the property
savedProperty = system.mes.location.saveProperty(**newProperty)

# Output the JSON representation of the saved property
print(savedProperty)
```
