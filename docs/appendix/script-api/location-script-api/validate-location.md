---
sidebar_position: 11
title: "validateLocation"
description: "Validates the specified parameters for a location and returns any validation errors."
---

# system.mes.location.validateLocation

## Description

Validates the specified parameters for a [Locations](../../data-model/location-model/location) record and returns any validation errors.
This only checks if the location object can be saved based on the attributes given, without actually creating or modifying the location. Use this function to verify your parameters before executing operations that create or modify locations.

## Syntax

```python
system.mes.location.validateLocation(**location_data)
```

## Parameters

| Parameter                | Type            | Nullable | Description                                                                                                                                                                                       |
|--------------------------|-----------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`                   | `String`        | False    | The name of the location.                                                                                                                                                                         |
| `description`            | `String`        | True     | A detailed description of the location.                                                                                                                                                           |
| `parentId`               | `String` (ULID) | True     | The ULID of the parent location.                                                                                                                                                                  |
| `type`                   | `String`        | False    | The type of the location (e.g., ENTERPRISE, COMPANY, SITE, AREA, LINE, CELL_GROUP, CELL, UNIT). Default value is `ENTERPRISE`.                                                                    |
| `processType`            | `String`        | False    | The process type for the location (e.g., STORAGE, CONTINUOUS, BATCH, DISCRETE, NONE). Default value is `NONE`.                                                                                    |
| `sortOrder`              | `Integer`       | True     | Determines the display order of the location. Default value is `0`.                                                                                                                               |
| `allowNegativeInventory` | `Boolean`       | True     | Allows inventory to go negative at this location. Default value is `false`.                                                                                                                       |
| `storageCapacity`        | `Double`        | True     | Maximum storage capacity allowed at the location.                                                                                                                                                 |
| `storageCapacityUnitId`  | `String` (ULID) | True     | The ULID for the storage capacity unit to be used as the default unit of measure for this location. See [unit_of_measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure). |
| `lotStorageStrategy`     | `String`        | True     | Defines the lot storage strategy (e.g, ALLOW_MULTIPLE, ALLOW_SINGLE_OR_THROW, MERGE_INTO_PREVIOUS, MERGE_INTO_NEW, NO_STORAGE). Default value is `NO_STORAGE`.                                    |
| `lotUseStrategy`         | `String`        | True     | Defines the lot usage strategy, such as FIFO or FEFO. Default value is `FIFO`.                                                                                                                    |
| `path`                   | `String`        | True     | Path of the location within the hierarchy.                                                                                                                                                        |
| `id`                     | `String` (ULID) | True     | The ULID of the location (optional, used for updating an existing location).                                                                                                                      |
| `notes`                  | `String`        | True     | Notes related to the location.                                                                                                                                                                    |
| `enabled`                | `Boolean`       | True     | Indicates if the location is active and enabled. Default value is `true`.                                                                                                                         |
| `spare1`                 | `String`        | True     | Additional field for user-defined context.                                                                                                                                                        |
| `spare2`                 | `String`        | True     | Additional field for user-defined context.                                                                                                                                                        |
| `spare3`                 | `String`        | True     | Additional field for user-defined context.                                                                                                                                                        |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new location object
location_data = system.mes.location.newLocation()

# Set basic attributes for the new location
location_data['name'] = 'Warehouse'
location_data['description'] = 'Main storage location for raw materials.'
location_data['type'] = 'AREA'
location_data['processType'] = 'STORAGE'
location_data['sortOrder'] = 1
# (You can continue setting other properties as needed here)

# Validate location parameters
validation_errors = system.mes.location.validateLocation(**location_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Location parameters are valid.')
```
