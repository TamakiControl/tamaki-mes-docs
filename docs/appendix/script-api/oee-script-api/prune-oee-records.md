---
title: pruneOeeRecords
description: Prunes OEE records older than a specified date.
sidebar_position: 58
---

# system.mes.oee.pruneOeeRecords

## Description

Prunes OEE records from the database that are older than a specified date. This is a destructive operation and cannot be undone.

## Permissions

This method requires the `OEE.WRITE.DELETE` permission.

## Syntax

```python
# Run method with prune date as Date object
system.mes.oee.pruneOeeRecords(locationIdsOrPaths, pruneBeforeDate)

# Run method with prune date in milliseconds as Long object
system.mes.oee.pruneOeeRecords(locationIdsOrPaths, pruneBeforeDateMillis) 
```

## Parameters

| Parameter               | Type          | Nullable | Description                                                                            |
|-------------------------|---------------|----------|----------------------------------------------------------------------------------------|
| `locationIdsOrPaths`    | `Set<String>` | True     | A set of location IDs or paths to prune. If empty, all locations are considered.       |
| `pruneBeforeDate`       | `Date`        | False    | All records created before this date will be deleted.                                  |
| `pruneBeforeDateMillis` | `Long`        | False    | All records created before the date defined by `Instant.ofEpochMilli` will be deleted. |

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
# system.mes.oee.pruneOeeRecords(set(), cutoff_date)
```
