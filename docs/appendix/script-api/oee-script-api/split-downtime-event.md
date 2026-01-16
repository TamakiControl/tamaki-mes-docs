---
sidebar_position: 51
title: 'splitDowntimeEvent'
description: 'Splits a downtime event at a specified date and time.'
---

# system.mes.oee.splitDowntimeEvent

Splits an existing downtime event (an OEE state record) at a specified time. This action modifies the original record, shortening its duration, and creates a new record for the remaining time. This is useful for categorizing a single downtime period with multiple causes.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.splitDowntimeEvent(oeeStateRecordId, splitDate)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                    |
| ------------------ | -------- | -------- | ---------------------------------------------- |
| `oeeStateRecordId` | `String` | False    | The ID of the OEE state record to split.       |
| `splitDate`        | `Date`   | False    | The date and time at which to split the event. |

## Returns

This method does not return a value.

## Code Examples

```python
from java.util import Date
import system.date

# The ID of the downtime event to split
state_record_id = "some-state-record-id"

# The time to split the event
split_datetime = system.date.parse("2023-10-27 14:30:00", "yyyy-MM-dd HH:mm:ss")

try:
    # Split the event
    system.mes.oee.splitDowntimeEvent(state_record_id, split_datetime)
    print "Successfully split downtime event", state_record_id

    # After splitting, you can assign different reasons to the original and new records
    # (You would need to query for the new record that was created)

except Exception as e:
    print "Error splitting event:", str(e)
```
