#!/bin/bash

mkdir ~/.local/share/gnome-shell/extensions/sysmonitor@example.com
cp ./extension.js ~/.local/share/gnome-shell/extensions/sysmonitor@example.com/extension.js
cp ./metadata.json ~/.local/share/gnome-shell/extensions/sysmonitor@example.com/metadata.json
gnome-extensions enable sysmonitor@example.com
