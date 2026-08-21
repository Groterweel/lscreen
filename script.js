(function(){
  "use strict";
  var stateEl=document.getElementById("state");
  var statusEl=document.getElementById("status");
  var fileEl=document.getElementById("file");
  var barEl=document.getElementById("bar");
  var percentEl=document.getElementById("percent");
  var playerEl=document.getElementById("player");
  var mapEl=document.getElementById("map");
  var gamemodeEl=document.getElementById("gamemode");

  function setProgress(p){
    p=Math.max(0,Math.min(100,Number(p)||0));
    barEl.style.width=p+"%";
    percentEl.textContent=Math.round(p)+"%";
  }
  window.GameDetails=function(servername,serverurl,mapname,maxplayers,steamid,gamemode){
    document.title=(servername||"STALKER RP")+" — Loading";
    mapEl.textContent=mapname||"—";
    gamemodeEl.textContent=gamemode||"HBASE";
    playerEl.textContent=steamid||"—";
    stateEl.textContent="СЕРВЕР НАЙДЕН";
    statusEl.textContent="Подключение к "+(servername||"серверу")+"...";
  };
  window.SetStatusChanged=function(status){
    stateEl.textContent="СИНХРОНИЗАЦИЯ";
    statusEl.textContent=status||"Подключение...";
  };
  window.DownloadingFile=function(filename){
    stateEl.textContent="ЗАГРУЗКА";
    fileEl.textContent=filename||"Загрузка файлов...";
  };
  window.SetFilesNeeded=function(needed){
    window._needed=Number(needed)||0;
    updateFiles();
  };
  window.SetFilesTotal=function(total){
    window._total=Number(total)||0;
    updateFiles();
  };
  function updateFiles(){
    if(window._total>0){
      var done=Math.max(0,window._total-window._needed);
      setProgress((done/window._total)*100);
    }
  }
  window.LoadingProgressChanged=function(progress){setProgress(progress);};
  setTimeout(function(){if(!window._started){stateEl.textContent="ОЖИДАНИЕ";statusEl.textContent="Ожидание подключения к серверу...";}},1200);
})();