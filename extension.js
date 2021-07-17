const {St, GLib, Clutter} = imports.gi;
const Main = imports.ui.main;
const Mainloop = imports.mainloop;

let panelButton, panelButtonText, timeout;

function setButtonText () {
    
  var arr = [];
  
  // CPU
  var [ok, out, err, exit] = GLib.spawn_command_line_sync(
    "/bin/bash -c \"grep 'cpu ' /proc/stat | awk '{usage=($2+$4)*100/($2+$4+$5)} END {print usage}'\""
  );
  if (out.length > 0) {
      let cpu = parseFloat(out.toString().replace('\n', ''));
      
    arr.push("CPU: "+cpu.toFixed(2)+"%");
  }
  else{
    arr.push("CPU");   
  }
  

  // MEMORY
  var [ok, out, err, exit] = GLib.spawn_command_line_sync(
    "/bin/bash -c \"cat /proc/meminfo | awk '/MemAvailable/ {print $2/(1024*1024)}'\""
  );
  if (out.length > 0) {
      let mem = parseFloat(out.toString().replace('\n', ''));
      mem = parseFloat(7972508)/(1024*1024) - mem;
      
    arr.push("Mem: "+mem.toFixed(2)+" GB");
  }
  else{
    arr.push("RAM");   
  }
  
  
  
  panelButtonText.set_text( arr.join('      ') );
  
  return true;
}

function init () {
  panelButton = new St.Bin({
    style_class : "panel-button"
  });
  panelButtonText = new St.Label({
    style_class : "examplePanelText",
    text : "Starting ...",
    y_align: Clutter.ActorAlign.CENTER,
  });
  panelButton.set_child(panelButtonText);
}

function enable () {
  Main.panel._rightBox.insert_child_at_index(panelButton, 1);
  timeout = Mainloop.timeout_add_seconds(1.0, setButtonText);
}

function disable () {
  Mainloop.source_remove(timeout);
  Main.panel._rightBox.remove_child(panelButton);
}
