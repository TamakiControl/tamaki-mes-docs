---
sidebar_position: 56
title: "getMaterialReasonCode"
description: "Retrieves the material reason code with the given ID or reason code."
---

# system.mes.material.getMaterialReasonCode

## Description

Retrieves a [Material Reason Codes](../../data-model/material-model/material-reason-code) record by its ID or reason code.

## Syntax

```python
system.mes.material.getMaterialReasonCode(materialReasonCodeIdOrCode)
```

## Parameters

| Parameter                    | Type     | Nullable | Description                                                    |
|------------------------------|----------|----------|----------------------------------------------------------------|
| `materialReasonCodeIdOrCode` | `String` | False    | The ID or reason code of the material reason code to retrieve. |

## Returns

Returns a JSON representation of the material reason code. Returns nothing if no material reason code is found.

| Name              | Type            | Description                                                                     |
|-------------------|-----------------|---------------------------------------------------------------------------------|
| `lotRecordType`   | `String`        | The action that was taken on a lot.                                             |
| `reasonCode`      | `String`        | The unique code identifying the reason for material handling.                   |
| `description`     | `String`        | The detailed description of the reason for the material activity.               |
| `requireComments` | `Boolean`       | Indicates whether additional comments are required when using this reason code. |
| `id`              | `String` (ULID) | The ULID of the material reason code.                                           |
| `enabled`         | `Boolean`       | Indicates if the material reason code is active and enabled.                    |
| `createdDate`     | `Instant`       | The creation date of the material reason code.                                  |
| `createdBy`       | `String`        | The person that created this material reason code.                              |
| `modifiedDate`    | `Instant`       | The modified date of the material reason code.                                  |
| `modifiedBy`      | `String`        | The person that modified this material reason code.                             |
| `notes`           | `String`        | Notes related to the material reason code.                                      |
| `spare1`          | `String`        | Additional field for user-defined context.                                      |
| `spare2`          | `String`        | Additional field for user-defined context.                                      |
| `spare3`          | `String`        | Additional field for user-defined context.                                      |

## Code Examples

```python
# Retrieve a material reason code by ID or reason code
materialReasonCode = system.mes.material.getMaterialReasonCode('SCRP001')

# Output the material reason code
print(materialReasonCode)
```
