# OEE DTO Reference

This document provides a comprehensive reference for all OEE (Overall Equipment Effectiveness) Data Transfer Objects (DTOs) in the Tamaki MES system.

## DowntimeByInterruptionLocationDTO

| Name                       | Type     | Nullable | Description                                                       | Default Value |
| -------------------------- | -------- | -------- | ----------------------------------------------------------------- | ------------- |
| `interruptionLocationPath` | `String` | `True`   | Path of the interruption location                                 | `null`        |
| `interruptionLocationName` | `String` | `True`   | Name of the interruption location                                 | `null`        |
| `duration`                 | `Double` | `True`   | Duration of downtime caused by the interruption location          | `0.0`         |
| `count`                    | `Long`   | `True`   | Count of downtime events caused by the interruption location      | `null`        |
| `durationPercent`          | `Double` | `True`   | Percentage of total duration caused by this interruption location | `0.0`         |
| `countPercent`             | `Double` | `True`   | Percentage of total count caused by this interruption location    | `0.0`         |

## OeeAlarmRecordDTO

| Name                 | Type                   | Nullable | Description                                                     | Default Value |
| -------------------- | ---------------------- | -------- | --------------------------------------------------------------- | ------------- |
| `id`                 | `String`               | `True`   | The id of the OEE Alarm Record                                  | `null`        |
| `locationId`         | `String`               | `False`  | Identifier of the associated location                           | `null`        |
| `locationPath`       | `String`               | `True`   | Path to the associated location                                 | `null`        |
| `oeeStateRecordId`   | `String`               | `True`   | Oee State Record Id active at this location at this time        | `null`        |
| `oeeStateRecordCode` | `Integer`              | `True`   | Oee State Record code active at this location at this time      | `null`        |
| `name`               | `String`               | `False`  | The alarm name as configured in Ignition                        | `null`        |
| `ignitionAlarmId`    | `String`               | `False`  | Unique identifier of the alarm instance in Ignition             | `null`        |
| `source`             | `String`               | `False`  | The tag path or source that generated this alarm                | `null`        |
| `priority`           | `AlarmPriority`        | `True`   | The configured priority level of the alarm                      | `null`        |
| `displayPath`        | `String`               | `False`  | The hierarchical display path of the alarm in the tag structure | `null`        |
| `label`              | `String`               | `False`  | The human-readable display name for the alarm                   | `null`        |
| `cleared`            | `Boolean`              | `False`  | Indicates if the alarm condition has returned to normal         | `false`       |
| `acknowledged`       | `Boolean`              | `False`  | Indicates if the alarm has been acknowledged by an operator     | `false`       |
| `shelved`            | `Boolean`              | `False`  | Indicates if the alarm has been temporarily suppressed          | `false`       |
| `state`              | `AlarmState`           | `False`  | The current state of the alarm in Ignition's state machine      | `null`        |
| `lastEventState`     | `AlarmStateTransition` | `False`  | The most recent state transition that occurred for this alarm   | `null`        |
| `eventType`          | `AlarmEventType`       | `False`  | The event type of this alarm record                             | `null`        |
| `timestamp`          | `Long`                 | `False`  | The timestamp when this alarm event was triggered               | `null`        |
| `notes`              | `String`               | `True`   | Notes associated with the OEE Alarm Record                      | `null`        |
| `enabled`            | `boolean`              | `True`   | Indicates whether the Alarm Record is enabled                   | `true`        |
| `spare1`             | `String`               | `True`   | Extra field 1                                                   | `null`        |
| `spare2`             | `String`               | `True`   | Extra field 2                                                   | `null`        |
| `spare3`             | `String`               | `True`   | Extra field 3                                                   | `null`        |

## OeeChartSegmentDTO

