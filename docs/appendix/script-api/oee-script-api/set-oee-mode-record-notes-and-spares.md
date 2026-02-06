---
sidebar_position: 62
title: "setOeeModeRecordNotesAndSpares"
description: "Sets comment fields (notes, spare1, spare2, spare3) for an OEE Mode Record."
---

# system.mes.oee.getOeeRecord

## Description

Sets comment fields (notes, spare1, spare2, spare3) for an [OEE Mode Record](../../data-model/oee-model/oee-mode-record).

Accepts a full `OeeModeRecordDTO` but only updates the notes and spare fields.

The record is fetched fresh from the database by ID.

Recommended to call with setOeeModeRecordNotesAndSpares(**oeeModeRecord) where oeeModeRecord is an `OeeModeRecordDTO` object.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.setOeeModeRecordNotesAndSpares(**oeeModeRecord)
```

## Parameters

An unpacked dictionary of `OeeModeRecordDTO` fields.

| Name                         | Type                            | Nullable | Description                                                              | Default Value          |
| ---------------------------- | ------------------------------- | -------- | ------------------------------------------------------------------------ | ---------------------- |
| `id`                         | `String`                        | `True`   | The id of the OEE Mode Record                                            | `null`                 |
| `locationId`                 | `String`                        | `False`  | Identifier of the associated location where this mode was recorded       | `null`                 |
| `locationName`               | `String`                        | `True`   | Name of the associated location                                          | `null`                 |
| `locationPath`               | `String`                        | `True`   | Path of the associated location where this mode was recorded             | `null`                 |
| `code`                       | `Integer`                       | `False`  | Integer mode number                                                      | `null`                 |
| `status`                     | `Status`                        | `False`  | Status of the OEE record (running, faulted, cancelled, complete etc.)    | `UNKNOWN`              |
| `startDate`                  | `Instant`                       | `False`  | Start date and time of the mode record                                   | `Instant.now()`        |
| `endDate`                    | `Instant`                       | `True`   | End date and time of the mode record                                     | `null`                 |
| `duration`                   | `Double`                        | `False`  | Total duration of the mode record in seconds                             | `0.0`                  |
| `overrunDurationSec`         | `Double`                        | `False`  | Duration in seconds that the machine has overrun its scheduled downtime  | `0.0`                  |
| `name`                       | `String`                        | `False`  | Name of the mode                                                         | `null`                 |
| `calculationType`            | `OeeModeCalculationType`        | `False`  | Specifies how this mode should be factored into OEE calculations         | `SCHEDULED_PRODUCTION` |
| `color`                      | `String`                        | `False`  | Hex color code representing the mode visually                            | `"#000000"`            |
| `expectedDuration`           | `Double`                        | `True`   | Expected duration of the mode in seconds                                 | `0.0`                  |
| `notes`                      | `String`                        | `True`   | Notes associated with the OEE Mode Record                                | `null`                 |
| `enabled`                    | `boolean`                       | `True`   | Indicates whether the OEE Mode Record is enabled                         | `true`                 |
| `spare1`                     | `String`                        | `True`   | Extra field 1                                                            | `null`                 |
| `spare2`                     | `String`                        | `True`   | Extra field 2                                                            | `null`                 |
| `spare3`                     | `String`                        | `True`   | Extra field 3                                                            | `null`                 |

## Returns

Returns a JSON representation of the updated `OeeModeRecordDTO` object.

## Code Examples

```python
# Retrieve an OEE mode record by ID
oee_mode_record = system.mes.oee.getOeeModeRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Change mode record notes
oee_mode_record['notes'] = 'Changed notes'

# Update OEE mode record notes
system.mes.oee.setOeeModeRecordNotesAndSpares(**oee_mode_record)
```