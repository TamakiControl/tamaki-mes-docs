---
sidebar_position: 54
title: "newMaterialReasonCode"
description: "Generates an empty non-persisted material reason code object to provide the structure to retrieve records from the database."
---

# system.mes.material.newMaterialReasonCode

Generates an empty non-persisted [Material Reason Codes](../../data-model/material-model/material-reason-code) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveMaterialReasonCode](./save-material-reason-code) method in order to persist the record.

## Syntax

```python
system.mes.material.newMaterialReasonCode()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created material reason code object. The following is a list of keys and default values:

| Key               | Default Value |
|-------------------|---------------|
| `lotRecordType`   | `null`        |
| `reasonCode`      | `null`        |
| `description`     | `null`        |
| `requireComments` | `null`        |
| `id`              | `null`        |
| `notes`           | `null`        |
| `enabled`         | `true`        |
| `spare1`          | `null`        |
| `spare2`          | `null`        |
| `spare3`          | `null`        |

## Code Examples

```python
# Generate the object structure for a new material reason code object with no initial arguments
newMaterialReasonCode = system.mes.material.newMaterialReasonCode()

# Set basic attributes for the new material reason code
newMaterialReasonCode['lotRecordType'] = 'CONSUME'
newMaterialReasonCode['reasonCode'] = 'SCRP001'
newMaterialReasonCode['requiredComments'] = True
# (You can continue setting other properties as needed here)

# Save the new material reason code to the system
savedMaterialReasonCode = system.mes.material.saveMaterialReasonCode(**newMaterialReasonCode)

# Output the JSON representation of the saved material reason code
print(savedMaterialReasonCode)
```
