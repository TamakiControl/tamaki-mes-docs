---
sidebar_position: 55
title: "saveMaterialReasonCode"
description: "Creates or updates a material reason code with specified parameters."
---

# system.mes.material.saveMaterialReasonCode

## Description

Creates or updates a [Material Reason Codes](../../data-model/material-model/material-reason-code) record in the system based on the provided parameters.

## Syntax

```python
system.mes.material.saveMaterialReasonCode(**materialReasonCodeData)
```

## Parameters

| Parameter         | Type            | Nullable | Description                                                                                          |
|-------------------|-----------------|----------|------------------------------------------------------------------------------------------------------|
| `lotRecordType`   | `String`        | False    | The action that was taken on a lot.                                                                  |
| `reasonCode`      | `String`        | False    | The unique code identifying the reason for material handling.                                        |
| `description`     | `String`        | True     | The detailed description of the reason for the material activity.                                    |
| `requireComments` | `Boolean`       | True     | Indicates whether additional comments are required when using this reason code.                      |
| `id`              | `String` (ULID) | True     | The ULID of the material reason code (optional, used for updating an existing material reason code). |
| `notes`           | `String`        | True     | Notes related to the material reason code.                                                           |
| `enabled`         | `Boolean`       | True     | Indicates if the material reason code is active and enabled. Default value is `true`.                |
| `spare1`          | `String`        | True     | Additional field for user-defined context.                                                           |
| `spare2`          | `String`        | True     | Additional field for user-defined context.                                                           |
| `spare3`          | `String`        | True     | Additional field for user-defined context.                                                           |

## Returns

Returns a JSON representation of the saved material reason code.

## Code Examples

```python
# Generate the object structure for a new material reason code object, set the initial arguments and save it
newMaterialReasonCode = system.mes.material.newMaterialReasonCode()
newMaterialReasonCode['lotRecordType'] = 'CONSUME'
newMaterialReasonCode['reasonCode'] = 'SCRP001'
materialReasonCodeData['requireComments'] = True
savedMaterialReasonCode = system.mes.material.saveMaterialReasonCode(**newMaterialReasonCode)

# Output the JSON representation of the saved material reason code
print(savedMaterialReasonCode)

# Generate the object structure for another new material reason code to update the previous material reason code
materialReasonCodeData = system.mes.material.newMaterialReasonCode()

# Set basic attributes for the updated material reason code
materialReasonCodeData['id'] = savedMaterialReasonCode.id
materialReasonCodeData['lotRecordType'] = 'CONSUME'
materialReasonCodeData['reasonCode'] = 'SCRP001'
materialReasonCodeData['description'] = 'Material scrapped due to contamination'
materialReasonCodeData['requireComments'] = True
# (You can continue setting other properties as needed here)

# Save the material reason code to update it in the system
updatedMaterialReasonCode = system.mes.material.saveMaterialReasonCode(**materialReasonCodeData)

# Output the JSON representation of the updated material reason code
print(updatedMaterialReasonCode)
```
