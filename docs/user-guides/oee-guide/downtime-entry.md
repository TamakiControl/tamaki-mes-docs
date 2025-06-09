---
sidebar_position: 5
title: "Downtime Entry"
description: "OEE Downtime Entry Screen"
---

# Downtime Entry

**Navigation:**

![Downtime entry navigation menu](downtime-entry-navigation.png)

**Example:**
![Downtime entry screen interface](downtime-entry.png)

**Description:**
- The Downtime Entry screen allows users to acknowledge downtime events and enter details about the downtime, such as the reason for the downtime, the start and end times, and any additional notes. This information is crucial for analyzing downtime trends and improving [OEE](terms-and-definitions#oee-overall-equipment-effectiveness).

**Components:**
- [Location Tree](#location-tree)
- [Downtime Reason Tree](#downtime-reason-tree)
- [Downtime Event Table](#downtime-event-table)

## Location Tree
**Example:**
![img_22.png](img_22.png)

**Description:**
- TODO The Location Tree displays the hierarchy of locations within the production line. Users can select a specific location to view and manage downtime events associated with that location. The tree structure allows for easy navigation through different levels of the production line.

## Downtime Reason Tree
**Example:**
![img_23.png](img_23.png)

**Description:**
- The Downtime Reason Tree displays the available downtime reasons that can be selected when entering a downtime event. Users can select a reason to view and manage downtime events associated with that reason. The tree structure allows for easy navigation through different categories of downtime reasons.

## Downtime Event Table
**Example:**
![img_24.png](img_24.png)

**Description:**
- The Downtime Event Table displays a list of downtime events that have been entered for the selected location and downtime reason. Each row in the table represents a specific downtime event.

## Components

### Table Columns
| **Column**          | **Description**                                                                                                                                 |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| **Start Date**      | Start date of the downtime event.                                                                                                               |
| **End Date**        | End date of the downtime event.                                                                                                                 |
| **Duration**        | Duration of the downtime event.                                                                                                                 |
| **State**           | State of the Location during the downtime event.                                                                                                |
| **Location**        | Location that the downtime event is occuring for.                                                                                               |
| **Colour**          | TODO Colour of the state of the downtime event.                                                                                                 |
| **Type**            | Type of the downtime event.                                                                                                                     |
| **Downtime Reason** | Downtime reason associated with the downtime event. see [OEE Downtime Reason Model](../../appendix/data-model/oee-model/oee-downtime-reason.md) |
| **Notes**           | Additional notes or comments about the downtime event.                                                                                          |
| **Acknowledged**    | Boolean of whether the downtime event has been acknowledged.                                                                                    |

### Table Buttons

#### View Event Details
- The View Event Details button <img src="img_25.png" alt="View Event Details Button" style="vertical-align: middle; width: 50px; height: auto;"> opens the following popup:
![img_26.png](img_26.png)

**Description:** Displays detailed information about the selected downtime event. This includes the start and end times, duration, state, location, downtime reason, notes, and whether the event has been acknowledged.

#### Acknowledge Event
- The Acknowledge Event button <img src="img_27.png" alt="Acknowledge Event Button" style="vertical-align: middle; width: 50px; height: auto;"> opens the following popup:
![img_28.png](img_28.png)

**Description:** Allows users to acknowledge the selected downtime event. TODO Acknowledging an event marks it as reviewed and prevents further edits. Users can also add notes related to the acknowledgment.

#### Set Reason Code
- The Set Reason Code button <img src="img_29.png" alt="Set Reason Code Button" style="vertical-align: middle; width: 50px; height: auto;"> opens the downtime reason selection popup:
![img_30.png](img_30.png)

**Description:** TODO Allows users to select a downtime reason for the selected event. The popup displays a tree structure of predefined downtime reasons, enabling users to choose the most appropriate reason for the downtime event. Users can also add notes related to the downtime reason.

#### Split Downtime Event
- The Split Downtime Event button <img src="img_31.png" alt="Split Downtime Event Button" style="vertical-align: middle; width: 50px; height: auto;"> opens the Split Downtime Event popup:
![img_32.png](img_32.png)

**Description:** Allows users to split the selected downtime event into two separate events. This is useful when a downtime event spans multiple reasons or states. The popup allows users to drag the split line to adjust the start and end times of the new event.
