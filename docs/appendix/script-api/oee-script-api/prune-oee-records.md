---
title: pruneOeeRecords
description: Prunes OEE records older than a specified date.
sidebar_position: 64
---

# system.mes.oee.pruneOeeRecords

Prunes OEE records from the database that are older than a specified date. This is a destructive operation and cannot be undone.

## Permissions

This method requires the `OEE.WRITE.DELETE` permission.

## Syntax

```python
system.mes.oee.pruneOeeRecords(locationIdsOrPaths, pruneBeforeDate)
```

## Parameters

| Parameter            | Type          | Nullable | Description                                                                       |
| -------------------- | ------------- | -------- | --------------------------------------------------------------------------------- |
| `locationIdsOrPaths` | `Set<String>` | True     | A set of location IDs or paths to prune. If `None`, all locations are considered. |
| `pruneBeforeDate`    | `Date`        | False    | All records created before this date will be deleted.                             |

## Returns

This method does not return a value.

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Define the cutoff date for pruning (e.g., 90 days ago)
cutoff_millis = Date().getTime() - TimeUnit.DAYS.toMillis(90)
cutoff_date = Date(cutoff_millis)

# Specify a set of locations to prune
locations_to_prune = {"Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"}

# Prune the records
try:
    system.mes.oee.pruneOeeRecords(locations_to_prune, cutoff_date)
    print "Successfully pruned records older than", cutoff_date
except Exception as e:
    print "Error during pruning:", str(e)

# Prune records for all locations
# system.mes.oee.pruneOeeRecords(None, cutoff_date)
```