| Name              | Type      | Nullable | Description                                                                  | Default Value |
| ----------------- | --------- | -------- | ---------------------------------------------------------------------------- | ------------- |
| `name`            | `String`  | `True`   | The name of the chart segment (e.g., "Unscheduled Downtime" or "Running")    | `null`        |
| `code`            | `Integer` | `True`   | The integer code associated with the Mode or State                           | `null`        |
| `color`           | `String`  | `True`   | The color code for displaying this segment                                   | `null`        |
| `duration`        | `Double`  | `True`   | The total aggregated duration of this segment in seconds                     | `null`        |
| `durationPercent` | `Double`  | `True`   | The percentage (0.0 to 1.0) of the total duration that this segment occupies | `null`        |
| `type`            | `String`  | `True`   | The type of the original record, either "Mode" or "State"                    | `null`        |

## OeeConfigurationDTO

| Name                                 | Type                       | Nullable | Description                                                                         | Default Value |
| ------------------------------------ | -------------------------- | -------- | ----------------------------------------------------------------------------------- | ------------- |
| `id`                                 | `String`                   | `True`   | The id of the OEE Configuration                                                     | `null`        |
| `locationId`                         | `String`                   | `False`  | Identifier for the associated location                                              | `null`        |
| `locationPath`                       | `String`                   | `True`   | Path for the associated location. For display purposes only                         | `null`        |
| `maxRecordDuration`                  | `Integer`                  | `False`  | Maximum duration for an OEE record in seconds                                       | `600`         |
| `maxTimeBetweenExecutions`           | `Integer`                  | `True`   | Maximum # of seconds between executions                                             | `5`           |
| `maxFlushInterval`                   | `Integer`                  | `True`   | Flush interval in seconds                                                           | `null`        |
| `pruneDays`                          | `Integer`                  | `True`   | Number of days to retain OEE records                                                | `null`        |
| `modeExpression`                     | `String`                   | `True`   | Ignition expression used to determine the OEE mode                                  | `null`        |
| `enableAvailability`                 | `Boolean`                  | `False`  | Flag to enable or disable OEE availability calculations                             | `true`        |
| `stateExpression`                    | `String`                   | `True`   | Ignition expression for determining the machine status                              | `null`        |
| `downtimeReasonSource`               | `OeeDowntimeReasonSource`  | `True`   | Specifies how the system determines the downtime reason code                        | `MANUAL`      |
| `downtimeReasonExpression`           | `String`                   | `True`   | Ignition expression that returns an integer code corresponding to a downtime reason | `null`        |
| `alarmsPath`                         | `String`                   | `True`   | Path to the alarms for this OEE configuration                                       | `null`        |
| `enablePerformance`                  | `Boolean`                  | `False`  | Flag to enable or disable OEE performance calculations                              | `true`        |
| `productionCountUnitOfMeasureId`     | `String`                   | `False`  | Identifier for the unit of measure used in production and quality counts            | `null`        |
| `productionCountUnitOfMeasureName`   | `String`                   | `True`   | Name for the unit of measure used in production and quality counts                  | `null`        |
| `productionCountUnitOfMeasureSymbol` | `String`                   | `True`   | Symbol for the unit of measure used in production and quality counts                | `null`        |
| `productionCountExpression`          | `String`                   | `True`   | Ignition expression used to calculate the machine's production count                | `null`        |
| `productionCountCalcType`            | `CountCalcType`            | `False`  | Calculation type for the production count                                           | `DELTA`       |
| `productionCountOverflowValue`       | `Double`                   | `True`   | Overflow value used for production count calculations                               | `null`        |
| `standardRateSource`                 | `OeeTargetSource`          | `False`  | Source for determining the standard rate of production                              | `STATIC`      |
| `standardRate`                       | `Double`                   | `True`   | Standard rate of production for this configuration per second                       | `0.0`         |
| `standardRateExpression`             | `String`                   | `True`   | Ignition expression used to provide the standard production rate                    | `null`        |
| `productionRateTimeUnits`            | `TimeUnit`                 | `False`  | Unit of measure for the machine production rate & standard rate                     | `MINUTES`     |
| `enableQuality`                      | `Boolean`                  | `False`  | Flag to enable or disable OEE quality calculations                                  | `true`        |
| `qualityCountCalcType`               | `CountCalcType`            | `False`  | Calculation type for the quality count                                              | `DELTA`       |
| `qualityStrategy`                    | `OeeQualityStrategy`       | `False`  | Quality Strategy for this OEE Configuration                                         | `WASTE_COUNT` |
| `qualityCountExpression`             | `String`                   | `True`   | Ignition expression used to determine the quality count for production              | `null`        |
| `qualityCountOverflowValue`          | `Double`                   | `True`   | Overflow value used for quality count calculations                                  | `null`        |
| `productionOrderSource`              | `OeeProductionOrderSource` | `False`  | Source for the production order resolution                                          | `NONE`        |
| `productionOrderExpression`          | `String`                   | `True`   | Expression to provide the production order (id or name) for the current oee record  | `null`        |
| `notes`                              | `String`                   | `True`   | Notes associated with the config                                                    | `null`        |
| `enabled`                            | `boolean`                  | `True`   | Indicates whether the config is enabled                                             | `true`        |
| `spare1`                             | `String`                   | `True`   | Extra field 1                                                                       | `null`        |
| `spare2`                             | `String`                   | `True`   | Extra field 2                                                                       | `null`        |
| `spare3`                             | `String`                   | `True`   | Extra field 3                                                                       | `null`        |

