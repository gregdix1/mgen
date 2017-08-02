// JavaScript Document
jQuery(document).ready(function($) {
    document.getElementById('loadMore').innerHTML = 'Loading..';
    $.get( "http://themillennialgen.com/wp-json/wp/v2/posts", function( data ) {
        $.each( data, function( i, val ) {
            $( "#postList" ).append(
                '<li class="swipeout">' + 
				'<div class="swipeout-content item-content">' +
                    '<div class="post_entry">' +
                    '<div class="post_thumb"><img src="images/photos/photo8.png" alt="" title="" /></div>' +
                    '<div class="post_details">' +
                    '<h2><a href="pages/blog-single-tmg.html">' +
                    val.title.rendered + 
					'</a></h2>' +
                    '<span class="post_date">' +
					 val.date_gmt + 
                    '<p>' +
                    val.excerpt.rendered +
					'</p>' +
                    '</span>' +
					'<span class="post_author">by <a href="#">' + 
					val.author + 
					'</a></span>' + 
					'<span class="post_comments"><a href="#">' + 
					val.featured_media + 
					'</a></span>' + 
                    '<span class="post_comments"><a href="#" data-popup=".popup-social" class="open-popup">' + 
					'<img width="200px" height="auto" src="images/blog-icons4.png" alt="" title="" />' + 
					'</a></span>' + 
					'</div>' + 
					'<div class="post_swipe"><img src="images/swipe_more.png" alt="" title="" /></div>' + 
					'</div>' + 
					'</div>' + 
					'<div class="swipeout-actions-right">' + 
					'<a href="#" class="action1 open-popup" data-popup=".popup-social"><img src="images/icons/white/heart.png" alt="" title="" /></a>' +
					'</div>' +
					'</li>'
            );
        });
		//loadExternalFilerScripst();
        document.getElementById('loadMore').innerHTML = 'Load more posts';
    });
	//setTimeout(function(){ loadExternalFilerScripst(); }, 7500);
	//<div class="footnote"><img src="img/follow-icn.png" width="22" height="auto" class="icnuser" style="margin-left: 1px;"> M-Editor <img src="img/like-icn.png" width="22" height="auto" class="icnuser" >  2    <img src="img/chat-icn.png" width="22" height="auto" class="icnuser" >  1 </div>
  });
  
  ///ext script
  
  function loadExternalFilerScripst() {
    var script = document.createElement("script");
    // This script has a callback function that will run when the script has
    // finished loading.
    script.src = "js/jquery.min.js";
    script.type = "text/javascript";
    //document.getElementsByTagName("body")[0].appendChild(script);
      };
	
/// filter cat reload posts

function loadCatFilter(id) {
    var catID = id
    document.getElementById('loadMore').innerHTML = 'Loading ' + catID;
    $( "#postList" ).hide();
    setTimeout(function(){ unhidePosts(); }, 2000);
  }

function unhidePosts() {
    document.getElementById('loadMore').innerHTML = 'Load more posts';
    $( "#postList" ).show();
  }
      
