---
sidebar_position: 4
title: "validateLocation"
description: "Validates the specified parameters for a location."
---

# system.mes.location.validateLocation

Validates the specified parameters for a location and returns any validation errors.

## Method Description

This function checks the provided parameters for a location, such as name, type, and storage attributes, to ensure they
meet validation requirements. If any issues are found, it returns a JSON dictionary containing details of the validation
violations.

## Returns

A JSON dictionary where keys are field names and values are lists of validation violation messages.

## Parameters

| Parameter                | Type    | Description                                                                 |
|--------------------------|---------|-----------------------------------------------------------------------------|
| `id`                     | String  | The ULID of the location.                                                   |
| `notes`                  | String  | Notes related to the location.                                              |
| `enabled`                | Boolean | Indicates if the location is active and enabled.                            |
| `name`                   | String  | The name of the location.                                                   |
| `description`            | String  | A detailed description of the location.                                     |
| `parentId`               | String  | The ULID of the parent location.                                            |
| `type`                   | String  | The type of the location (e.g., Enterprise, Site, Plant, Area, Cell, Unit). |
| `processType`            | String  | The process type for the location (e.g., Storage, Continuous, Batch).       |
| `sortOrder`              | Integer | Determines the display order of the location.                               |
| `allowStorage`           | Boolean | Indicates if storage is permitted at this location.                         |
| `allowNegativeInventory` | Boolean | Allows inventory to go negative at this location.                           |
| `storageCapacity`        | Integer | Maximum storage capacity allowed at the location.                           |
| `storageCapacityUnitId`  | String  | The ULID for the storage capacity unit.                                     |
| `maxLots`                | Integer | Maximum number of unique lots that can be stored at this location.          |
| `lotConflictStrategy`    | String  | Strategy to handle conflicts in lot usage.                                  |
| `lotUseStrategy`         | String  | Defines the lot usage strategy, such as FIFO or FEFO.                       |
| `path`                   | String  | Path of the location within the hierarchy.                                  |
| `spare1`                 | String  | Additional field for user-defined context.                                  |
| `spare2`                 | String  | Additional field for user-defined context.                                  |
| `spare3`                 | String  | Additional field for user-defined context.                                  |

## Example Usage

```python
def validateWarehouse():
    # Define location parameters
    location_data = {
        "name": "Warehouse",
        "type": "Storage",
        "enabled": True,
        "parentId": "01JAP8TF6X-7MFJQ9KJ-0C3BC2HR",
        "description": "Main storage location for raw materials",
        "allowStorage": True,
        "storageCapacity": 5000,
        "lotUseStrategy": "FIFO",
        "processType": "Batch",
        "sortOrder": 1
    }
    
    # Validate location parameters
    validation_errors = system.mes.location.validateLocation(**location_data)
    
    if validation_errors:
        print("Validation errors found:", validation_errors)
    else:
        print("Location parameters are valid.")
```