## OeeDowntimeByReasonDTO

| Name                 | Type     | Nullable | Description                                  | Default Value |
| -------------------- | -------- | -------- | -------------------------------------------- | ------------- |
| `downtimeReasonPath` | `String` | `True`   | Path of the downtime reason                  | `null`        |
| `duration`           | `Double` | `True`   | Duration of downtime for this reason         | `0.0 `        |
| `count`              | `Long`   | `True`   | Count of downtime events for this reason     | `null`        |
| `durationPercent`    | `Double` | `True`   | Percentage of total duration for this reason | `0.0`         |
| `countPercent`       | `Double` | `True`   | Percentage of total count for this reason    | `0.0`         |

## OeeDowntimeReasonDTO

| Name           | Type      | Nullable | Description                                                                | Default Value |
| -------------- | --------- | -------- | -------------------------------------------------------------------------- | ------------- |
| `id`           | `String`  | `True`   | The id of the Downtime Reason                                              | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this downtime reason applies   | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this downtime reason applies         | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent downtime reason, if applicable                    | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this downtime reason                     | `0`           |
| `name`         | `String`  | `False`  | Name of the downtime reason                                                | `null`        |
| `description`  | `String`  | `True`   | Description of the downtime reason                                         | `null`        |
| `path`         | `String`  | `True`   | Path representation of the downtime reason within a hierarchical structure | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Downtime Reason                                  | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Downtime Reason is enabled                           | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                              | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                              | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                              | `null`        |

## OeeDowntimeReasonHierarchicalDTO

| Name           | Type                                     | Nullable | Description                                                                                  | Default Value |
| -------------- | ---------------------------------------- | -------- | -------------------------------------------------------------------------------------------- | ------------- |
| `id`           | `String`                                 | `True`   | The id of the Downtime Reason                                                                | `null`        |
| `locationId`   | `String`                                 | `True`   | Identifier of the associated location (inherited from OeeDowntimeReasonDTO)                  | `null`        |
| `locationPath` | `String`                                 | `True`   | Path of the associated location (inherited from OeeDowntimeReasonDTO)                        | `null`        |
| `parentId`     | `String`                                 | `True`   | Identifier of the parent downtime reason (inherited from OeeDowntimeReasonDTO)               | `null`        |
| `code`         | `Integer`                                | `False`  | Unique fault code associated with this downtime reason (inherited from OeeDowntimeReasonDTO) | `0`           |
| `name`         | `String`                                 | `False`  | Name of the downtime reason (inherited from OeeDowntimeReasonDTO)                            | `null`        |
| `description`  | `String`                                 | `True`   | Description of the downtime reason (inherited from OeeDowntimeReasonDTO)                     | `null`        |
| `path`         | `String`                                 | `True`   | Path representation of the downtime reason (inherited from OeeDowntimeReasonDTO)             | `null`        |
| `children`     | `List<OeeDowntimeReasonHierarchicalDTO>` | `True`   | List of child downtime reasons                                                               | `null`        |
| `notes`        | `String`                                 | `True`   | Notes associated with the Downtime Reason                                                    | `null`        |
| `enabled`      | `boolean`                                | `True`   | Indicates whether the Downtime Reason is enabled                                             | `true`        |
| `spare1`       | `String`                                 | `True`   | Extra field                                                                                  | `null`        |
| `spare2`       | `String`                                 | `True`   | Extra field                                                                                  | `null`        |
| `spare3`       | `String`                                 | `True`   | Extra field                                                                                  | `null`        |

