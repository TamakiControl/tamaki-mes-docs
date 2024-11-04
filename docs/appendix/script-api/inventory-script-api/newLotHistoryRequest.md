---
sidebar_position: 2
title: "newLotHistoryRequest"
description: "Creates a new empty LotHistoryRequest."
---

# newLotHistoryRequest

## Method Description

Creates a new empty LotHistoryRequest. This function returns a JSON/Dictionary representation of the new
LotHistoryRequest. This allows users to see what fields are available and set the desired values before calling
`getLotHistory`.

## Returns

A JSON/Dictionary representation of the new LotHistoryRequest.

| Field Name           | Type      | Description                                                                                                                           |
|----------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------|
| lotIdOrName          | String    | The ID or name of the lot to retrieve history for.                                                                                    |
| lotRecordType        | String    | The type of lot record to retrieve. Possible values: CONSUME, PRODUCE, MOVE, SPLIT, MERGE, SCRAP, STATUS_CHANGE, EDIT, RECEIVE, SHIP. |
| operationId          | String    | The ID or name of the operation to filter by.                                                                                         |
| orderIdOrName        | String    | The ID or name of the order to filter by.                                                                                             |
| materialReasonCodeId | String    | The ID of the material reason code to filter by.                                                                                      |
| startDate            | ISOString | The start date of the history. Only records created after this date will be returned.                                                 |
| endDate              | ISOString | The end date of the history. Only records created before this date will be returned.                                                  |
| status               | String    | The status of the lot record to filter by. Possible values: IDLE, RUNNING, COMPLETED, FAULTED, CANCELLED, UNKNOWN.                    |

## Example Usage

```python
# Create a new empty LotHistoryRequest
request = system.mes.inventory.newLotHistoryRequest()
request['orderIdOrName'] = "Order123"
request['status'] = "COMPLETED"
request['lotRecordType'] = "PRODUCE"

history = system.mes.inventory.getLotHistory(**request)
```