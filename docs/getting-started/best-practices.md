---
sidebar_position: 2
title: "Best Practices"
description: "Best practices for setting up your MES system"
---

# Best Practices

## Use a Separate Tag Provider

Have your TamakiMES tag provide be raw tags, build your own UDTs with Alarming/History/whatever using reference
tags pointing at the raw tags. This way you can change the raw tags without affecting the UDTs.

## No Direct PLC Access

Per the purdue model and security best practices, do not allow direct access to the PLCs from the MES. Instead, use
a gateway or middleware to access the PLCs. This way you can control access to the PLCs and have a single point of
access for all PLCs.

## Local Database

Keep a local database on the MES server for storing data that is not critical to the operation of the MES. This way
you can keep the MES running even if the network goes down. Data in the local database can be synced to the main
database when the network comes back up.

## Inherit Tamaki MES Project

Tamaki MES is distributed with a Perspective project. Your project should inherit this and you leave the Tamaki MES
project as is. This way you can update the Tamaki MES project without affecting your project. You can come up with your
own custom navigation scheme to tie the TamakiMES project into your project, or leave it as an entirely separate
project.

This TamakiMES project will be updated with module releases, so it's best to leave it so that it can slide into your
project
without any issues.