## OeeDowntimeReasonTreePerspectiveDTO

| Name         | Type                                        | Nullable | Description                                      | Default Value      |
| ------------ | ------------------------------------------- | -------- | ------------------------------------------------ | ------------------ |
| `id`         | `String`                                    | `True`   | The id of the Downtime Reason                    | `null`             |
| `title`      | `String`                                    | `False`  | The title of the Downtime Reason                 | `null`             |
| `type`       | `String`                                    | `True`   | The type of the Downtime Reason                  | `"downtimereason"` |
| `locationId` | `String`                                    | `True`   | The unique identifier of the location            | `null`             |
| `children`   | `List<OeeDowntimeReasonTreePerspectiveDTO>` | `True`   | List of children of the Downtime Reason          | `null`             |
| `notes`      | `String`                                    | `True`   | Notes associated with the Downtime Reason        | `null`             |
| `enabled`    | `boolean`                                   | `True`   | Indicates whether the Downtime Reason is enabled | `true`             |
| `spare1`     | `String`                                    | `True`   | Extra field                                      | `null`             |
| `spare2`     | `String`                                    | `True`   | Extra field                                      | `null`             |
| `spare3`     | `String`                                    | `True`   | Extra field                                      | `null`             |

## OeeDowntimeStatisticsDTO

| Name                              | Type      | Nullable | Description                                                                  | Default Value   |
| --------------------------------- | --------- | -------- | ---------------------------------------------------------------------------- | --------------- |
| `locationId`                      | `String`  | `False`  | Identifier of the associated location where this OEE record was captured     | `null`          |
| `locationPath`                    | `String`  | `True`   | Path of the location where this OEE record was captured                      | `null`          |
| `startDate`                       | `Instant` | `False`  | Start date and time of the OEE record                                        | `Instant.now()` |
| `endDate`                         | `Instant` | `True`   | End date and time of the OEE record                                          | `null`          |
| `totalDurationSec`                | `Double`  | `False`  | Total duration of the OEE record in seconds                                  | `0.0`           |
| `downtimeTotalDurationSec`        | `Double`  | `False`  | Total downtime duration of the OEE record in seconds                         | `0.0`           |
| `downtimeEventAverageDurationSec` | `Double`  | `False`  | Average Duration in seconds for downtime events on the machine               | `0.0`           |
| `downtimeEventCount`              | `Integer` | `False`  | Downtime Event Count during this record period                               | `0`             |
| `downtimePercent`                 | `Double`  | `False`  | Percent of time of the total duration that the machine was in downtime state | `0.0`           |
| `meanTimeBetweenFailuresSec`      | `Double`  | `False`  | The Mean Time Between Failures (MTBF) in seconds                             | `0.0`           |
| `meanTimeToRepairSec`             | `Double`  | `False`  | The Mean Time To Repair (MTTR) in seconds                                    | `0.0`           |
| `starvedTotalDurationSec`         | `Double`  | `False`  | Total starved duration of the OEE record in seconds                          | `0.0`           |
| `starvedEventAverageDurationSec`  | `Double`  | `False`  | Average Duration in seconds for starved events on the machine                | `0.0`           |
| `starvedEventCount`               | `Integer` | `False`  | Starved Event Count during this record period                                | `0`             |
| `starvedPercent`                  | `Double`  | `False`  | Percent of time of the total duration that the machine was in starved state  | `0.0`           |
| `blockedTotalDurationSec`         | `Double`  | `False`  | Total blocked duration of the OEE record in seconds                          | `0.0`           |
| `blockedEventAverageDurationSec`  | `Double`  | `False`  | Average Duration in seconds for blocked events on the machine                | `0.0`           |
| `blockedEventCount`               | `Integer` | `False`  | Blocked Event Count during this record period                                | `0`             |
| `blockedPercent`                  | `Double`  | `False`  | Percent of time of the total duration that the machine was in blocked state  | `0.0`           |

