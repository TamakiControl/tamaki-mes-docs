---
title: exportDowntimeReasonsAsCsv
sidebar_position: 42
---

## system.mes.oee.exportDowntimeReasonsAsCsv

Exports OEE Downtime Reasons to a CSV file.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.exportDowntimeReasonsAsCsv([idsOrPaths])
```

## Parameters

| Parameter    | Type           | Nullable | Description                                                                                                             |
| ------------ | -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `idsOrPaths` | `List<String>` | True     | (Optional) A list of IDs or paths of the OEE Downtime Reasons to export. If omitted, all downtime reasons are exported. |

## Returns

| Type      | Description                           |
| --------- | ------------------------------------- |
| `bytes[]` | The CSV file content as a byte array. |

## Code Examples

```python
# Export all downtime reasons
csv_bytes = system.mes.oee.exportDowntimeReasonsAsCsv()
system.file.writeFile("downtime_reasons.csv", csv_bytes)

# Export specific downtime reasons
ids = ["a1b2c3d4-e5f6-7890-1234-567890abcdef", "b2c3d4e5-f6a7-8901-2345-67890abcdef1"]
csv_bytes_specific = system.mes.oee.exportDowntimeReasonsAsCsv(ids)
system.file.writeFile("specific_downtime_reasons.csv", csv_bytes_specific)
```
