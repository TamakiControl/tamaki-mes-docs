---
sidebar_position: 18
title: "newMergeRequest"
description: "Generates an empty non-persisted merge request to provide the structure to save a new record into the database."
---

# system.mes.inventory.newMergeRequest

Generates an empty non-persisted Merge Request to provide the structure required by the API to save a new record into the database.
This method must be combined with the [merge](./merge) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newMergeRequest()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Merge Request object. The following is a list of keys and default values:

| Key                       | Default Value |
|---------------------------|---------------|
| `type`                    | `MERGE`       |
| `sourceLotId`             | `null`        |
| `destinationLotId`        | `null`        |
| `locationId`              | `null`        |
| `operationId`             | `null`        |
| `inventoryOperationId`    | `null`        |
| `productionOrderIdOrName` | `null`        |
| `materialReasonCodeId`    | `null`        |
| `notes`                   | `null`        |
| `spare1`                  | `null`        |
| `spare2`                  | `null`        |
| `spare3`                  | `null`        |

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
