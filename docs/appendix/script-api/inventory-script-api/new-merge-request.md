---
sidebar_position: 18
title: "newMergeRequest"
description: "Creates a new Merge Request record to be formatted with attributes."
---

# system.mes.inventory.newMergeRequest

Creates a new Merge Request record to be formatted with attributes.

## Syntax
```python
system.mes.inventory.newMergeRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Merge Request object. The following is a list of keys and default values:

| Key                              | Default Value    |
|----------------------------------|------------------|
| `type`                           | `MERGE`          |
| `sourceLotId`                    | `null`           |
| `destinationLotId`               | `null`           |
| `locationId`                     | `null`           |
| `operationId`                    | `null`           |
| `productionOrderIdOrName`        | `null`           |
| `materialReasonCodeId`           | `null`           |
| `notes`                          | `null`           |
| `spare1`                         | `null`           |
| `spare2`                         | `null`           |
| `spare3`                         | `null`           |

## Code Examples

```python
# Create a new merge request instance with no initial arguments
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