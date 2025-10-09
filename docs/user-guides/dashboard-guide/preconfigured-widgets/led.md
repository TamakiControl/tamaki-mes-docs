---
sidebar_position: 4
title: "LED Widget"
description: "Overview of the led widget"
---

# LED Widget
The LED widget is a numeric display that looks like a traditional 14-segment or 7-segment LED display. It utilizes the 
[Perspective LED Display component](https://docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-display-palette/perspective-led-display).

![led_widget.png](/static/img/docs/user-guides/dashboard-guide/preconfigured-widgets/led_widget.png)

## Parameters
- **Name**: The name of the widget instance.
- **Tag**: The path of the tag to be displayed on the LED display. This should be a numeric tag. Clicking the tag icon will open
a tag browser to select the desired tag.
- **LED Type**: The type of LED display to use, either 7-segment or 14-segment.
- **Number Format**: The format in which to display the numeric value. Follows Java's 
[DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html) patterns.
- **LED Background Color**: The background color of the LED display.
- **Diode On Color**: The color of the LED segments when they are "on".
- **Diode Off Color**: The color of the LED segments when they are "off".