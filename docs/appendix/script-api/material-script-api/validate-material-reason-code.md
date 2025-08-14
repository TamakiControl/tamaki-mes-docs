---
sidebar_position: 59
title: "validateMaterialReasonCode"
description: "Validates the specified parameters for a material reason code."
---

# system.mes.material.validateMaterialReasonCode

## Description

Validates the specified parameters for a [Material Reason Codes](../../data-model/material-model/material-reason-code) record and returns any validation errors.
This only checks if the material reason code object can be saved based on the attributes given, without actually creating or modifying the material reason code. Use this function to verify your parameters before executing a save material reason code operation.

## Syntax

```python
system.mes.material.validateMaterialReasonCode(**material_reason_code_data)
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

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new material reason code object
material_reason_code_data = system.mes.material.newMaterialReasonCode()

# Set basic attributes for the new material reason code
material_reason_code_data['lotRecordType'] = 'CONSUME'
material_reason_code_data['reasonCode'] = 'SCRP001'
# (You can continue setting other properties as needed here)

# Validate material reason code parameters
validation_errors = system.mes.material.validateMaterialReasonCode(**material_reason_code_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Material reason code parameters are valid.')
```
