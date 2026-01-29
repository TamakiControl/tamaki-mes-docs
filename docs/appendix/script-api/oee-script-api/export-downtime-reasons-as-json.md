---
title: exportDowntimeReasonsAsJson
description: 'Exports OEE Downtime Reasons to a JSON file.'
sidebar_position: 41
---

# system.mes.oee.exportDowntimeReasonsAsJson

Exports OEE Downtime Reasons to a JSON file.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.exportDowntimeReasonsAsJson([idsOrPaths])
```

## Parameters

| Parameter    | Type           | Nullable | Description                                                                                                             |
| ------------ | -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `idsOrPaths` | `List<String>` | True     | (Optional) A list of IDs or paths of the OEE Downtime Reasons to export. If omitted, all downtime reasons are exported. |

## Returns

| Type      | Description                            |
| --------- | -------------------------------------- |
| `bytes[]` | The JSON file content as a byte array. |

## Code Examples

```python
# Export all downtime reasons
json_bytes = system.mes.oee.exportDowntimeReasonsAsJson()
system.file.writeFile("downtime_reasons.json", json_bytes)

# Export specific downtime reasons
ids = ["a1b2c3d4-e5f6-7890-1234-567890abcdef", "b2c3d4e5-f6a7-8901-2345-67890abcdef1"]
json_bytes_specific = system.mes.oee.exportDowntimeReasonsAsJson(ids)
system.file.writeFile("specific_downtime_reasons.json", json_bytes_specific)
```
