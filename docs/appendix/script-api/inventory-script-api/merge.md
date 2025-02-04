---
sidebar_position: 19
title: "merge"
description: "Merges inventory from the MES based on the provided parameters."
---

# system.mes.inventory.merge

Merges inventory from the MES based on the provided parameters.

## Syntax
```python
system.mes.inventory.merge(**merge_request)
```

## Parameters

| Parameter                       | Type            | Description                                                                                                                               |
|---------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                          | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `sourceLotId`                   | `String` (ULID) | The ID of the lot that will be merged and closed.                                                                                         |
| `destinationLotId`              | `String` (ULID) | The ID of the final material lot that will be merged into.                                                                                |
| `locationId`                    | `String` (ULID) | The ID of the location the merged inventory goes to.                                                                                      |
| `operationId`                   | `String` (ULID) | The ID of the operation merging this inventory.                                                                                           |
| `productionOrderIdOrName`       | `String`        | The ID or name of the production order associated with the merge.                                                                         |
| `materialReasonCodeId`          | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `notes`                         | `String`        | Notes related to the merge request.                                                                                                       |
| `spare1`                        | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                        | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                        | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of a material lot record for a Merge Request.

## Code Examples

```python
# Generate the object structure for a new merge request object with no initial arguments
new_request = system.mes.inventory.newMergeRequest()

# Set basic attributes for the new merge request
new_request['sourceLotId'] = '01JJD0ST06-APPRGRCY-25ZQ49FR'
new_request['destinationLotId'] = '01JJCPQWYG-T9CW4G6Z-96XBWYQB'
# (You can continue setting other properties as needed here)

# Merge the request
merged_request = system.mes.inventory.merge(**new_request)

# Output the JSON representation of the merged request
print(merged_request)
```