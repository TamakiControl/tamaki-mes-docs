---
sidebar_position: 5
title: 'validateConfig'
description: 'Validates an OEE configuration object.'
---

# system.mes.oee.validateConfig

## Description

Validates an OEE Configuration object against the system's business rules without saving it. This is useful for checking if a configuration is valid before attempting to save it.

## Permissions

This method requires the `OEE.READ.VALIDATE` permission.

## Syntax

```python
system.mes.oee.validateConfig(**config_data)
```

## Parameters

An unpacked dictionary of `OeeConfigurationDTO` fields.

| Parameter                            | Type                             | Nullable | Description                                                                         | Default Value |
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

## Returns

A JSON object containing validation results. If the object is empty, validation passed. If it contains entries, the keys are the field names and the values are lists of validation error messages.

## Code Examples

```python
# Create a new OEE configuration object
new_config = system.mes.oee.newConfig()

# Set some attributes (leaving required fields blank to trigger validation errors)
new_config['enabled'] = True

# Validate the configuration
validation_errors = system.mes.oee.validateConfig(**new_config)

if not validation_errors:
    print "Validation passed. Configuration is valid."
else:
    print "Validation failed. Errors:"
    for field, errors in validation_errors.items():
        print "  - {}: {}".format(field, ", ".join(errors))

# Example of a valid configuration
valid_config = system.mes.oee.newConfig()
valid_config['locationId'] = 'some-location-id'
valid_config['productionCountUnitOfMeasureId'] = 'some-uom-id'
# ... other required fields ...

errors = system.mes.oee.validateConfig(**valid_config)
if not errors:
    print "\nThe second configuration is valid."
```
