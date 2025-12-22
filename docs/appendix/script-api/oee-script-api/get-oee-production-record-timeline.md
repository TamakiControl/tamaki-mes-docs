---
sidebar_position: 19
title: "getOeeProductionRecordTimeline"
description: "Gets production timeline data."
---

# system.mes.oee.getOeeProductionRecordTimeline

## Description

Retrieves production timeline data for OEE records, providing a chronological view of production activities for a specific location within a time range.

## Syntax

```python
system.mes.oee.getOeeProductionRecordTimeline(locationIdOrPath, startDate, endDate)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                       |
| ------------------ | -------- | -------- | ------------------------------------------------- |
| `locationIdOrPath` | `String` | False    | The location ID or path to get timeline data for. |
| `startDate`        | `Date`   | False    | Start date for the timeline.                      |
| `endDate`          | `Date`   | False    | End date for the timeline.                        |

## Returns

Returns a JSON object containing production timeline data.

## Code Examples

```python
# Get production timeline
start_date = system.time.now()
end_date = system.time.addHours(system.time.now(), -6)

timeline = system.mes.oee.getOeeProductionRecordTimeline(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date
)

# Output the timeline data
print(timeline)
```
