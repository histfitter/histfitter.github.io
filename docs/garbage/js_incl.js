
function includeBits(title, selected_menu, path, title_image) {
  if(!path)
    path = "./";
  clientSideInclude('head_container',path+'bits/head.html');
  clientSideInclude('menu_container',path+'bits/menu.html');
  clientSideInclude('foot_container',path+'bits/foot.html');

  if(!title) {
    title = "";
  }
  setTitle(title);

  if(selected_menu) {
    var men = document.getElementById('menu_'+selected_menu);
    if(men) {
      men.className = "selected";
    }
  }
  
  if(title_image) {
    var men = document.getElementById('head_title_image');
    if(men) {
      men.src = title_image;
    }
  }
}


function clientSideInclude(id, url) {
  var req = false;
  // For Safari, Firefox, and other non-MS browsers
  if (window.XMLHttpRequest) {
    try {
      req = new XMLHttpRequest();
    } catch (e) {
      req = false;
    }
  } else if (window.ActiveXObject) {
    // For Internet Explorer on Windows
    try {
      req = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        req = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        req = false;
      }
    }
  }
 var element = document.getElementById(id);
 if (!element) {
  alert("Bad id " + id +
   "passed to clientSideInclude." +
   "You need a div or span element " +
   "with this id in your page.");
  return;
 }
  if (req) {
    // Synchronous request, wait till we have it all
    req.open('GET', url, false);
    req.send(null);
    element.innerHTML = req.responseText;

  } else {
    element.innerHTML =
   "Sorry, your browser does not support " +
      "XMLHTTPRequest objects. This page requires " +
      "Internet Explorer 5 or better for Windows, " +
      "or Firefox for any system, or Safari. Other " +
      "compatible browsers may also exist.";
  }
}

function setTitle(title) {
  document.getElementById('title_container').innerHTML = title;
}


