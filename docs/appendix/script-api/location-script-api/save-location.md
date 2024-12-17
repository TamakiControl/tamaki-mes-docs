---
sidebar_position: 3
title: "saveLocation"
description: "Creates or updates a location with specified parameters."
---

# system.mes.location.saveLocation

Creates or updates a location record in the system based on the provided parameters.

## Method Description

This function saves a new location or updates an existing one, depending on whether a ULID is provided. It allows you to
specify various details such as the name, type, and properties of the location.

## Returns

A JSON representation of the saved location.

## Parameters

| Parameter                | Type    | Description                                                                                     |
|--------------------------|---------|-------------------------------------------------------------------------------------------------|
| `id`                     | String  | The ULID of the location (optional, used for updating an existing location).                    |
| `notes`                  | String  | Notes related to the location.                                                                  |
| `enabled`                | Boolean | Indicates if the location is active and enabled.                                                |
| `name`                   | String  | The name of the location.                                                                       |
| `description`            | String  | A detailed description of the location.                                                         |
| `parentId`               | String  | The ULID of the parent location.                                                                |
| `type`                   | String  | The type of the location (e.g., ENTERPRISE, COMPANY, SITE, AREA, LINE, CELL_GROUP, CELL, UNIT). |
| `processType`            | String  | The process type for the location (e.g., STORAGE, CONTINUOUS, BATCH, DISCRETE, NONE).           |
| `sortOrder`              | Integer | Determines the display order of the location.                                                   |
| `allowStorage`           | Boolean | Indicates if storage is permitted at this location.                                             |
| `allowNegativeInventory` | Boolean | Allows inventory to go negative at this location.                                               |
| `storageCapacity`        | Integer | Maximum storage capacity allowed at the location.                                               |
| `storageCapacityUnitId`  | String  | The ULID for the storage capacity unit.                                                         |
| `maxLots`                | Integer | Maximum number of unique lots that can be stored at this location.                              |
| `lotConflictStrategy`    | String  | Strategy to handle conflicts in lot usage.                                                      |
| `lotUseStrategy`         | String  | Defines the lot usage strategy, such as FIFO or FEFO.                                           |
| `path`                   | String  | Path of the location within the hierarchy.                                                      |
| `spare1`                 | String  | Additional field for user-defined context.                                                      |
| `spare2`                 | String  | Additional field for user-defined context.                                                      |
| `spare3`                 | String  | Additional field for user-defined context.                                                      |

## Example Usage

```python
# Create a new location
location_data = {
    "name": "Warehouse",
    "type": "AREA",
    "enabled": True,
    "parentId": "01JAP8TF6X-7MFJQ9KJ-0C3BC2HR",
    "description": "Main storage location for raw materials",
    "allowStorage": True,
    "processType": "STORAGE",
    "sortOrder": 1
}

# Save or update the location
saved_location = system.mes.location.saveLocation(**new_location)
print(saved_location)
```

