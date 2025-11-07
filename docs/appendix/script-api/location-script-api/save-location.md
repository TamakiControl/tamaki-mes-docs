---
sidebar_position: 3
title: "saveLocation"
description: "Creates or updates a location with specified parameters."
---

# system.mes.location.saveLocation

## Description

Creates or updates a [Locations](../../data-model/location-model/location) record in the system based on the provided parameters.

## Syntax

```python
system.mes.location.saveLocation(**location_data)
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

Returns a JSON representation of the saved location.

## Code Examples

```python
# Generate the object structure for a new location object, set the name and save it
new_location = system.mes.location.newLocation()
new_location['name'] = 'Warehouse'
saved_location = system.mes.location.saveLocation(**new_location)

# Output the JSON representation of the saved location
print(saved_location)

# Generate the object structure for another new location object to update the previous location
location_data = system.mes.location.newLocation()

# Set basic attributes for the updated location
location_data['id'] = saved_location.id
location_data['name'] = 'Warehouse'
location_data['description'] = 'Main storage location for raw materials.'
location_data['type'] = 'AREA'
location_data['processType'] = 'STORAGE'
location_data['sortOrder'] = 1
# (You can continue setting other properties as needed here)

# Save the location to update it in the system
updated_location = system.mes.location.saveLocation(**location_data)

# Output the JSON representation of the updated location
print(updated_location)
```