## OeeModeDTO

| Name                         | Type                            | Nullable | Description                                                                               | Default Value          |
| ---------------------------- | ------------------------------- | -------- | ----------------------------------------------------------------------------------------- | ---------------------- |
| `id`                         | `String`                        | `True`   | The id of the OEE Mode                                                                    | `null`                 |
| `locationId`                 | `String`                        | `False`  | Identifier of the associated location                                                     | `null`                 |
| `locationPath`               | `String`                        | `True`   | Path to the associated location                                                           | `null`                 |
| `code`                       | `Integer`                       | `False`  | Integer value representing the mode                                                       | `null`                 |
| `name`                       | `String`                        | `False`  | Name of the mode                                                                          | `null`                 |
| `calculationType`            | `OeeModeCalculationType`        | `False`  | Specifies how this mode should be factored into OEE calculations                          | `SCHEDULED_PRODUCTION` |
| `expectedDurationSource`     | `OeeModeExpectedDurationSource` | `False`  | Defines the source used to determine the expected duration of a scheduled downtime event  | `STATIC`               |
| `expectedDurationExpression` | `String`                        | `True`   | Ignition expression to dynamically calculate the expected duration of the mode in seconds | `null`                 |
| `expectedDuration`           | `Double`                        | `True`   | Expected duration of the mode in seconds                                                  | `0.0`                  |
| `color`                      | `String`                        | `False`  | Hex color code representing the mode visually                                             | `"#000000"`            |
| `notes`                      | `String`                        | `True`   | Notes associated with the OEE Mode                                                        | `null`                 |
| `enabled`                    | `boolean`                       | `True`   | Indicates whether the OEE Mode is enabled                                                 | `true`                 |
| `spare1`                     | `String`                        | `True`   | Extra field 1                                                                             | `null`                 |
| `spare2`                     | `String`                        | `True`   | Extra field 2                                                                             | `null`                 |
| `spare3`                     | `String`                        | `True`   | Extra field 3                                                                             | `null`                 |

## OeeModeRecordDTO

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
| `expectedDurationSource`     | `OeeModeExpectedDurationSource` | `False`  | Source to calculate the expected duration of an scheduled downtime event | `STATIC`               |
| `expectedDurationExpression` | `String`                        | `True`   | Expression to calculate the expected duration of the mode in seconds     | `null`                 |
| `expectedDuration`           | `Double`                        | `True`   | Expected duration of the mode in seconds                                 | `0.0`                  |
| `notes`                      | `String`                        | `True`   | Notes associated with the OEE Mode Record                                | `null`                 |
| `enabled`                    | `boolean`                       | `True`   | Indicates whether the OEE Mode Record is enabled                         | `true`                 |
| `spare1`                     | `String`                        | `True`   | Extra field 1                                                            | `null`                 |
| `spare2`                     | `String`                        | `True`   | Extra field 2                                                            | `null`                 |
| `spare3`                     | `String`                        | `True`   | Extra field 3                                                            | `null`                 |

## OeeModeRecordsGroupedByModeDTO

| Name         | Type      | Nullable | Description                                                            | Default Value |
| ------------ | --------- | -------- | ---------------------------------------------------------------------- | ------------- |
| `locationId` | `String`  | `True`   | Identifier of the associated location where this mode was recorded     | `null`        |
| `code`       | `Integer` | `True`   | The integer code associated with the Mode                              | `null`        |
| `name`       | `String`  | `True`   | The name of the mode, such as "Production", "Scheduled Downtime", etc. | `null`        |
| `color`      | `String`  | `True`   | The color code for displaying this mode                                | `null`        |
| `duration`   | `Double`  | `True`   | The total aggregated duration of this mode in seconds                  | `null`        |
| `count`      | `Long`    | `True`   | The number of occurrences of this mode                                 | `null`        |

