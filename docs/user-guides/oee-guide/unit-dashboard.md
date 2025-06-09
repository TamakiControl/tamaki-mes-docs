---
sidebar_position: 4
title: "Unit Dashboard"
description: "OEE Unit Dashboard Screen"
---

# Unit Dashboard

**Navigation:**
![Unit dashboard navigation menu](unit-dashboard-navigation.png)

**Example:**
![img_15.png](img_15.png)

**Description:**
- The Unit Dashboard screen provides a detailed view of the performance and status of individual units within the production line. It allows users to monitor the effectiveness of each unit, track downtime, and analyze performance metrics.

**Components:**
- [Top Bar](#top-bar)
- [Pie Chart](#pie-chart)
- [OEE State Timeline](#oee-state-timeline)
- [OEE Metrics by Hour](#oee-metrics-by-hour)
- [Top Downtime Reasons](#top-downtime-reasons)

## Top Bar
**Example:**
![img_16.png](img_16.png)

**Description:**
- The top bar of the Unit Dashboard displays key information about the selected unit, including:
  - **OEE**: Refer to [OEE](terms-and-definitions#oee-overall-equipment-effectiveness) for details on how OEE is calculated.
  - **Availability**: Refer to [Availability](terms-and-definitions#availability) for details on how availability is calculated.
  - **Performance**: Refer to [Performance](terms-and-definitions#performance) for details on how performance is calculated.
  - **Quality**: Refer to [Quality](terms-and-definitions#quality) for details on how quality is calculated.


## Pie Chart
**Example:**
![img_17.png](img_17.png)

**Description:**
- The pie chart provides a visual representation of the different states of the unit, allowing users to quickly assess the distribution of time spent in each state. The chart is color-coded to match the states defined in the [States](setup#states) section.

## OEE State Timeline
**Example:**
![img_18.png](img_18.png)

**Description:**
- A timeline that shows the historical OEE state of the line, allowing users to see trends and patterns over time. Hover over the colored bars that make up the timeline to see the start time, end time, and duration of the event associated with the colour (see [States](setup#states) for what state each color represents).
- Clicking on a bar in the timeline will open a popup with more detailed information about the event:
  - <img src="img_19.png" alt="img_19.png" style="vertical-align: middle;">
  
## OEE Metrics by Hour
**Example:**
![img_20.png](img_20.png)

**Description:**
- The OEE Metrics by Hour section provides a detailed breakdown of OEE metrics for each hour of the day. This allows users to analyze performance trends and identify specific time periods where performance may have been affected.

## Top Downtime Reasons
**Example:**
![img_21.png](img_21.png)

**Description:**
- The Top Downtime Reasons chart displays the most common reasons for downtime in the selected unit. This helps users identify recurring issues and prioritize improvements to reduce downtime.

