---
sidebar_position: 55
title: "saveMaterialReasonCode"
description: "Creates or updates a material reason code with specified parameters."
---

# system.mes.material.saveMaterialReasonCode

## Description

Creates or updates a [Material Reason Codes](../../data-model/material-model/material-reason-code) record in the system based on the provided parameters.


## Permissions

This method requires the `MATERIAL.WRITE.SAVE` permission.

## Syntax

```python
system.mes.material.saveMaterialReasonCode(**material_reason_code_data)
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
new_material_reason_code = system.mes.material.newMaterialReasonCode()
new_material_reason_code['lotRecordType'] = 'CONSUME'
new_material_reason_code['reasonCode'] = 'SCRP001'
material_reason_code_data['requireComments'] = True
saved_material_reason_code = system.mes.material.saveMaterialReasonCode(**new_material_reason_code)

# Output the JSON representation of the saved material reason code
print(saved_material_reason_code)

# Generate the object structure for another new material reason code to update the previous material reason code
material_reason_code_data = system.mes.material.newMaterialReasonCode()

# Set basic attributes for the updated material reason code
material_reason_code_data['id'] = saved_material_reason_code.id
material_reason_code_data['lotRecordType'] = 'CONSUME'
material_reason_code_data['reasonCode'] = 'SCRP001'
material_reason_code_data['description'] = 'Material scrapped due to contamination'
material_reason_code_data['requireComments'] = True
# (You can continue setting other properties as needed here)

# Save the material reason code to update it in the system
updated_material_reason_code = system.mes.material.saveMaterialReasonCode(**material_reason_code_data)

# Output the JSON representation of the updated material reason code
print(updated_material_reason_code)
```