## OeeRecordDTO

| Name                                 | Type                 | Nullable | Description                                                                         | Default Value   |
| ------------------------------------ | -------------------- | -------- | ----------------------------------------------------------------------------------- | --------------- |
| `id`                                 | `String`             | `True`   | The id of the OEE Record                                                            | `null`          |
| `locationId`                         | `String`             | `False`  | Identifier of the associated location where this OEE record was captured            | `null`          |
| `locationPath`                       | `String`             | `True`   | Path of the location where this OEE record was captured                             | `null`          |
| `status`                             | `Status`             | `False`  | Status of the OEE record (e.g., running, faulted, canceled, complete)               | `UNKNOWN`       |
| `startDate`                          | `Instant`            | `False`  | Start date and time of the OEE record                                               | `Instant.now()` |
| `endDate`                            | `Instant`            | `True`   | End date and time of the OEE record                                                 | `null`          |
| `totalDurationSec`                   | `Double`             | `False`  | Total duration of the OEE record in seconds                                         | `0.0`           |
| `scheduledDurationSec`               | `Double`             | `False`  | Duration in seconds that the machine was scheduled to run during this record period | `0.0`           |
| `runningDurationSec`                 | `Double`             | `False`  | Duration in seconds that the machine was actively running during this record period | `0.0`           |
| `productionCount`                    | `Double`             | `False`  | Total number of units produced during this record period                            | `0.0`           |
| `expectedProductionCount`            | `Double`             | `False`  | Expected number of units to be produced during this record period                   | `0.0`           |
| `qualityStrategy`                    | `OeeQualityStrategy` | `False`  | Quality Strategy for this OEE Record                                                | `WASTE_COUNT`   |
| `qualityCount`                       | `Double`             | `False`  | Total number of quality units recorded during this period                           | `0.0`           |
| `productionCountUnitOfMeasureId`     | `String`             | `True`   | Identifier of the unit of measure for the production count                          | `null`          |
| `productionCountUnitOfMeasureName`   | `String`             | `True`   | Name of the unit of measure for the production count                                | `null`          |
| `productionCountUnitOfMeasureSymbol` | `String`             | `True`   | Symbol of the unit of measure for the production count                              | `null`          |
| `productionRateTimeUnits`            | `TimeUnit`           | `False`  | Unit of measure for the machine production rate & standard rate                     | `MINUTES`       |
| `modeRecordId`                       | `String`             | `True`   | Identifier of the associated mode record                                            | `null`          |
| `modeCode`                           | `Integer`            | `True`   | Code of the associated mode record                                                  | `null`          |
| `standardRate`                       | `Double`             | `True`   | The standard rate for this record                                                   | `0.0`           |
| `productionOrderId`                  | `String`             | `True`   | The Id of the production order associated with this OEE record                      | `null`          |
| `productionOrderName`                | `String`             | `True`   | The name of the production order associated with this OEE record                    | `null`          |
| `notes`                              | `String`             | `True`   | Notes associated with the OEE Record                                                | `null`          |
| `enabled`                            | `boolean`            | `True`   | Indicates whether the OEE Record is enabled                                         | `true`          |
| `spare1`                             | `String`             | `True`   | Extra field 1                                                                       | `null`          |
| `spare2`                             | `String`             | `True`   | Extra field 2                                                                       | `null`          |
| `spare3`                             | `String`             | `True`   | Extra field 3                                                                       | `null`          |

## OeeResultsDTO

