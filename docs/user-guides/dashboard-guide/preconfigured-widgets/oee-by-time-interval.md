---
sidebar_position: 8
title: "OEE By Time Interval Widget"
description: "Overview of the OEE by time interval widget"
---

# OEE By Time Interval Widget

The OEE by time widget displays a bar graph of the recent Overall Equipment Effectiveness (OEE) for a specified location
averaged over specified time intervals.

![oee_by_time_interval_widget.png](../../../../static/img/docs/user-guides/dashboard-guide/preconfigured-widgets/oee_by_time_interval_widget.png)
<!-- Image info if new pictures is needed: data on perspective-dev, location 01JVWS3YA6-TM7K2FAD-5SQVKJ05, 2025-5-30 to 2025-5-29 -->

## Parameters
- **Name**: The name of the widget instance.
- **Location**: The location to display OEE data for.
- **Duration**: The total range of time shown on the chart. A duration of 6 hours will show OEE data from the last 6 
hours, for example.
- **Refresh Interval**: How often the widget refreshes its data.
- **Time Interval**: The size of the time buckets to average OEE over. A time interval of 1 hour will show the average OEE
for each hour in the specified duration.
- **Time Interval Units**: The units for the time interval. Options include Seconds, Minutes, Hours, and Days.
