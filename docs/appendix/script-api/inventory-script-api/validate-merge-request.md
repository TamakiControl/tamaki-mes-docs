---
sidebar_position: 20
title: "validateMergeRequest"
description: "Validates the specified parameters for a merge request and returns any validation errors."
---

# system.mes.inventory.validateMergeRequest

Validates the specified parameters for a merge request and returns any validation errors. This only checks if the merge request can be processed based on the attributes given, without actually performing the merge. Use this function to verify your parameters before executing the actual merge operation.


## Permissions

This method requires the `INVENTORY.READ.VALIDATE` permission.

## Syntax

```python
system.mes.inventory.validateMergeRequest(**merge_request)
```

## Parameters

| Parameter                 | Type            | Nullable | Description                                                                                                                               |
|---------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                    | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `sourceLotId`             | `String` (ULID) | False    | The ID of the lot that will be merged and closed.                                                                                         |
| `destinationLotId`        | `String` (ULID) | False    | The ID of the final inventory lot that will be merged into.                                                                               |
| `locationId`              | `String` (ULID) | True     | The ID of the location the merged inventory goes to.                                                                                      |
| `operationId`             | `String` (ULID) | True     | The ID of the operation merging this inventory.                                                                                           |
| `inventoryOperationId`    | `String` (ULID) | True     | The ID of the inventory operation related to this merge action.                                                                           |
| `productionOrderIdOrName` | `String`        | True     | The ID or name of the production order associated with the merge.                                                                         |
| `materialReasonCodeId`    | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `notes`                   | `String`        | True     | Notes related to the merge request.                                                                                                       |
| `spare1`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |

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