| Name                                 | Type      | Nullable | Description                                                                         | Default Value   |
| ------------------------------------ | --------- | -------- | ----------------------------------------------------------------------------------- | --------------- |
| `locationId`                         | `String`  | `False`  | Identifier of the associated location where this OEE record was captured            | `null`          |
| `locationPath`                       | `String`  | `True`   | Path of the location where this OEE record was captured                             | `null`          |
| `startDate`                          | `Instant` | `False`  | Start date and time of the OEE record                                               | `Instant.now()` |
| `endDate`                            | `Instant` | `True`   | End date and time of the OEE record                                                 | `null`          |
| `totalDurationSec`                   | `Double`  | `False`  | Total duration of the OEE record in seconds                                         | `0.0`           |
| `scheduledDurationSec`               | `Double`  | `False`  | Duration in seconds that the machine was scheduled to run during this record period | `0.0`           |
| `runningDurationSec`                 | `Double`  | `False`  | Duration in seconds that the machine was actively running during this record period | `0.0`           |
| `productionCount`                    | `Double`  | `False`  | Total number of units produced during this record period                            | `0.0`           |
| `expectedProductionCount`            | `Double`  | `False`  | Expected number of units to be produced during this record period                   | `0.0`           |
| `averageStandardRate`                | `Double`  | `False`  | Average Standard Rate for the time period. Calculated as per minute                 | `0.0`           |
| `maximumStandardRate`                | `Double`  | `False`  | Maximum Standard Rate for the time period. Calculated as per minute                 | `0.0`           |
| `wasteCount`                         | `Double`  | `False`  | Total number of waste units recorded during this period                             | `0.0`           |
| `goodCount`                          | `Double`  | `False`  | Total number of good units recorded during this period                              | `0.0`           |
| `productionCountUnitOfMeasureId`     | `String`  | `True`   | Identifier of the unit of measure for the production count                          | `null`          |
| `productionCountUnitOfMeasureName`   | `String`  | `True`   | Name of the unit of measure for the production count                                | `null`          |
| `productionCountUnitOfMeasureSymbol` | `String`  | `True`   | Symbol of the unit of measure for the production count                              | `null`          |
| `availability`                       | `Double`  | `True`   | Availability metric (0.0 to 1.0)                                                    | `1.0`           |
| `performance`                        | `Double`  | `True`   | Performance metric (0.0 to 1.0)                                                     | `1.0`           |
| `quality`                            | `Double`  | `True`   | Quality metric (0.0 to 1.0)                                                         | `1.0`           |
| `oee`                                | `Double`  | `True`   | Overall Equipment Effectiveness (OEE) metric (0.0 to 1.0)                           | `1.0`           |

## OeeStateDTO

| Name                       | Type                      | Nullable | Description                                                              | Default Value |
| -------------------------- | ------------------------- | -------- | ------------------------------------------------------------------------ | ------------- |
| `id`                       | `String`                  | `True`   | The id of the OEE State                                                  | `null`        |
| `locationId`               | `String`                  | `False`  | Identifier of the associated location                                    | `null`        |
| `locationPath`             | `String`                  | `True`   | Path of the associated location                                          | `null`        |
| `code`                     | `Integer`                 | `False`  | Integer state number, which must be unique for a given location          | `null`        |
| `name`                     | `String`                  | `False`  | Name of the state                                                        | `null`        |
| `calculationType`          | `OeeStateCalculationType` | `False`  | Specifies how this state contributes to OEE calculations                 | `DOWNTIME`    |
| `color`                    | `String`                  | `False`  | Hex color code representing the state visually                           | `"#000000"`   |
| `autoAcknowledge`          | `Boolean`                 | `False`  | Whether to automatically acknowledge the state record when it is created | `false`       |
| `interruptionLocationId`   | `String`                  | `True`   | Immediate interruption location that caused a blocked/starved state      | `null`        |
| `interruptionLocationPath` | `String`                  | `True`   | Path to the location that caused a blocked/starved state                 | `null`        |
| `notes`                    | `String`                  | `True`   | Notes associated with the OEE State                                      | `null`        |
| `enabled`                  | `boolean`                 | `True`   | Indicates whether the OEE State is enabled                               | `true`        |
| `spare1`                   | `String`                  | `True`   | Extra field 1                                                            | `null`        |
| `spare2`                   | `String`                  | `True`   | Extra field 2                                                            | `null`        |
| `spare3`                   | `String`                  | `True`   | Extra field 3                                                            | `null`        |

## OeeStateRecordDTO

