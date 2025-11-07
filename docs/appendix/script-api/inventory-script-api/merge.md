---
sidebar_position: 19
title: "merge"
description: "Merges inventory from the MES based on the provided parameters."
---

# system.mes.inventory.merge

Merges inventory from the MES based on the provided parameters.

## Syntax

```python
system.mes.inventory.merge(**mergeRequest)
```

## Parameters

| Parameter                 | Type            | Nullable | Description                                                                                                                               |
|---------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                    | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `sourceLotId`             | `String` (ULID) | False    | The ID of the lot that will be merged and closed.                                                                                         |
| `destinationLotId`        | `String` (ULID) | False    | The ID of the final inventory lot that will be merged into.                                                                               |
| `locationId`              | `String` (ULID) | True     | The ID of the location the merged inventory goes to.                                                                                      |
| `operationId`             | `String` (ULID) | True     | The ID of the operation merging this inventory.                                                                                           |
| `productionOrderIdOrName` | `String`        | True     | The ID or name of the production order associated with the merge.                                                                         |
| `materialReasonCodeId`    | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `inventoryOperationId`    | `String` (ULID) | True     | The ID of the inventory operation related to this merge.                                                                                  |
| `notes`                   | `String`        | True     | Notes related to the merge request.                                                                                                       |
| `spare1`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for a Merge Request.

## Code Examples

```python
# Generate the object structure for a new merge request object with no initial arguments
newRequest = system.mes.inventory.newMergeRequest()

# Set basic attributes for the new merge request
newRequest['sourceLotId'] = '01JJD0ST06-APPRGRCY-25ZQ49FR'
newRequest['destinationLotId'] = '01JJCPQWYG-T9CW4G6Z-96XBWYQB'
# (You can continue setting other properties as needed here)

# Merge the request
mergedRequest = system.mes.inventory.merge(**newRequest)

# Output the JSON representation of the merged request
print(mergedRequest)
```
