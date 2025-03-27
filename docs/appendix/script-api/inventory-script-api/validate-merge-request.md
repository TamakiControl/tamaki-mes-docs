---
sidebar_position: 20
title: "validateMergeRequest"
description: "Validates a merge request based on the provided parameters."
---

# system.mes.inventory.validateMergeRequest

Validates a merge request based on the provided parameters.

## Syntax

```python
system.mes.inventory.validateMergeRequest(**merge_request)
```

## Parameters

| Parameter                 | Type            | Description                                                                                                                               |
| ------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                    | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `sourceLotId`             | `String` (ULID) | The ID of the lot that will be merged and closed.                                                                                         |
| `destinationLotId`        | `String` (ULID) | The ID of the final inventory lot that will be merged into.                                                                               |
| `locationId`              | `String` (ULID) | The ID of the location the merged inventory goes to.                                                                                      |
| `operationId`             | `String` (ULID) | The ID of the operation merging this inventory.                                                                                           |
| `productionOrderIdOrName` | `String`        | The ID or name of the production order associated with the merge.                                                                         |
| `materialReasonCodeId`    | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `notes`                   | `String`        | Notes related to the merge request.                                                                                                       |
| `spare1`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new merge request object with no initial arguments
merge_request = system.mes.inventory.newMergeRequest()

# Set basic attributes for the new merge request
merge_request['sourceLotId'] = '01JJD0ST06-APPRGRCY-25ZQ49FR'
merge_request['destinationLotId'] = '01JJCPQWYG-T9CW4G6Z-96XBWYQB'
# (You can continue setting other properties as needed here)

# Validate merge request parameters
validation_errors = system.mes.inventory.validateMergeRequest(**merge_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Merge request parameters are valid.')
```
