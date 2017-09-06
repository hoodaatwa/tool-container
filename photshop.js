<html lang="en">
<head>

  <script>
$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});
  </script>
  
  <b:skin>


/* Outer */
.popup {
    width:100%;
    height:100%;
    display:none;
    position:fixed;
    top:0px;
    left:0px;
    background:rgba(0,0,0,0.75);
}
 
/* Inner */
.popup-inner {
    max-width:700px;
    width:90%;
    padding:40px;
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translate(-50%, -50%);
    transform:translate(-50%, -50%);
    box-shadow:0px 2px 6px rgba(0,0,0,1);
    border-radius:3px;
    background:#fff;
}
 
/* Close Button */
.popup-close {
    width:30px;
    height:30px;
    padding-top:4px;
    display:inline-block;
    position:absolute;
    top:0px;
    right:0px;
    transition:ease 0.25s all;
    -webkit-transform:translate(50%, -50%);
    transform:translate(50%, -50%);
    border-radius:1000px;
    background:rgba(0,0,0,0.8);
    font-family:Arial, Sans-Serif;
    font-size:20px;
    text-align:center;
    line-height:100%;
    color:#fff;
}
 
.popup-close:hover {
    -webkit-transform:translate(50%, -50%) rotate(180deg);
    transform:translate(50%, -50%) rotate(180deg);
    background:rgba(0,0,0,1);
    text-decoration:none;
}
  
</b:skin>
  
  </head>
<body>
<a class="btn" data-popup-open="popup-1" href="#">Open Popup #1</a>
 
<div class="popup" data-popup="popup-1">
    <div class="popup-inner">
        <h2>photoshop by hooda atwa</h2>


<div dir="rtl" style="text-align: right;" trbidi="on">
<iframe align="middle" border="0" frameborder="0" height="650" name="ps" src="http://pixlr.com/editor/" width="750"></iframe><br />
<div id="fb-root">
</div>
<div style="text-align: center;">
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ar_AR/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);[url=http://chatolk.blogspot.com/] شتولك للدردشة[/url]
}(document, 'script', 'facebook-jssdk'));</script><span style="color: #999999; font-size: xx-small;">
product by <a href="http://chatolk.blogspot.com/2014/04/photo-shop-online.html" target="_blank"><span style="color: #999999;">chatolk</span></a></span></div>
</div>



<p><a data-popup-close="popup-1" href="#">Close</a></p>
        <a class="popup-close" data-popup-close="popup-1" href="#">x</a>
    </div>
</div>


</body>
</html>
