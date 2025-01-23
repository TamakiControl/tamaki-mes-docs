---
sidebar_position: 5
title: "getLocation"
description: "Retrieves the location with the given id or path."
---

# system.mes.location.getLocation

## Description

Retrieves a [Locations](../../data-model/location-model/location) record by its id or path.

## Syntax
```python
system.mes.location.getLocation(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                                 |
|------------|----------|---------------------------------------------|
| `idOrPath` | `String` | The ID or path of the location to retrieve. |

## Returns

Returns a JSON representation of the location.

| Name                       | Type            | Description                                                                                                                      |
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

## Code Examples

```python
# Retrieve a location by ID or path
location = system.mes.location.getLocation('DariyCo/Plant1/Line1')

# Output the location
print(location)
```