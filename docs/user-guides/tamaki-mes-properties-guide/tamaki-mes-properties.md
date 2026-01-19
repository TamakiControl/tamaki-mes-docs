---
sidebar_position: 2
title: "Tamaki MES Properties"
description: "Reference of Tamaki MES Spring properties"
---

# Tamaki MES Properties

This page consolidates all Spring configuration properties for Tamaki MES services.

## Hibernate

| **Property**                | **Default** | **Description**                                                                                                                                                  |
| --------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hibernate.jdbc.batch_size` | `50`        | Number of statements Hibernate will batch per roundtrip to the database. Increase to reduce network roundtrips; ensure your JDBC driver and DB support batching. |

### Notes

- **Tuning**: Start at 50–100. Validate with database metrics and profiling.
- **Constraints**: Consider triggers/sequences that may affect batching semantics.

## Transaction

| **Property**                                 | **Default** | **Description**                                                   |
| -------------------------------------------- | ----------- | ----------------------------------------------------------------- |
| `transaction.retry.max_attempts`             | `3`         | Maximum retry attempts for transient transactional failures.      |
| `transaction.retry.backoff_delay_ms`         | `500`       | Backoff delay between retries (milliseconds).                     |
| `transaction.retry.backoff_delay_multiplier` | `2`         | Multiplier applied to the previous delay for exponential backoff. |

### Notes

Effective delay sequence is `backoff_delay_ms * multiplier^(attempt-1)` until max attempts.

## Inventory

| **Property**                                      | **Default** | **Description**                                                       |
| ------------------------------------------------- | ----------- | --------------------------------------------------------------------- |
| `inventory.data_collection.execution_interval_ms` | `250`       | Interval between inventory data collection executions (milliseconds). |

### Notes

- Align with PLC tag update rates to avoid stale reads.

## OEE

| **Property**                                    | **Default**   | **Description**                                                                                                                                                                                                                              |
|-------------------------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `oee.data_collection.execution_interval_ms`     | `250`         | Interval between OEE data collection executions (milliseconds).                                                                                                                                                                              |
| `oee.data_collection.flush_check_interval_ms`   | `10000`       | Frequency to check whether buffered OEE data should be flushed to the database (milliseconds).                                                                                                                                               |
| `oee.data_collection.prune_records_cron`        | `0 0 0 * * ?` | Cron expression for pruning old OEE records. Uses [Spring Cron Format](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/support/CronExpression.html). The default value is Daily at Midnight. |
| `oee.data_collection.logs.throttling.threshold` | `10`          | The maximum number of errors to show within the throttling window before suppressing them.                                                                                                                                                   |
| `oee.data_collection.logs.throttling.window_ms` | `5000`        | The logs throttling window (milliseconds). Duplicate logs inside this window will be suppressed.                                                                                                                                             |
| `oee.alarms.alarm_flush_interval_ms`            | `10000`       | Interval between OEE alarm flush operations (milliseconds).                                                                                                                                                                                  |
| `oee.pruning.batch_size`                        | `1000`        | Number of OEE records deleted per pruning batch.                                                                                                                                                                                             |
| `oee.pruning.batch_delay_ms`                    | `500`         | Delay between pruning batches to reduce DB load (milliseconds).                                                                                                                                                                              |

### Notes

- **Execution Interval**

  - Lower → collects data more frequently, more CPU/memory use.
  - Higher → collects data less frequently, less CPU/memory use, risk of missing short-lived events.

- **Flush Check Interval**

  - Lower → more DB writes.
  - Higher → fewer DB writes, higher crash-loss risk.

- Flush Check Interval needs to be larger than Execution Interval
- Mismatch causes wasted flushes (too frequent) or buffer growth (too slow).

## Operation

| **Property**                                      | **Default** | **Description**                                                       |
| ------------------------------------------------- | ----------- | --------------------------------------------------------------------- |
| `operation.data_collection.execution_interval_ms` | `250`       | Interval between operation data collection executions (milliseconds). |

## Shift

| **Property**                                                       | **Default** | **Description**                                                          |
| ------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------ |
| `shift.data_collection.expression_schedule_evaluation_interval_ms` | `500`       | Interval for evaluating expression-based shift schedules (milliseconds). |
| `shift.data_collection.ignition_schedule_evaluation_interval_ms`   | `10000`     | Interval for evaluating Ignition-bound shift schedules (milliseconds).   |

## Expression

| **Property**                                  | **Default** | **Description**                                                 |
|-----------------------------------------------| ----------- | --------------------------------------------------------------- |
| `expression.health_check.min_batch_size`      | `5`         | Minimum number of expressions evaluated per health check cycle. |
| `expression.health_check.scan_interval_ms`    | `3000`      | Interval between expression health check scans (milliseconds).  |
| `expression.health_check.max_log_expressions` | `10`        | Max number of expressions logged when anomalies are detected.   |
| `expression.logs.throttling.window_ms`        | `5000`      | The logs throttling window (milliseconds). Duplicate logs inside this window will be suppressed.                                                                                                                                             |


## Tracegraph

| **Property**           | **Default** | **Description**                                                              |
| ---------------------- |-------------| ---------------------------------------------------------------------------- |
| `tracegraph.max_nodes` | `10000`     | Maximum number of nodes visited during a trace to prevent runaway traversal. |
| `tracegraph.max_depth` | `100`       | Maximum traversal depth for trace graph operations.                          |


## Additional Logging

| **Property**         | **Default** | **Description**                                         |
|----------------------|-------------|---------------------------------------------------------|
| `logs.diagnostics`   | `true`      | Whether or not to enable additional diagnostic logging. |
