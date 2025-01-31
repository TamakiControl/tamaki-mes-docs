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

| Parameter                  | Type            | Description                                                                                                                      |
|----------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------|
| `name`                     | `String`        | The name of the location.                                                                                                        |
| `description`              | `String`        | A detailed description of the location.                                                                                          |
| `parentId`                 | `String`        | The ULID of the parent location.                                                                                                 |
| `type`                     | `String`        | The type of the location (e.g., ENTERPRISE, COMPANY, SITE, AREA, LINE, CELL_GROUP, CELL, UNIT).                                  |
| `processType`              | `String`        | The process type for the location (e.g., STORAGE, CONTINUOUS, BATCH, DISCRETE, NONE).                                            |
| `sortOrder`                | `Integer`       | Determines the display order of the location.                                                                                    |
| `allowNegativeInventory`   | `Boolean`       | Allows inventory to go negative at this location.                                                                                |
| `storageCapacity`          | `Double`        | Maximum storage capacity allowed at the location.                                                                                |
| `storageCapacityUnitId`    | `String`        | The ULID for the storage capacity unit.                                                                                          |
| `lotStorageStrategy`       | `String`        | Defines the lot storage strategy (e.g, ALLOW_MULTIPLE, ALLOW_SINGLE_OR_THROW, MERGE_INTO_PREVIOUS, MERGE_INTO_NEW, NO_STORAGE).  |
| `lotUseStrategy`           | `String`        | Defines the lot usage strategy, such as FIFO or FEFO.                                                                            |
| `path`                     | `String`        | Path of the location within the hierarchy.                                                                                       |
| `id`                       | `String` (ULID) | The ULID of the location (optional, used for updating an existing location).                                                     |
| `notes`                    | `String`        | Notes related to the location.                                                                                                   |
| `enabled`                  | `Boolean`       | Indicates if the location is active and enabled.                                                                                 |
| `spare1`                   | `String`        | Additional field for user-defined context.                                                                                       |
| `spare2`                   | `String`        | Additional field for user-defined context.                                                                                       |
| `spare3`                   | `String`        | Additional field for user-defined context.                                                                                       |

## Returns

Returns a JSON representation of the saved location.

## Code Examples

```python
# Create a new location instance, set the name and save it
new_location = system.mes.location.newLocation()
new_location['name'] = 'Warehouse'
saved_location = system.mes.location.saveLocation(**new_location)

# Output the JSON representation of the saved location
print(saved_location)

# Create another new location instance to update the previous location
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