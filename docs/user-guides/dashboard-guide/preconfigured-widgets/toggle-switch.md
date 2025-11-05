---
sidebar_position: 3
title: "Toggle Switch Widget"
description: "Overview of the toggle switch widget"
---

## Toggle Switch Widget

The toggle switch widget is a two-state button that can be used to control a boolean tag. When the switch is toggled on,
the value `true` will be written to the configured tag. When toggled off, the value `false` will be written. This widget
utilizes the 
[Perspective Toggle Switch component](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-toggle-switch)

![toggle_switch_widget.png](../../../../static/img/docs/user-guides/dashboard-guide/preconfigured-widgets/toggle_switch_widget.png)

### Parameters
- **Name**: The name of the widget instance.
- **Tag**: The path of the tag to be controlled by the toggle switch. This should be a boolean tag. Clicking the tag 
icon will open a tag browser to select the desired tag.
- **Writable**: Toggle to enable or disable writing to the tag. If disabled, the switch will be read-only.
- **On Color**: The color of the switch when it is in the "on" position.
- **Off Color**: The color of the switch when it is in the "off"