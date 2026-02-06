---
sidebar_position: 2
title: 'getConfig'
description: 'Retrieves an OEE configuration record by its ID.'
---

# system.mes.oee.getConfig

## Description

Retrieves an OEE Configuration record by its ID.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getConfig(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                    |
| --------- | --------------- | -------- | ---------------------------------------------- |
| `id`      | `String` (ULID) | False    | The ULID of the OEE configuration to retrieve. |

## Returns

A JSON representation of an `OeeConfigurationDTO` object for the specified ID.

| Name                                 | Type                             | Nullable | Description                                                                         | Default Value |
|--------------------------------------|----------------------------------|----------|-------------------------------------------------------------------------------------|---------------|
| `id`                                 | `String`                         | `True`   | The id of the OEE Configuration                                                     | `null`        |
| `locationId`                         | `String`                         | `False`  | Identifier for the associated location                                              | `null`        |
| `locationPath`                       | `String`                         | `True`   | Path for the associated location. For display purposes only                         | `null`        |
| `maxRecordDuration`                  | `Integer`                        | `False`  | Maximum duration for an OEE record in seconds                                       | `600`         |
| `maxTimeBetweenExecutions`           | `Integer`                        | `True`   | Maximum # of seconds between executions                                             | `5`           |
| `maxFlushInterval`                   | `Integer`                        | `True`   | Flush interval in seconds                                                           | `30`          |
| `pruneDays`                          | `Integer`                        | `True`   | Number of days to retain OEE records                                                | `null`        |
| `modeExpression`                     | `String`                         | `True`   | Ignition expression used to determine the OEE mode                                  | `null`        |
| `enableAvailability`                 | `Boolean`                        | `False`  | Flag to enable or disable OEE availability calculations                             | `true`        |
| `stateExpression`                    | `String`                         | `True`   | Ignition expression for determining the machine status                              | `null`        |
| `downtimeReasonSource`               | `OeeDowntimeReasonSource`        | `True`   | Specifies how the system determines the downtime reason code                        | `MANUAL`      |
| `downtimeReasonExpression`           | `String`                         | `True`   | Ignition expression that returns an integer code corresponding to a downtime reason | `null`        |
| `holdFirstNonRunningState`           | `Boolean`                        | `False`  | Flag to enable or disable cutover between non running states                        | `true`        |
| `primaryAlarmResolutionStrategy`     | `PrimaryAlarmResolutionStrategy` | `False`  | Primary Alarm Resolution Strategy for this OEE Configuration                        | `EARLIEST`    |
| `enablePerformance`                  | `Boolean`                        | `False`  | Flag to enable or disable OEE performance calculations                              | `true`        |
| `productionCountUnitOfMeasureId`     | `String`                         | `False`  | Identifier for the unit of measure used in production and quality counts            | `null`        |
| `productionCountUnitOfMeasureName`   | `String`                         | `True`   | Name for the unit of measure used in production and quality counts                  | `null`        |
| `productionCountUnitOfMeasureSymbol` | `String`                         | `True`   | Symbol for the unit of measure used in production and quality counts                | `null`        |
| `productionCountExpression`          | `String`                         | `True`   | Ignition expression used to calculate the machine's production count                | `null`        |
| `productionCountCalcType`            | `CountCalcType`                  | `False`  | Calculation type for the production count                                           | `DELTA`       |
| `productionCountOverflowValue`       | `Double`                         | `True`   | Overflow value used for production count calculations                               | `null`        |
| `standardRateSource`                 | `OeeTargetSource`                | `False`  | Source for determining the standard rate of production                              | `STATIC`      |
| `standardRate`                       | `Double`                         | `True`   | Standard rate of production for this configuration per second                       | `0.0`         |
| `standardRateExpression`             | `String`                         | `True`   | Ignition expression used to provide the standard production rate                    | `null`        |
| `productionRateTimeUnits`            | `TimeUnit`                       | `False`  | Unit of measure for the machine production rate & standard rate                     | `MINUTES`     |
| `enableQuality`                      | `Boolean`                        | `False`  | Flag to enable or disable OEE quality calculations                                  | `true`        |
| `qualityCountCalcType`               | `CountCalcType`                  | `False`  | Calculation type for the quality count                                              | `DELTA`       |
| `qualityStrategy`                    | `OeeQualityStrategy`             | `False`  | Quality Strategy for this OEE Configuration                                         | `WASTE_COUNT` |
| `qualityCountExpression`             | `String`                         | `True`   | Ignition expression used to determine the quality count for production              | `null`        |
| `qualityCountOverflowValue`          | `Double`                         | `True`   | Overflow value used for quality count calculations                                  | `null`        |
| `productionOrderSource`              | `OeeProductionOrderSource`       | `False`  | Source for the production order resolution                                          | `NONE`        |
| `productionOrderExpression`          | `String`                         | `True`   | Expression to provide the production order (id or name) for the current oee record  | `null`        |
| `notes`                              | `String`                         | `True`   | Notes associated with the config                                                    | `null`        |
| `enabled`                            | `boolean`                        | `True`   | Indicates whether the config is enabled                                             | `true`        |
| `spare1`                             | `String`                         | `True`   | Extra field 1                                                                       | `null`        |
| `spare2`                             | `String`                         | `True`   | Extra field 2                                                                       | `null`        |
| `spare3`                             | `String`                         | `True`   | Extra field 3                                                                       | `null`        |

## Code Examples

```python
# Retrieve an OEE configuration by ID
config_id = "01JCH3ENEB-SV2X8B3W-NFY8WZNK"
try:
    config = system.mes.oee.getConfig(config_id)
    print "Retrieved config for location:", config['locationPath']
except:
    print "No configuration found with ID:", config_id
```
