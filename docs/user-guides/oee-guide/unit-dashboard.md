---
sidebar_position: 4
title: "Unit Dashboard"
description: "OEE Unit Dashboard Screen"
---

# Unit Dashboard

**Navigation:**

![Navigation menu showing the Unit Dashboard selection in the OEE module](./images/unit-dashboard-navigation.png)

**Example:**

![Complete Unit Dashboard screen showing OEE metrics, state timeline, and performance charts](./images/unit-dashboard-full.png)

**Description:**
- The Unit Dashboard screen provides a detailed view of the performance and status of individual units within the production line. It allows users to monitor the effectiveness of each unit, track downtime, and analyze performance metrics.

**Components:**
- [Top Bar](#top-bar)
- [Pie Chart](#pie-chart)
- [OEE State Timeline](#oee-state-timeline)
- [OEE Metrics by Hour](#oee-metrics-by-hour)
- [Downtime Reasons Pareto Chart](#downtime-reasons-pareto-chart)
- [Time Selection Sidebar](#time-selection-sidebar)

## Top Bar
**Example:**

![Top bar section of Unit Dashboard showing OEE, availability, performance, and quality metrics](./images/unit-dashboard-top-bar.png)

**Description:**
- The top bar of the Unit Dashboard displays key information about the selected unit, including:
  - **OEE**: Refer to [OEE](terms-and-definitions#oee-overall-equipment-effectiveness) for details on how OEE is calculated.
  - **Availability**: Refer to [Availability](terms-and-definitions#availability) for details on how availability is calculated.
  - **Performance**: Refer to [Performance](terms-and-definitions#performance) for details on how performance is calculated.
  - **Quality**: Refer to [Quality](terms-and-definitions#quality) for details on how quality is calculated.


## Pie Chart
**Example:**

![Pie chart showing distribution of different operational states for the selected unit](./images/unit-dashboard-pie-chart.png)

**Description:**
- The pie chart provides a visual representation of the different states of the unit, allowing users to quickly assess the distribution of time spent in each state. The chart is color-coded to match the states defined in the [States](setup#states) section.

## OEE State Timeline
**Example:**

![OEE state timeline showing color-coded periods of different operational states for the unit](./images/unit-dashboard-state-timeline.png)

**Description:**
- A timeline that shows the historical OEE state of the line, allowing users to see trends and patterns over time. Hover over the colored bars that make up the timeline to see the start time, end time, and duration of the event associated with the color (see [States](setup#states) for what state each color represents).
- Clicking on a bar in the timeline will open a popup with more detailed information about the event:
  
  ![Timeline event details popup showing duration and state information](./images/timeline-event-details.png)
  
## OEE Metrics by Hour
**Example:**

![Hourly breakdown of OEE metrics showing performance trends throughout the day](./images/unit-dashboard-metrics-by-hour.png)

**Description:**
- The OEE Metrics by Hour section provides a detailed breakdown of OEE metrics for each hour of the day. This allows users to analyze performance trends and identify specific time periods where performance may have been affected.

## Downtime Reasons Pareto Chart
**Example:**

![Bar chart showing the most common downtime reasons and their durations](./images/unit-dashboard-top-downtime.png)

**Description:**
- The Downtime Reasons Pareto chart displays the most common reasons for downtime in the selected unit. Along with the cumulative frequency, This helps users identify recurring issues and prioritize improvements to reduce downtime. This chart defaults to showing the top level reason codes in the hierarchy, click on any bar to drill down.

## Time Selection Sidebar
**Example:**

![Time selection sidebar showing options to select time range for data display](./images/unit-dashboard-time-selection.png)

**Description:**
- The Time Selection sidebar allows users to select the time range for which they want to view data on the Unit Dashboard. Users can choose from predefined ranges or specify a custom range to analyze performance metrics and downtime reasons for specific periods.

### Components

- **Time Range Selection**: The user can select between realtime and historical data.
  - **Realtime**: The user can select a duration, time unit (hours, minutes, or seconds), and a refresh interval.

![Realtime dashboard configuration panel with duration and refresh interval options](images/unit-dashboard-realtime-config-panel.png)

  - **Historical**: The user can select a start and end date to view historical data.

![Historical date range selector showing calendar interface for start and end date selection](images/unit-dashboard-historical-date-selector.png)

- **Location Selection Tree**: 
  - The user can select a specific location to filter the data displayed on the dashboard. The tree structure allows for easy navigation through the hierarchy of locations.

![Hierarchical location selection tree showing expandable facility, area, and unit nodes](images/unit-dashboard-location-hierarchy-tree.png)
