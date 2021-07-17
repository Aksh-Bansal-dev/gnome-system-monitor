# Gnome System Monitor
Gnome extension to displays CPU and RAM usage in the panel.

## How to use
- Clone the repo and cd into the directory.
- Run `cat /proc/meminfo` and copy `MemTotal`.
- Open `extension.js` in any text editor and replace `7972508` in the 31'st line with whatever you copied in the previous step. 
- Run 
```bash
mkdir ~/.local/share/gnome-shell/sysmonitor@example.com
cp ./extension.js ~/.local/share/gnome-shell/sysmonitor@example.com/extension.js
cp ./metadata.json ~/.local/share/gnome-shell/sysmonitor@example.com/metadata.json
```