| Name                       | Type                      | Nullable | Description                                                                | Default Value   |
| -------------------------- | ------------------------- | -------- | -------------------------------------------------------------------------- | --------------- |
| `id`                       | `String`                  | `True`   | The id of the OEE State Record                                             | `null`          |
| `code`                     | `Integer`                 | `False`  | Integer state number                                                       | `null`          |
| `locationId`               | `String`                  | `False`  | Identifier of the associated location where this state record was recorded | `null`          |
| `locationName`             | `String`                  | `True`   | Name of the associated location                                            | `null`          |
| `locationPath`             | `String`                  | `True`   | Path of the location where this state record was recorded                  | `null`          |
| `name`                     | `String`                  | `False`  | Name of the recorded state                                                 | `null`          |
| `calculationType`          | `OeeStateCalculationType` | `False`  | Specifies how this state contributes to OEE calculations                   | `DOWNTIME`      |
| `color`                    | `String`                  | `False`  | Hex color code representing the state visually                             | `"#000000"`     |
| `status`                   | `Status`                  | `False`  | Status of the OEE record (e.g., running, faulted, canceled, complete)      | `UNKNOWN`       |
| `startDate`                | `Instant`                 | `False`  | Start date and time of the state record                                    | `Instant.now()` |
| `endDate`                  | `Instant`                 | `True`   | End date and time of the state record                                      | `null`          |
| `duration`                 | `Double`                  | `False`  | Duration of the state record in seconds                                    | `0.0`           |
| `downtimeReasonId`         | `String`                  | `True`   | Identifier of the associated downtime reason, if applicable                | `null`          |
| `downtimeReason`           | `String`                  | `True`   | Title of the downtime reason. (Name - Code) For display purposes only      | `null`          |
| `downtimeReasonPath`       | `String`                  | `True`   | Path to the current downtime reason                                        | `null`          |
| `interruptionLocationId`   | `String`                  | `True`   | Location id that caused the blocked/starved state on the machine           | `null`          |
| `interruptionLocationName` | `String`                  | `True`   | Name of the interruption location that caused the blocked/starved state    | `null`          |
| `interruptionLocationPath` | `String`                  | `True`   | Location path that caused the blocked/starved state on the machine         | `null`          |
| `acknowledged`             | `Boolean`                 | `False`  | Boolean indicating whether the state record has been acknowledged          | `false`         |
| `acknowledgedBy`           | `String`                  | `True`   | Acknowledged By. This is the user who acknowledged the state record        | `null`          |
| `acknowledgedDate`         | `Instant`                 | `True`   | Acknowledged Date. This is the date when the state record was acknowledged | `null`          |
| `notes`                    | `String`                  | `True`   | Notes associated with the OEE State Record                                 | `null`          |
| `enabled`                  | `boolean`                 | `True`   | Indicates whether the OEE State Record is enabled                          | `true`          |
| `spare1`                   | `String`                  | `True`   | Extra field 1                                                              | `null`          |
| `spare2`                   | `String`                  | `True`   | Extra field 2                                                              | `null`          |
| `spare3`                   | `String`                  | `True`   | Extra field 3                                                              | `null`          |

## OeeStateRecordsGroupedByStateDTO

| Name         | Type      | Nullable | Description                                                | Default Value |
| ------------ | --------- | -------- | ---------------------------------------------------------- | ------------- |
| `locationId` | `String`  | `True`   | Identifier of the associated location                      | `null`        |
| `code`       | `Integer` | `True`   | The integer code associated with the State                 | `null`        |
| `name`       | `String`  | `True`   | The name of the state, such as "Downtime", "Running", etc. | `null`        |
| `color`      | `String`  | `True`   | The color code for displaying this state                   | `null`        |
| `duration`   | `Double`  | `True`   | The total aggregated duration of this state in seconds     | `null`        |
| `count`      | `Long`    | `True`   | The number of occurrences of this state                    | `null`        |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the oee config that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete an oee config by ID
system.mes.oee.deleteConfig('01JCH3ENEB-SV2X8B3W-NFY8WZNK')
```
