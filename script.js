/* Author: Eric Bjella http://ericbjella.com

*/
var siteSetup = false;
var rootTitle;
var rssXML; 
var rssFeedURL = "http://fireonthemound.libsyn.com//rss"; // must also be updated in index.html in the <head> and rss button

$(document).ready(function() {   
	
	if ( (screen.width < 1024) && (screen.height < 768) ) { 
		window.open(rssFeedURL, "_self");
	}
	//
	// parse rss feed  
	// geeks-rss.xml
	var ajaxRssUrl = "http://pipes.yahoo.com/pipes/pipe.run?_callback=piper&_id=9oyONQzA2xGOkM4FqGIyXQ&_render=rss&feed="+(encodeURIComponent(rssFeedURL))
	if ($.browser.msie) {
		$.log("msie detected");
		ajaxRssUrl = "rss.xml";
	}
	
	$.ajax({
	    type: "GET",
	    url: ajaxRssUrl,
	    dataType: "xml",
	    success: function(rss) { 
			rssXML = rss;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			$.log("errorThrown: "+errorThrown);
		}
	  }); 
	//
	$("#menu .btn").mouseover(menuItemOver);
	$("#menu .btn").mouseout(menuItemOut);
	$("#menu .btn").click(menuItemClick);
	$("#menu .btn").find('a').hide();
	$("#menu .btn .label").css("opacity", 0);
	
//	$("#contactBtn").mouseover(contactItemOver);
//	$("#contactBtn").mouseout(contactItemOut);
	
	$("#appendixHit").mouseover(appendixItemOver);
	$("#appendixHit").mouseout(appendixItemOut);
	//$("#appendixHit").click(menuItemClick);
	$("#appendixHit").click(function(){window.open("http://fireonthemound.tumblr.com/archive", "_blank")});
	//$("#appendixHit").click(function(){window.location = ""}http://fireonthemound.tumblr.com/archive);
	$("#appendixHit").find('a').hide();
	
	$("#footerIcons .btn").mouseover(menuItemOver);
	$("#footerIcons .btn").mouseout(menuItemOut);
	$("#footerIcons .btn").click(menuItemClick);
	$("#footerIcons .btn").find('a').hide();
	
	$("#subsIcons .btn").mouseover(menuItemOver);
	$("#subsIcons .btn").mouseout(menuItemOut);
	$("#subsIcons .btn").click(menuItemClick);
	$("#subsIcons .btn").find('a').hide();
	
	// initialize artwork slides
	$(".artwork").hide();
	
	// initialize credits
	//$("li.creditSlide").hide();
	//$("li.creditSlide.current").show();
	
	// set close button functionality
	$(".closeBtn").click(function() {
		$.address.value("/");
	});
	$(".closeBtn").mouseover(function() {
		$(this).addClass("closeOver");
		$(this).removeClass("closeOff");
	});
	$(".closeBtn").mouseout(function() {
		$(this).addClass("closeOff");
		$(this).removeClass("closeOver");
	});
	$("#episode").find(".closeBtn").unbind("click");
	$("#episode").find(".closeBtn").click(function() {
		$.address.value("/episodes");
	});
	$("#dume").find(".closeBtn").unbind("click");
	$("#dume").find(".closeBtn").click(function() {
		hideDume();
		slideDownCharacters();
	});
	$("#sujin").find(".closeBtn").unbind("click");
	$("#sujin").find(".closeBtn").click(function() {
		hideSujin();
		slideDownCharacters();
	});
	$("#mtilan").find(".closeBtn").unbind("click");
	$("#mtilan").find(".closeBtn").click(function() {
		hideMtilan();
		slideDownCharacters();
	});
	$("#mushin").find(".closeBtn").unbind("click");
	$("#mushin").find(".closeBtn").click(function() {
		hideMushin();
		slideDownCharacters();
	});
	$("#lely").find(".closeBtn").unbind("click");
	$("#lely").find(".closeBtn").click(function() {
		hideLely();
		slideDownCharacters();
	});
	$("#pekra").find(".closeBtn").unbind("click");
	$("#pekra").find(".closeBtn").click(function() {
		hidePekra();
		slideDownCharacters();
	});
	$("#labasu").find(".closeBtn").unbind("click");
	$("#labasu").find(".closeBtn").click(function() {
		hideLabasu();
		slideDownCharacters();
	});
	$("#kriah").find(".closeBtn").unbind("click");
	$("#kriah").find(".closeBtn").click(function() {
		hideKriah();
		slideDownCharacters();
	});
	$("#kirti").find(".closeBtn").unbind("click");
	$("#kirti").find(".closeBtn").click(function() {
		hideKirti();
		slideDownCharacters();
	});
	$("#oorn").find(".closeBtn").unbind("click");
	$("#oorn").find(".closeBtn").click(function() {
		hideOorn();
		slideDownCharacters();
	});
	$("#micah").find(".closeBtn").unbind("click");
	$("#micah").find(".closeBtn").click(function() {
		hideMicah();
		slideDownCharacters();
	});
	$("#moroth").find(".closeBtn").unbind("click");
	$("#moroth").find(".closeBtn").click(function() {
		hideMoroth();
		slideDownCharacters();
	});
	$("#legion").find(".closeBtn").unbind("click");
	$("#legion").find(".closeBtn").click(function() {
		hideLegion();
		slideDownCharacters();
	});
	$("#forlorn").find(".closeBtn").unbind("click");
	$("#forlorn").find(".closeBtn").click(function() {
		hideForlorn();
		slideDownCharacters();
	});
	$("#thao").find(".closeBtn").unbind("click");
	$("#thao").find(".closeBtn").click(function() {
		hideThao();
		slideDownCharacters();
	});
	$("#dalila").find(".closeBtn").unbind("click");
	$("#dalila").find(".closeBtn").click(function() {
		hideDalila();
		slideDownCharacters();
	});
	$("#sarai").find(".closeBtn").unbind("click");
	$("#sarai").find(".closeBtn").click(function() {
		hideSarai();
		slideDownCharacters();
	});
	$("#baalath").find(".closeBtn").unbind("click");
	$("#baalath").find(".closeBtn").click(function() {
		hideBaalath();
		slideDownCharacters();
	});
	
	// set audio player functionality... what we can do now anyway
	$("#episodePlayerControls .btn").mouseover(menuItemOver);
	$("#episodePlayerControls .btn").mouseout(menuItemOut);
	
	// contact page functionality
		
	// characters page functionality
	$("#characters .dumeBtn").mouseover(function() {
		$(this).addClass("dumeBtnOver");
	});
	$("#characters .dumeBtn").mouseout(function() {
		$(this).removeClass("dumeBtnOver");
	});
	$("#characters .dumeBtn").click(function() {
		slideUpCharacters();
		showDume();
		//set char to Prince Dúme;
	});
	$("#characters .sujinBtn").mouseover(function() {
		$(this).addClass("sujinBtnOver");
	});
	$("#characters .sujinBtn").mouseout(function() {
		$(this).removeClass("sujinBtnOver");
	});
	$("#characters .sujinBtn").click(function() {
		slideUpCharacters();
		showSujin();
		//set char to Prince Sújin;
	});
	$("#characters .mtilanBtn").mouseover(function() {
		$(this).addClass("mtilanBtnOver");
	});
	$("#characters .mtilanBtn").mouseout(function() {
		$(this).removeClass("mtilanBtnOver");
	});
	$("#characters .mtilanBtn").click(function() {
		slideUpCharacters();
		showMtilan();
		//set char to Mtilan;
	});
	$("#characters .mushinBtn").mouseover(function() {
		$(this).addClass("mushinBtnOver");
	});
	$("#characters .mushinBtn").mouseout(function() {
		$(this).removeClass("mushinBtnOver");
	});
	$("#characters .mushinBtn").click(function() {
		slideUpCharacters();
		showMushin();
		//set char to Mushin;
	});
	$("#characters .lelyBtn").mouseover(function() {
		$(this).addClass("lelyBtnOver");
	});
	$("#characters .lelyBtn").mouseout(function() {
		$(this).removeClass("lelyBtnOver");
	});
	$("#characters .lelyBtn").click(function() {
		slideUpCharacters();
		showLely();
		//set char to Lely;
	});
	$("#characters .pekraBtn").mouseover(function() {
		$(this).addClass("pekraBtnOver");
	});
	$("#characters .pekraBtn").mouseout(function() {
		$(this).removeClass("pekraBtnOver");
	});
	$("#characters .pekraBtn").click(function() {
		slideUpCharacters();
		showPekra();
		//set char to Pekra;
	});
	$("#characters .labasuBtn").mouseover(function() {
		$(this).addClass("labasuBtnOver");
	});
	$("#characters .labasuBtn").mouseout(function() {
		$(this).removeClass("labasuBtnOver");
	});
	$("#characters .labasuBtn").click(function() {
		slideUpCharacters();
		showLabasu();
		//set char to the labasu;
	});
	$("#characters .kriahBtn").mouseover(function() {
		$(this).addClass("kriahBtnOver");
	});
	$("#characters .kriahBtn").mouseout(function() {
		$(this).removeClass("kriahBtnOver");
	});
	$("#characters .kriahBtn").click(function() {
		slideUpCharacters();
		showKriah();
		//set char to King Kriah;
	});
	$("#characters .kirtiBtn").mouseover(function() {
		$(this).addClass("kirtiBtnOver");
	});
	$("#characters .kirtiBtn").mouseout(function() {
		$(this).removeClass("kirtiBtnOver");
	});
	$("#characters .kirtiBtn").click(function() {
		slideUpCharacters();
		showKirti();
		//set char to Kirti;
	});
	$("#characters .oornBtn").mouseover(function() {
		$(this).addClass("oornBtnOver");
	});
	$("#characters .oornBtn").mouseout(function() {
		$(this).removeClass("oornBtnOver");
	});
	$("#characters .oornBtn").click(function() {
		slideUpCharacters();
		showOorn();
		//set char to Oorn;
	});
	$("#characters .micahBtn").mouseover(function() {
		$(this).addClass("micahBtnOver");
	});
	$("#characters .micahBtn").mouseout(function() {
		$(this).removeClass("micahBtnOver");
	});
	$("#characters .micahBtn").click(function() {
		slideUpCharacters();
		showMicah();
		//set char to Micah;
	});
	$("#characters .morothBtn").mouseover(function() {
		$(this).addClass("morothBtnOver");
	});
	$("#characters .morothBtn").mouseout(function() {
		$(this).removeClass("morothBtnOver");
	});
	$("#characters .morothBtn").click(function() {
		slideUpCharacters();
		showMoroth();
		//set char to Moroth;
	});
	$("#characters .legionBtn").mouseover(function() {
		$(this).addClass("legionBtnOver");
	});
	$("#characters .legionBtn").mouseout(function() {
		$(this).removeClass("legionBtnOver");
	});
	$("#characters .legionBtn").click(function() {
		slideUpCharacters();
		showLegion();
		//set char to Legion;
	});
	$("#characters .forlornBtn").mouseover(function() {
		$(this).addClass("forlornBtnOver");
	});
	$("#characters .forlornBtn").mouseout(function() {
		$(this).removeClass("forlornBtnOver");
	});
	$("#characters .forlornBtn").click(function() {
		slideUpCharacters();
		showForlorn();
		//set char to the Forlorn;
	});
	$("#characters .thaoBtn").mouseover(function() {
		$(this).addClass("thaoBtnOver");
	});
	$("#characters .thaoBtn").mouseout(function() {
		$(this).removeClass("thaoBtnOver");
	});
	$("#characters .thaoBtn").click(function() {
		slideUpCharacters();
		showThao();
		//set char to Lady Thao;
	});
	$("#characters .dalilaBtn").mouseover(function() {
		$(this).addClass("dalilaBtnOver");
	});
	$("#characters .dalilaBtn").mouseout(function() {
		$(this).removeClass("dalilaBtnOver");
	});
	$("#characters .dalilaBtn").click(function() {
		slideUpCharacters();
		showDalila();
		//set char to Dalila;
	});
	$("#characters .saraiBtn").mouseover(function() {
		$(this).addClass("saraiBtnOver");
	});
	$("#characters .saraiBtn").mouseout(function() {
		$(this).removeClass("saraiBtnOver");
	});
	$("#characters .saraiBtn").click(function() {
		slideUpCharacters();
		showSarai();
		//set char to Sarai;
	});
	$("#characters .baalathBtn").mouseover(function() {
		$(this).addClass("baalathBtnOver");
	});
	$("#characters .baalathBtn").mouseout(function() {
		$(this).removeClass("baalathBtnOver");
	});
	$("#characters .baalathBtn").click(function() {
		slideUpCharacters();
		showBaalath();
		//set char to Baalath;
	});
    
	// map page functionality
	$("#map .legendBtn").mouseover(function() {
		$(this).addClass("legendBtnOver");
	});
	$("#map .legendBtn").mouseout(function() {
		$(this).removeClass("legendBtnOver");
	});
	$("#map .legendBtn").click(function() {
		$(this).toggleClass("showLegend").toggleClass("hideLegendBtn")
		
	});
	$("#map .hideLegendBtn").mouseover(function() {
		$(this).addClass("hideLegendBtnOver");
	});
	$("#map .hideLegendBtn").mouseout(function() {
		$(this).removeClass("hideLegendBtnOver");
	});
	$("#map .hideLegendBtn").click(function() {
		console.log("now hide")
		$(this).removeClass("showLegend");
		$(this).removeClass("hideLegendBtn");
	});
	$("#map .baalathBtn").mouseover(function() {
		$(this).addClass("baalathBtnOver");
	});
	$("#map .baalathBtn").mouseout(function() {
		$(this).removeClass("baalathBtnOver");
	});
	$("#map .baalathBtn").click(function() {
		$(this).toggleClass("baalathBtnClick");
	});

	// support page functionality
	$("#support .supportBtn").mouseover(function() {
		$.log('support over');
		$(this).stop().fadeTo('fast',1);
	});
	$("#support .supportBtn").mouseout(function() {
		$.log('support out');
		$(this).stop().fadeTo('fast',0);
	});
	$("#support .donateBtn").click(function() {
		//alert("donate link here");
		$("#fotmDonateForm").submit();
	});
	$("#support .printsBtn").click(function() {
		window.open("http://society6.com/williamjmeyer", "_blank");
		//window.location = "http://society6.com/williamjmeyer";
	});
	$("#support .musicBtn").click(function() {
		window.open("http://vvcg.bandcamp.com/album/fire-on-the-mound", "_blank");
		//window.location = "http://vvcg.bandcamp.com/album/fire-on-the-mound";
	});
	
	
	$("#main").hide();
	
	// set main title
	rootTitle = $.address.title();
	$.address.change(function(event) {
		if (!siteSetup) {
			return;
		}
       	handleContent(event.value); 
    });

	$(window).resize();
});

$(window).load(function() {
	handleIntroAnimations();
	$("#loadingIcon").empty();
});

$(window).resize(function() {
	$("#leftBlack").width(($(window).width() - 1000)/2);
	$("#rightBlack").width(($(window).width() - 1000)/2);
	$("#rightBlack").css("marginLeft", $(window).width() - $("#rightBlack").width());
});

function handleContent(v) {
	var paths = v.split('/');
	//
	// handle browser title
	if (v != 'home' && v != '' && v != '/') {
		if (paths.length > 2) {
			$.address.title(rootTitle + v.split('/').join(' :: ').split("episodes").join("episode")); 
		} else {
			$.address.title(rootTitle + v.split('/').join(' :: ')); 
		}
	} else {
		$.address.title(rootTitle) 
	}
	$.address.tracker();
	//
	// pause player
	$("#episodePlayer").jPlayer("destroy");
	//$("#episodePlayer").remove();
	//
	//clearInterval(creditInterval);
	//
	if (paths[1] == '' || paths[1] == 'home' || v == "" || v == "/") {
		showArtwork(0);
		//doCreditSlideshow();
		$("#main").delay(1000).fadeOut('fast');
		hidePrologue();
		hideEpisodes();
		hideEpisode();
		hideContact();
		hideCharacters();
        hideMap();
		hideSupport();
		hideDume();
		hideSujin();
		hideMtilan();
		hideMushin();
		hideLely();
		hidePekra();
		hideLabasu();
		hideKriah();
		hideKirti();
		hideOorn();
		hideMicah();
		hideMoroth();
		hideLegion();
		hideForlorn();
		hideThao();
		hideDalila();
		hideSarai();
		hideBaalath();
	} else {
		hideArtwork();
		$("#main").fadeIn('fast');
		//
		// prologue
		if (paths[1] == 'prologue') {
			showPrologue();
		} else {
			hidePrologue();
		}
		//
		// episodes index & episode pages
		if (paths[1] == 'episodes' && paths[2] == undefined) {
			showEpisodesBG();
			showEpisodes();
			hideEpisode();
		} else if (paths[1] == 'episodes' && paths[2] != undefined) {
			showEpisodesBG();
			slideUpEpisodes();
			showEpisode(Number(paths[2]));
		} else {
			hideEpisode();
			hideEpisodes();
		}
		//
		// contact
		if (paths[1] == 'contact') {
			showContact();
		} else {
			hideContact();
		}
		//
		// support
		if (paths[1] == 'support') {
			showSupport();
		} else {
			hideSupport();
		}
		//
        // map
		if (paths[1] == 'map') {
			showMap();
		} else {
			hideMap();
		}
		//
		// characters
		if (paths[1] == 'characters') {
			showCharacters();
		} else {
			hideCharacters();
		}		
		//
		// dume
		if (paths[2] == 'dume') {
			showDume();
		} else {
			hideDume();
		}
		//
		// sujin
		if (paths[2] == 'sujin') {
			showSujin();
		} else {
			hideSujin();
		}
		//
		// mtilan
		if (paths[2] == 'mtilan') {
			showMtilan();
		} else {
			hideMtilan();
		}
		//
		// mushin
		if (paths[2] == 'mushin') {
			showMushin();
		} else {
			hideMushin();
		}
		//
		// lely
		if (paths[2] == 'lely') {
			showLely();
		} else {
			hideLely();
		}
		//
		// pekra
		if (paths[2] == 'pekra') {
			showPekra();
		} else {
			hidePekra();
		}
		//
		// labasu
		if (paths[2] == 'labasu') {
			showLabasu();
		} else {
			hideLabasu();
		}
		//
		// kriah
		if (paths[2] == 'kriah') {
			showKriah();
		} else {
			hideKriah();
		}
		//
		// kirti
		if (paths[2] == 'kirti') {
			showKirti();
		} else {
			hideKirti();
		}
		//
		// oorn
		if (paths[2] == 'oorn') {
			showOorn();
		} else {
			hideOorn();
		}
		//
		// micah
		if (paths[2] == 'micah') {
			showMicah();
		} else {
			hideMicah();
		}
		//
		// moroth
		if (paths[2] == 'moroth') {
			showMoroth();
		} else {
			hideMoroth();
		}
		//
		// legion
		if (paths[2] == 'legion') {
			showLegion();
		} else {
			hideLegion();
		}
		//
		// forlorn
		if (paths[2] == 'forlorn') {
			showForlorn();
		} else {
			hideForlorn();
		}
		//
		// thao
		if (paths[2] == 'thao') {
			showThao();
		} else {
			hideThao();
		}
		//
		// dalila
		if (paths[2] == 'dalila') {
			showDalila();
		} else {
			hideDalila();
		}
		//
		// sarai
		if (paths[2] == 'sarai') {
			showSarai();
		} else {
			hideSarai();
		}
		//
		// baalath
		if (paths[2] == 'baalath') {
			showBaalath();
		} else {
			hideBaalath();
		}
	}
}

/* menu functions */
function menuItemOver() {
	$(this).find('.iconHover').stop().animate({
		'opacity': 1,
	}, 500, 'easeOutExpo');
}

function menuItemOut() {
	$(this).find('.iconHover').stop().animate({
		'opacity': 0,
	}, 200, 'easeOutExpo');	
}

function contactItemOver() {
	$(this).find('.iconHover').stop().animate({
		'opacity': 1,
	}, 500, 'easeOutExpo');	
	$(this).find('.label').stop().animate({
		'opacity': 1,
	}, 500, 'easeOutExpo');
}

function contactItemOut() {
	$(this).find('.iconHover').stop().animate({
		'opacity': 0,
	}, 200, 'easeOutExpo');	
	$(this).find('.label').stop().animate({
		'opacity': 0,
	}, 200, 'easeOutExpo');
}

function appendixItemOver() {
	//$.log('$("#daggerFlare"): '+$("#daggerFlare"));
	$("#daggerFlare").stop().animate({
		'opacity': 1,
	}, 500, 'easeOutExpo');	
}
function appendixItemOut() {
	$("#daggerFlare").stop().animate({
		'opacity': 0,
	}, 200, 'easeOutExpo');
}

function menuItemClick() {  
	//$(this).find('a').click();
	var href = $(this).find('a').attr('href');
	//window.location = href;
	
	if (href.indexOf("://")>-1) {
		window.open(href, '_blank');
	} else {
		window.location = href;
	} 
	
}


function handleIntroAnimations() {
	$("#container").css("opacity", 1);
	//
	var origval = Number($("#leftBar").css("marginTop").substr(0, $("#leftBar").css("marginTop").length - 2));
	$("#leftBar").css("marginTop", (origval-400) + 'px');
	$("#leftBar").animate({
		'opacity': 1,
		'marginTop': origval + 'px'
	}, 1000, 'easeOutExpo');
	
	var origval = Number($("#rightBar").css("marginTop").substr(0, $("#rightBar").css("marginTop").length - 2));
	$("#rightBar").css("marginTop", (origval-400) + 'px');
	$("#rightBar").animate({
		'opacity': 1,
		'marginTop': origval + 'px'
	}, 1000, 'easeOutExpo');
	
	var origval = Number($("#topBar").css("marginTop").substr(0, $("#topBar").css("marginTop").length - 2));
	$("#topBar").css("marginTop", (origval-100) + 'px');
	$("#topBar").delay(200).animate({
		'opacity': 1,
		'marginTop': origval + 'px'
	}, 1000, 'easeOutExpo');
	
	var origval = Number($("#bottomBar").css("marginTop").substr(0, $("#bottomBar").css("marginTop").length - 2));
	$("#bottomBar").css("marginTop", (origval-400) + 'px');
	$("#bottomBar").delay(100).animate({
		'opacity': 1,
		'marginTop': origval + 'px'
	}, 1000, 'easeOutExpo');
	

	var origwidth = $("#leftPaper").width();
	$("#leftPaper").width(0);
	$("#leftPaper").delay(500).animate({
		'opacity': 1,
		'width': origwidth
	}, 500, 'easeOutExpo');
	
	var origwidth = $("#rightPaper").width();
	var origval = Number($("#rightPaper").css("marginLeft").substr(0, $("#rightPaper").css("marginLeft").length - 2));
	$("#rightPaper").width(0);
	$("#rightPaper").css("marginLeft", (origval+origwidth) + 'px');
	$("#rightPaper").delay(700).animate({
		'opacity': 1,
		'marginLeft': origval + 'px',
		'width': origwidth
	}, 500, 'easeOutExpo');
	
	var origval = Number($("#topPaper").css("marginTop").substr(0, $("#topPaper").css("marginTop").length - 2));
	$("#topPaper").css("marginTop", (origval-$("#topPaper").height()) + 'px');
	$("#topPaper").css("opacity", 1);
	$("#topPaper").delay(900).animate({
		'marginTop': origval + 'px'
	}, 1000, 'easeOutExpo');
	
	var origval = Number($("#bottomPaper").css("marginTop").substr(0, $("#bottomPaper").css("marginTop").length - 2));
	$("#bottomPaper").css("marginTop", (origval-$("#bottomPaper").height() * 2 / 3) + 'px');
	$("#bottomPaper").delay(1300).animate({
		'opacity': 1,
		'marginTop': origval + 'px'
	}, 1000, 'easeOutExpo');
	
	$("#mainBG").delay(1350).animate({
		'opacity': 1
	}, 1000, 'linear');	
	 
	$("#menu .btn").each(function(index, value) {
        
		var origval = Number($(this).css("marginLeft").substr(0, $(this).css("marginLeft").length - 2));
        
		if (index == $("#menu .btn").length-1) {
			// do nothing for contact button
		} else if (index+1 > $("#menu .btn").length/2) {
			$(this).css("marginLeft", (origval+200) + 'px');
		} else if (index == 2) {
			$(this).css("marginLeft", (origval+200) + 'px');
		} else {
            console.log(index + " this is left");
			$(this).css("marginLeft", (origval-200) + 'px');
		}
		$(this).delay(1500 + index * 500).animate({
			'opacity': 1,
			'marginLeft': origval
		}, 3000, 'easeOutExpo');
		/*
		$(this).find(".icon").rotate(-180);
		$(this).find(".icon").animate({
			rotate: 0
		}, 'fast');
		*/
		//
		//if (index != $("#menu .btn").length-1) {
			$(this).find('.label').delay(2700 + index * 500).animate({
				'opacity': 1,
			}, 800, 'easeOutExpo');
		//}
	});
	
	$("#followus").delay(3000).animate({
		'opacity': 1
	}, 500, 'linear');
	$("#footerIcons .btn").each(function(index, value) {
		$(this).delay(3500 + index * 100).animate({
			'opacity': 1
		}, 500, 'linear');
	});
	
	$("#subsIcons .btn").each(function(index, value) {
		$(this).delay(3500 + index * 100).animate({
			'opacity': 1
		}, 500, 'linear');
	});
	
	var origval = $("#dagger").width();
	$("#dagger").width(0);
	$("#dagger").css('opacity', 1);
	$("#dagger").delay(3500).animate({
		"width": origval
	}, 1300, 'easeOutExpo')
	
	
	
	$("#copyright").delay(3000).animate({
		'opacity': 1
	}, 500, 'linear', siteSetupComplete);
	
	

}

function siteSetupComplete() {
	siteSetup = true;
	handleContent($.address.value());
}

/*
var creditInterval;
function doCreditSlideshow() {
	curCredit = $("li.creditSlide").length - 1;
	startCreditSlide();
	creditInterval = setInterval(startCreditSlide, 4000);
}

var curCredit;
function startCreditSlide() {
	var lastCredit = curCredit;
	curCredit++;
	if (curCredit >= $("li.creditSlide").length) {
		curCredit = 0;
	}
	$("li.creditSlide").each(function(index, value) {
		if (index == lastCredit) {
			$(this).fadeOut('slow');
		} else if (index == curCredit) {
			$(this).delay(500).fadeIn('slow');
		}
	});
	
}
*/

var artworkTimer;
function showArtwork(num) {
	$(".artwork").each(function(i, v) {
		if (i==num) {
			$(this).fadeIn('slow');
		} else {
			$(this).fadeOut('slow');
		}
	});
	num++;
	if (num >= $(".artwork").length) {
		num = 0;
	}
	artworkTimer = setTimeout("showArtwork("+num+")", 6200);
}
function hideArtwork() {
	clearTimeout(artworkTimer);
	$(".artwork").fadeOut('slow');
}

function showPrologue() {
	$("#prologue").show();
	$("#prologue").find(".leftLeaf").show();
	$("#prologue").find(".rightLeaf").show();
	$("#prologue").find(".content").show();
	$("#prologue").find(".title").show();
	$("#prologue").find(".closeBtn").show();
	var vpsrc = '<iframe src="http://player.vimeo.com/hubnut/channel/191415?color=44bbff&amp;background=000000&amp;slideshow=0&amp;video_title=1&amp;video_byline=0" width="629" height="354" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
	$("#prologue").find(".videoPlayer").html(vpsrc);
	
	$("#prologue").find(".leftLeaf").css("marginLeft", -100);
	$("#prologue").find(".leftLeaf").css("marginTop", -300);
	$("#prologue").find(".leftLeaf").stop().animate({
		"marginLeft":-11,
		"marginTop":-165,
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#prologue").find(".rightLeaf").css("marginTop", -500);
	$("#prologue").find(".rightLeaf").stop().delay(300).animate({
		"marginTop":-165,
		"opacity":1
	}, 1000, 'easeOutExpo');
		
	$("#prologue").find(".content").css("marginLeft", -1000);
	$("#prologue").find(".content").stop().delay(500).animate({
		"marginLeft":40,
		"opacity":1
	}, 1000, 'easeOutExpo');

	$("#prologue").find(".title").css("marginLeft", -500);
	$("#prologue").find(".title").stop().delay(500).animate({
		"marginLeft":37,
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#prologue").find(".closeBtn").css("marginTop", -500);
	$("#prologue").find(".closeBtn").stop().delay(500).animate({
		"marginTop":-80,
		"opacity":1
	}, 1000, 'easeOutExpo');
}
function hidePrologue() {
	
	$("#prologue").find(".leftLeaf").stop().animate({
		"marginLeft":-100,
		"marginTop":-300,
		"opacity":0
	}, 1000, 'easeOutExpo', function() {
		$("#prologue").find(".leftLeaf").hide();
	});
	
	$("#prologue").find(".rightLeaf").stop().delay(300).animate({
		"marginTop":-500,
		"opacity":1
	}, 1000, 'easeOutExpo', function() {
		$("#prologue").find(".rightLeaf").hide();
	});
	
	$("#prologue").find(".content").stop().delay(300).animate({
		"marginLeft":"-1000px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#prologue").find(".videoPlayer").empty();
		$("#prologue").hide();
		$("#prologue").find(".content").hide();
	});
	
	$("#prologue").find(".title").stop().animate({
		"marginLeft":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#prologue").find(".title").hide();
	});
	
	$("#prologue").find(".closeBtn").stop().delay(300).animate({
		"marginTop":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#prologue").find(".closeBtn").hide();
	});
}


function showEpisodesBG() {
	$("#episodes").show();
	//
	// handle bg elements
	if (!$("#episodes").hasClass("bgElementsShowing")) {
		
		$("#episodes").find(".leftLeaf").show();
		$("#episodes").find(".blueCrystal").show();
		$("#episodes").find(".topLeaf").show();
		$("#episodes").find(".blueCrystal").show();
		$("#episodes").addClass("bgElementsShowing");
		
		$("#episodes").find(".leftLeaf").css('marginTop', 100);
		$("#episodes").find(".leftLeaf").css('marginLeft', 200);
		$("#episodes").find(".leftLeaf").stop().delay(300).animate({
			"marginTop":-172,
			"marginLeft":-16,
			"opacity":1
		}, 1000, 'easeInOutSine');

		$("#episodes").find(".topLeaf").css("marginTop", -500);
		$("#episodes").find(".topLeaf").stop().delay(300).animate({
		"marginTop":-165,
		"opacity":1
		}, 1000, 'easeOutExpo');

		$("#episodes").find(".blueCrystal").css('marginTop', -400);
		$("#episodes").find(".blueCrystal").fadeTo(0, 1);
		$("#episodes").find(".blueCrystal").stop().animate({
			"marginTop":-165,
			"opacity":1
		}, 1000, 'easeOutSine');
	}
}

function showEpisodes() {
	
	$("#episodes").find(".content").show();
	$("#episodes").find(".title").show();
	$("#episodes").find(".closeBtn").show();
	
	if (!$("#episodes").hasClass("movedUp")) {
		$("#episodes").find(".content").css("marginLeft", -1000);
		$("#episodes").find(".content").stop().animate({
			"marginLeft":0,
			"opacity":1
		}, 1000, 'easeOutExpo');
	
		$("#episodes").find(".title").css("marginLeft", -500);
		$("#episodes").find(".title").stop().animate({
			"marginLeft":37,
			"opacity":1
		}, 1000, 'easeOutExpo');
		
		$("#episodes").find(".closeBtn").css("marginTop", -500);
		$("#episodes").find(".closeBtn").stop().animate({
			"marginTop":-80,
			"opacity":1
		}, 1000, 'easeOutExpo');
	} else {
		$("#episodes").removeClass("movedUp")
		$("#episodes").find(".content").stop().animate({
			"marginTop":0,
			"opacity":1
		}, 1500, 'easeInOutExpo');

		$("#episodes").find(".title").stop().animate({
			"marginTop":-55,
			"opacity":1
		}, 1500, 'easeInOutExpo');

		$("#episodes").find(".closeBtn").stop().animate({
			"marginTop":-80,
			"opacity":1
		}, 1500, 'easeInOutExpo');
	}
	if (!$("#episodes").hasClass("opened")) {
		$("#episodes").addClass("opened");
		var eps = getEpisodes();
		handleEpisodePagination(eps);
		showEpisodesPage(0, eps);
	}
}

function handleEpisodePagination(eps) {
	var curPage = 0;
	var numCols = 3;
	var numRows = 4;
	var numPerPage = numCols * numRows;
	var numPages = Math.ceil(eps.length / numPerPage);
	//
	var navHTML = "";
	navHTML += "<div class='backBtn'></div>";
	if (numPages > 1) {
		for (var i=0; i<numPages; i++) {
			navHTML += "<div class='paginationDot' id='dot"+i+"'></div>";
		}
	}
	navHTML += "<div class='nextBtn'></div>";
	$("#episodePagination").html(navHTML);
	$("#episodePagination").css("marginLeft", (853 - $("#episodePagination").width()) / 2);
	//
	// functionality
	if (numPages > 1) {
		$(".backBtn").mouseover(function() {
			$(this).addClass("backBtnOver");
		});
		$(".backBtn").mouseout(function() {
			$(this).removeClass("backBtnOver");
		});
		$(".backBtn").click(function() {
			curPage--;
			if (curPage < 0) {
				curPage = numPages-1;
			}
			showEpisodesPage(curPage, eps, numPages);
		});
		$(".nextBtn").mouseover(function() {
			$(this).addClass("nextBtnOver");
		});
		$(".nextBtn").mouseout(function() {
			$(this).removeClass("nextBtnOver");
		});
		$(".nextBtn").click(function() {
			curPage++;
			if (curPage >= numPages) {
				curPage = 0;
			}
			showEpisodesPage(curPage, eps, numPages);
		});
		$(".paginationDot").mouseover(function() { 
			if ($(this).hasClass("currentDot")) { return; }
			$(this).addClass("paginationDotOver");
		});
		$(".paginationDot").mouseout(function() {    
			$(this).removeClass("paginationDotOver");
		});
		$(".paginationDot").each(function(i, v) {
			$(this).click(function() {
				if ($(this).hasClass("currentDot")) { return; } 
				var num = Number($(this).attr("id").substr(3));
				curPage = num;
				showEpisodesPage(curPage, eps, numPages);
			});
		}); 
	} else {  
		$(".backBtn").css("cursor", "default");
		$(".backBtn").css("opacity", .42);
		$(".nextBtn").css("cursor", "default");
		$(".nextBtn").css("opacity", .42);
	}
}

function showEpisodesPage(num, eps) {
	var numCols = 3;
	var numRows = 4;
	var numPerPage = numCols * numRows;
	var curCol = 0;
	var curRow = 0;
	//
	var epHTML = "";
	//
	// fade out old first
	var d = 0;
	var count = $(".episodeBtn").length;
	$(".episodeBtn").each(function(i, v) {
		var episodeBtn = $(this);
		$.log("(this): "+$(this).length);
		$(this).addClass("oldEpisode");
		if (i == count - 1) {
			$(this).delay(d).fadeTo('fast', 0, function() {$.log('$(".oldEpisode"): '+$(".oldEpisode").length);$(".oldEpisode").parent().remove()});
		} else {
			$(this).delay(d).fadeTo('fast', 0);
		}
		d += 20;
	});
	for (var i=num*numPerPage; i < (num+1) * numPerPage; i++) {
		//
		if (curRow == 0) {
			epHTML += "<div class='episodeCol'>"; // start new column
		}
		//
		if (eps[i] != undefined) {
			epHTML += "<div class='episodeBtn'>";
			epHTML += "<a href='#/episodes/"+(i+1)+"'>"+eps[i].title+"</a>";
			epHTML += "</div>";
		} else {
			epHTML += "<div class='episodeBtn episodeBtnInert'></div>";
		}
		//
		curRow++;
		if (curRow >= numRows) {
			curRow = 0;
			curCol++;
			epHTML += "</div>"; // end column
		}
		//
	}
	$("#episodeButtons").append(epHTML);
	$(".episodeBtn").each(function() {
		if (!$(this).hasClass("oldEpisode")) {
			$(this).css("opacity", 0);
			$(this).click(function() {
				$.address.value($(this).find("a").attr("href").substr(1));
			});
			$(this).css("marginTop", 50);
			$(this).delay(d).animate({
				"marginTop":0
			}, "fast", "easeOutExpo");
			$(this).delay(d).fadeTo('fast', 1);
			d += 20;
		}
	});
	$(".episodeBtn").mouseover(function() {
		if (!$(this).hasClass("episodeBtnInert")) {
			$(this).addClass("episodeBtnOver");
		}
	});
	$(".episodeBtn").mouseout(function() {
		if (!$(this).hasClass("episodeBtnInert")) {
			$(this).removeClass("episodeBtnOver");
		}
	}); 
	//
	// show selected pagination dot
	$(".paginationDot").each(function(i,v) {
	 	if (i==num) {
			$(this).addClass("currentDot");
		} else {
			$(this).removeClass("currentDot");
		}
	});
}

function hideEpisodes() {
	
	$("#episodes").removeClass("movedUp");
	$("#episodes").removeClass("bgElementsShowing")

	$("#episodes").find(".leftLeaf").stop().animate({
		"marginTop":100,
		"marginLeft":200,
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#episodes").find(".leftLeaf").hide();
	});
	
	$("#episodes").find(".topLeaf").stop().delay(300).animate({
		"marginTop":-500,
		"opacity":1
	}, 1000, 'easeOutExpo', function() {
		$("#episodes").find(".topLeaf").hide();
	});
	
	$("#episodes").find(".blueCrystal").stop().animate({
		"marginTop":-400,
		"marginLeft":660,
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#episodes").find(".blueCrystal").hide();
	});
	
	$("#episodes").find(".content").stop().delay(300).animate({
		"marginLeft":"-1000px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#episodes").hide();
		$("#episodes").find(".content").hide();
	});
	
	$("#episodes").find(".title").stop().animate({
		"marginLeft":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#episodes").find(".title").hide();
	});
	
	$("#episodes").find(".closeBtn").stop().delay(300).animate({
		"marginTop":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#episodes").find(".closeBtn").hide();
	});
	
	

}

function slideUpEpisodes() {
	$("#episodes").addClass("movedUp");
	$("#episodes").find(".content").animate({
		"marginTop":"-1000px"
	}, 1500, 'easeInOutExpo', function() {
		//$("#episodes").find(".content").hide();
	});
	
	$("#episodes").find(".title").animate({
		"marginTop":"-500px"
	}, 1500, 'easeInOutExpo', function() {
		//$("#episodes").find(".title").hide();
	});
	
	$("#episodes").find(".closeBtn").animate({
		"marginTop":"-500px"
	}, 1500, 'easeInOutExpo', function() {
		//$("#episodes").find(".closeBtn").hide();
	});
}

function showEpisode(num) {
	$("#episode").show();
	$("#episode").find(".content").show();
	$("#episode").find(".title").show();
	$("#episode").find(".closeBtn").show();
	
	$("#episode").find(".content").css("marginTop", -1000);
	$("#episode").find(".content").animate({
		"marginTop":0,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#episode").find(".closeBtn").css("marginTop", -500);
	$("#episode").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
	
	var eps = getEpisodes();
	var fileName = eps[(num-1)].mp3; //"FotM_Episode_000.mp3";
	
   	$("#episodePlayer").removeClass("initSetup");
	$("#episodePlayer").jPlayer( {
	    ready: function () {
		  var jPlayerElement = $(this);
	      $(this).jPlayer("setMedia", {
	        mp3: fileName,
	      }).jPlayer("stop");
	    },
		ended: function() { 
	  	},
	    supplied: "mp3",
	    swfPath: "js/plugins/",
		solution: 'html,flash',
		preload: 'metadata',
		errorAlerts: true,
		warningAlerts: false,
		cssSelectorAncestor: '#episodePlayerControls',
		 cssSelector: {
		  videoPlay: '.playBtn',
		  play: '.playBtn',
		  pause: '.pauseBtn',
		  seekBar: '.jp-seek-bar',
		  playBar: '.jp-play-bar',
	      currentTime: ".jp-current-time",
		  duration: ".jp-duration"
		 }
	});
	$(".downloadBtn").find("a").attr("href", fileName);
	$("#episodePlayerControls .jp-progress").hide();
	$("#episodePlayerControls .playBtn").click(function() {
		$("#episodePlayerControls .jp-progress").show();
	});
	
	$("#episode").find("#title").html(eps[(num-1)].title);
	$("#episode").find("#description").html(eps[(num-1)].description);
	$("#episode").find("#tagline").html(eps[(num-1)].tagline);
}

function hideEpisode() {
	$("#episode").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#episode").hide();
		$("#episode").find(".content").hide();
	});

	$("#episode").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#episode").find(".closeBtn").hide();
	});
}


function showContact() {
	$("#contact").show();
	$("#contact").find(".leftLeaf").show();
	$("#contact").find(".topLeaf").show();
	$("#contact").find(".feather").show();
	$("#contact").find(".content").show();
	$("#contact").find(".title").show();
	$("#contact").find(".closeBtn").show();
	
	$("#contact").find(".leftLeaf").css("marginLeft", -80);
	$("#contact").find(".leftLeaf").css("marginTop", -400);
	$("#contact").find(".leftLeaf").stop().animate({
		"marginLeft":-14,
		"marginTop":-155,
		"opacity":1
	}, 800, 'easeOutExpo');
	
	$("#contact").find(".topLeaf").css("marginTop", -500);
	$("#contact").find(".topLeaf").stop().delay(300).animate({
		"marginTop":-165,
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#contact").find(".feather").css("marginLeft", 1000);
	$("#contact").find(".feather").css("marginTop", -300);
	$("#contact").find(".feather").stop().delay(700).animate({
		"marginLeft":700,
		"marginTop":-146,
		"opacity":1
	}, 1200, 'easeOutExpo');
	
	$("#contact").find(".content").css("marginLeft", 1000);
	$("#contact").find(".content").stop().delay(400).animate({
		"marginLeft":40,
		"opacity":1
	}, 1000, 'easeOutExpo');

	$("#contact").find(".title").css("marginLeft", -500);
	$("#contact").find(".title").stop().delay(400).animate({
		"marginLeft":37,
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#contact").find(".closeBtn").css("marginTop", -500);
	$("#contact").find(".closeBtn").stop().delay(400).animate({
		"marginTop":-80,
		"opacity":1
	}, 1000, 'easeOutExpo');
}

function hideContact() {
	
	$("#contact").find(".leftLeaf").stop().delay(500).animate({
		"marginLeft":-80,
		"marginTop":-400,
		"opacity":0
	}, 1000, 'easeOutExpo', function() {
		$("#contact").find(".leftLeaf").hide();
		$("#contact").hide();
	});
	
	$("#contact").find(".topLeaf").stop().delay(300).animate({
		"marginTop":-500,
		"opacity":1
	}, 1000, 'easeOutExpo', function() {
		$("#contact").find(".topLeaf").hide();
	});
	
	$("#contact").find(".feather").stop().delay(0).animate({
		"marginLeft":1000,
		"marginTop":-300,
		"opacity":0
	}, 1000, 'easeOutExpo', function() {
		$("#contact").find(".feather").hide();
	});
	
	$("#contact").find(".content").stop().delay(0).animate({
		"marginLeft":"1000px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#contact").find(".content").hide();
	});
	
	$("#contact").find(".title").stop().delay(0).animate({
		"marginLeft":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#contact").find(".title").hide();
	});
	
	$("#contact").find(".closeBtn").stop().delay(0).animate({
		"marginTop":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#contact").find(".closeBtn").hide();
	});
}


function showCharacters() {

	$("#characters").show();
	$("#characters").find(".leftLeaf").show();
	$("#characters").find(".topLeaf").show();
	$("#characters").find(".content").show();
	$("#characters").find(".title").show();
	$("#characters").find(".closeBtn").show();
	$("#characters").find(".rightLeaf").show();
	
	$("#characters").find(".leftLeaf").css('marginLeft', -80);
	$("#characters").find(".leftLeaf").css('marginTop', -400);
	$("#characters").find(".leftLeaf").stop().animate({
			"marginLeft":-14,
			"marginTop":-155,
			"opacity":1
		}, 800, 'easeOutExpo');

	$("#characters").find(".topLeaf").css("marginTop", -500);
	$("#characters").find(".topLeaf").stop().delay(300).animate({
		"marginTop":-165,
		"opacity":1
		}, 1000, 'easeOutExpo');
		
	$("#characters").find(".content").css("marginLeft", 1000);
	$("#characters").find(".content").stop().animate({
			"marginLeft":40,
			"opacity":1
		}, 1000, 'easeOutExpo');
		
	$("#characters").find(".title").css("marginLeft", -500);
	$("#characters").find(".title").stop().animate({
			"marginLeft":37,
			"opacity":1
		}, 1000, 'easeOutExpo');
		
	$("#characters").find(".closeBtn").css("marginTop", -500);
	$("#characters").find(".closeBtn").stop().animate({
			"marginTop":-80,
			"opacity":1
		}, 1000, 'easeOutExpo');
		
	$("#characters").find(".rightLeaf").css("marginLeft", -200);
	$("#characters").find(".rightLeaf").css("marginTop", 75);
	$("#characters").find(".rightLeaf").css("opacity", 1);
	$("#characters").find(".rightLeaf").stop().animate({
		"marginLeft":810,
		"marginTop":345,
		"opacity":1
	}, 1400, 'easeInOutSine');
		
	
	
	$("#characters").find(".dumeBtn").stop().delay(1000).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".sujinBtn").stop().delay(1900).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".mtilanBtn").stop().delay(1300).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".mushinBtn").stop().delay(1600).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".lelyBtn").stop().delay(2200).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".pekraBtn").stop().delay(2700).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	
	
	$("#characters").find(".labasuBtn").stop().delay(1700).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".kriahBtn").stop().delay(2000).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".kirtiBtn").stop().delay(1100).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".oornBtn").stop().delay(2300).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".micahBtn").stop().delay(1400).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".morothBtn").stop().delay(2600).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	
	
	$("#characters").find(".legionBtn").stop().delay(2500).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".forlornBtn").stop().delay(1200).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".thaoBtn").stop().delay(1800).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".dalilaBtn").stop().delay(2400).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".saraiBtn").stop().delay(1500).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#characters").find(".baalathBtn").stop().delay(2100).animate({
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	
}

function hideCharacters() {

	$("#characters").find(".leftLeaf").stop().delay(600).animate({
		"marginLeft":-155,
		"marginTop":-300,
		"opacity":0
	}, 1000, 'easeOutExpo', function() {
		$("#characters").find(".leftLeaf").hide();
	});
	
	$("#characters").find(".topLeaf").stop().delay(100).animate({
		"marginTop":-500,
		"opacity":1
	}, 1000, 'easeOutExpo', function() {
		$("#characters").find(".topLeaf").hide();
	});
	
	$("#characters").find(".rightLeaf").stop().delay(300).animate({
		"marginLeft":1400,
		"marginTop":100,
		"opacity":0
	}, 1200, 'easeInOutSine', function() {
		$("#characters").find(".rightLeaf").hide();
	});
	
	$("#characters").find(".content").stop().delay(300).animate({
		"marginLeft":"1000px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#characters").hide();
		$("#characters").find(".content").hide();
	});
	
	$("#characters").find(".title").stop().delay(0).animate({
		"marginLeft":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#characters").find(".title").hide();
	});
	
	$("#characters").find(".closeBtn").stop().delay(300).animate({
		"marginTop":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#characters").find(".closeBtn").hide();
	});
}

function showMap() {
	$("#map").show();
    $("#map").find(".leftLeaf").show();
	$("#map").find(".topLeaf").show();
    $("#map").find(".content").show();
	$("#map").find(".title").show();
	$("#map").find(".closeBtn").show();
    
	$("#map").find(".leftLeaf").css("marginLeft", -155);
	$("#map").find(".leftLeaf").css("marginTop", -100);
	$("#map").find(".leftLeaf").stop().animate({
		"marginLeft":-15,
		"marginTop":-147,
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#map").find(".topLeaf").css("marginTop", -500);
	$("#map").find(".topLeaf").stop().delay(300).animate({
		"marginTop":-165,
		"opacity":1
		}, 1000, 'easeOutExpo');
	
	$("#map").find(".content").css("marginLeft", 1000);
	$("#map").find(".content").stop().delay(400).animate({
		"marginLeft":40,
		"opacity":1
	}, 1000, 'easeOutExpo');

	$("#map").find(".title").css("marginLeft", -500);
	$("#map").find(".title").stop().delay(400).animate({
		"marginLeft":37,
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#map").find(".closeBtn").css("marginTop", -500);
	$("#map").find(".closeBtn").stop().delay(400).animate({
		"marginTop":-80,
		"opacity":1
	}, 1000, 'easeOutExpo');
}
function hideMap() {
    
	$("#map").find(".leftLeaf").stop().delay(600).animate({
		"marginLeft":-155,
		"marginTop":-300,
		"opacity":0
	}, 1000, 'easeOutExpo', function() {
		$("#map").find(".leftLeaf").hide();
	});
	
	$("#map").find(".topLeaf").stop().delay(100).animate({
		"marginTop":-500,
		"opacity":1
	}, 1000, 'easeOutExpo', function() {
		$("#map").find(".topLeaf").hide();
	});
	
		$("#map").find(".content").stop().delay(0).animate({
		"marginLeft":"1000px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#map").find(".content").hide();
	});
    
	
	$("#map").find(".title").stop().delay(0).animate({
		"marginLeft":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#map").find(".title").hide();
	});
	
	$("#map").find(".closeBtn").stop().delay(0).animate({
		"marginTop":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#map").find(".closeBtn").hide();
	});
}

function showSupport() {
	$("#support").show();
	$("#support").find(".leftLeaf").show();
	$("#support").find(".topLeaf").show();
	$("#support").find(".rightLeaf").show();
	$("#support").find(".content").show();
	$("#support").find(".title").show();
	$("#support").find(".closeBtn").show();
	
	$("#support").find(".leftLeaf").css("marginLeft", -155);
	$("#support").find(".leftLeaf").css("marginTop", -100);
	$("#support").find(".leftLeaf").stop().animate({
		"marginLeft":-15,
		"marginTop":-147,
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#support").find(".topLeaf").css("marginTop", -500);
	$("#support").find(".topLeaf").stop().delay(100).animate({
		"marginTop":-170,
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#support").find(".rightLeaf").css("marginLeft", -200);
	$("#support").find(".rightLeaf").css("marginTop", 75);
	$("#support").find(".rightLeaf").css("opacity", 1);
	$("#support").find(".rightLeaf").stop().animate({
		"marginLeft":800,
		"marginTop":290,
		"opacity":1
	}, 1400, 'easeInOutSine');
	
	$("#support").find(".content").css("marginLeft", 1000);
	$("#support").find(".content").stop().delay(400).animate({
		"marginLeft":40,
		"opacity":1
	}, 1000, 'easeOutExpo');

	$("#support").find(".title").css("marginLeft", -500);
	$("#support").find(".title").stop().delay(400).animate({
		"marginLeft":37,
		"opacity":1
	}, 1000, 'easeOutExpo');
	
	$("#support").find(".closeBtn").css("marginTop", -500);
	$("#support").find(".closeBtn").stop().delay(400).animate({
		"marginTop":-80,
		"opacity":1
	}, 1000, 'easeOutExpo');
}
function hideSupport() {
	$("#support").find(".leftLeaf").stop().delay(600).animate({
		"marginLeft":-155,
		"marginTop":-300,
		"opacity":0
	}, 1000, 'easeOutExpo', function() {
		$("#support").find(".leftLeaf").hide();
	});
	
	$("#support").find(".topLeaf").stop().delay(100).animate({
		"marginTop":-500,
		"opacity":1
	}, 1000, 'easeOutExpo', function() {
		$("#support").find(".topLeaf").hide();
	});
	
	$("#support").find(".rightLeaf").stop().animate({
		"marginLeft":1400,
		"marginTop":200,
		"opacity":0
	}, 1200, 'easeInOutSine', function() {
		$("#support").find(".rightLeaf").hide();
	});
	
	$("#support").find(".content").stop().delay(0).animate({
		"marginLeft":"1000px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#support").hide();
		$("#support").find(".content").hide();
	});
	
	$("#support").find(".title").stop().delay(0).animate({
		"marginLeft":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#support").find(".title").hide();
	});
	
	$("#support").find(".closeBtn").stop().delay(0).animate({
		"marginTop":"-500px",
		"opacity":0
	}, 1000, 'easeInOutExpo', function() {
		$("#support").find(".closeBtn").hide();
	});
}


function slideUpCharacters() {
	
	$("#characters").find(".content").animate({
		"marginTop":"-1000px"
	}, 1400, 'easeInOutExpo', function() {
		//$("#characters").find(".content").hide();
	});
	
	$("#characters").find(".title").animate({
		"marginTop":"-500px"
	}, 1000, 'easeInOutExpo', function() {
		//$("#characters").find(".title").hide();
	});
	
	$("#characters").find(".rightLeaf").stop().animate({
		"marginLeft":1400,
		"marginTop":200,
		"opacity":0
	}, 1200, 'easeInOutSine', function() {
		$("#characters").find(".rightLeaf").hide();
	});
	
	$("#characters").find(".closeBtn").animate({
		"marginTop":"-500px"
	}, 1000, 'easeInOutExpo', function() {
		//$("#characters").find(".closeBtn").hide();
	});
}


function slideDownCharacters() {
	
	$("#characters").find(".content").animate({
		"marginTop":"29px"
	}, 1200, 'easeInOutExpo', function() {
		//$("#characters").find(".content").hide();
	});
	
	$("#characters").find(".title").animate({
		"marginTop":"-55px"
	}, 1000, 'easeInOutExpo', function() {
		//$("#characters").find(".title").hide();
	});
	
	$("#characters").find(".closeBtn").animate({
		"marginTop":"-80px"
	}, 1000, 'easeInOutExpo', function() {
		//$("#characters").find(".closeBtn").hide();
	});
}

function showDume() {
	
	$("#dume").show();

	$("#dume").find(".content").show();
	$("#dume").find(".title").show();
	$("#dume").find(".closeBtn").show();
	
	$("#dume").find(".content").css("marginTop", -1000);
	$("#dume").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#dume").find(".closeBtn").css("marginTop", -500);
	$("#dume").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideDume() {

	$("#dume").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#dume").hide();
		$("#dume").find(".content").hide();
	});

	$("#dume").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#dume").find(".closeBtn").hide();
	});
	
}

function showSujin() {
	
	$("#sujin").show();

	$("#sujin").find(".content").show();
	$("#sujin").find(".title").show();
	$("#sujin").find(".closeBtn").show();
	
	$("#sujin").find(".content").css("marginTop", -1000);
	$("#sujin").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#sujin").find(".closeBtn").css("marginTop", -500);
	$("#sujin").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideSujin() {

	$("#sujin").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#sujin").hide();
		$("#sujin").find(".content").hide();
	});

	$("#sujin").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#sujin").find(".closeBtn").hide();
	});
	
	
	
}

function showMtilan() {
	
	$("#mtilan").show();

	$("#mtilan").find(".content").show();
	$("#mtilan").find(".title").show();
	$("#mtilan").find(".closeBtn").show();
	
	$("#mtilan").find(".content").css("marginTop", -1000);
	$("#mtilan").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#mtilan").find(".closeBtn").css("marginTop", -500);
	$("#mtilan").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideMtilan() {	
	
	$("#mtilan").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#mtilan").hide();
		$("#mtilan").find(".content").hide();
	});

	$("#mtilan").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#mtilan").find(".closeBtn").hide();
	});
	
}

function showMushin() {
	
	$("#mushin").show();

	$("#mushin").find(".content").show();
	$("#mushin").find(".title").show();
	$("#mushin").find(".closeBtn").show();
	
	$("#mushin").find(".content").css("marginTop", -1000);
	$("#mushin").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#mushin").find(".closeBtn").css("marginTop", -500);
	$("#mushin").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideMushin() {	
	
	$("#mushin").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#mushin").hide();
		$("#mushin").find(".content").hide();
	});

	$("#mushin").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#mushin").find(".closeBtn").hide();
	});
	
}

function showLely() {
	
	$("#lely").show();

	$("#lely").find(".content").show();
	$("#lely").find(".title").show();
	$("#lely").find(".closeBtn").show();
	
	$("#lely").find(".content").css("marginTop", -1000);
	$("#lely").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#lely").find(".closeBtn").css("marginTop", -500);
	$("#lely").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideLely() {	
	
	$("#lely").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#lely").hide();
		$("#lely").find(".content").hide();
	});

	$("#lely").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#lely").find(".closeBtn").hide();
	});
	
}

function showPekra() {
	
	$("#pekra").show();

	$("#pekra").find(".content").show();
	$("#pekra").find(".title").show();
	$("#pekra").find(".closeBtn").show();
	
	$("#pekra").find(".content").css("marginTop", -1000);
	$("#pekra").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#pekra").find(".closeBtn").css("marginTop", -500);
	$("#pekra").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hidePekra() {	
	
	$("#pekra").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#pekra").hide();
		$("#pekra").find(".content").hide();
	});

	$("#pekra").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#pekra").find(".closeBtn").hide();
	});
	
}

function showLabasu() {
	
	$("#labasu").show();

	$("#labasu").find(".content").show();
	$("#labasu").find(".title").show();
	$("#labasu").find(".closeBtn").show();
	
	$("#labasu").find(".content").css("marginTop", -1000);
	$("#labasu").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#labasu").find(".closeBtn").css("marginTop", -500);
	$("#labasu").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideLabasu() {	
	
	$("#labasu").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#labasu").hide();
		$("#labasu").find(".content").hide();
	});

	$("#labasu").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#labasu").find(".closeBtn").hide();
	});
	
}

function showKriah() {
	
	$("#kriah").show();

	$("#kriah").find(".content").show();
	$("#kriah").find(".title").show();
	$("#kriah").find(".closeBtn").show();
	
	$("#kriah").find(".content").css("marginTop", -1000);
	$("#kriah").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#kriah").find(".closeBtn").css("marginTop", -500);
	$("#kriah").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideKriah() {	
	
	$("#kriah").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#kriah").hide();
		$("#kriah").find(".content").hide();
	});

	$("#kriah").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#kriah").find(".closeBtn").hide();
	});
	
}

function showKirti() {
	
	$("#kirti").show();

	$("#kirti").find(".content").show();
	$("#kirti").find(".title").show();
	$("#kirti").find(".closeBtn").show();
	
	$("#kirti").find(".content").css("marginTop", -1000);
	$("#kirti").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#kirti").find(".closeBtn").css("marginTop", -500);
	$("#kirti").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideKirti() {	
	
	$("#kirti").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#kirti").hide();
		$("#kirti").find(".content").hide();
	});

	$("#kirti").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#kirti").find(".closeBtn").hide();
	});
	
}

function showOorn() {
	
	$("#oorn").show();

	$("#oorn").find(".content").show();
	$("#oorn").find(".title").show();
	$("#oorn").find(".closeBtn").show();
	
	$("#oorn").find(".content").css("marginTop", -1000);
	$("#oorn").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#oorn").find(".closeBtn").css("marginTop", -500);
	$("#oorn").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideOorn() {	
	
	$("#oorn").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#oorn").hide();
		$("#oorn").find(".content").hide();
	});

	$("#oorn").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#oorn").find(".closeBtn").hide();
	});
	
}

function showMicah() {
	
	$("#micah").show();

	$("#micah").find(".content").show();
	$("#micah").find(".title").show();
	$("#micah").find(".closeBtn").show();
	
	$("#micah").find(".content").css("marginTop", -1000);
	$("#micah").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#micah").find(".closeBtn").css("marginTop", -500);
	$("#micah").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideMicah() {	
	
	$("#micah").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#micah").hide();
		$("#micah").find(".content").hide();
	});

	$("#micah").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#micah").find(".closeBtn").hide();
	});
	
}

function showMoroth() {
	
	$("#moroth").show();

	$("#moroth").find(".content").show();
	$("#moroth").find(".title").show();
	$("#moroth").find(".closeBtn").show();
	
	$("#moroth").find(".content").css("marginTop", -1000);
	$("#moroth").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#moroth").find(".closeBtn").css("marginTop", -500);
	$("#moroth").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideMoroth() {	
	
	$("#moroth").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#moroth").hide();
		$("#moroth").find(".content").hide();
	});

	$("#moroth").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#moroth").find(".closeBtn").hide();
	});
	
}

function showLegion() {
	
	$("#legion").show();

	$("#legion").find(".content").show();
	$("#legion").find(".title").show();
	$("#legion").find(".closeBtn").show();
	
	$("#legion").find(".content").css("marginTop", -1000);
	$("#legion").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#legion").find(".closeBtn").css("marginTop", -500);
	$("#legion").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideLegion() {	
	
	$("#legion").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#legion").hide();
		$("#legion").find(".content").hide();
	});

	$("#legion").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#legion").find(".closeBtn").hide();
	});
	
}

function showForlorn() {
	
	$("#forlorn").show();

	$("#forlorn").find(".content").show();
	$("#forlorn").find(".title").show();
	$("#forlorn").find(".closeBtn").show();
	
	$("#forlorn").find(".content").css("marginTop", -1000);
	$("#forlorn").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#forlorn").find(".closeBtn").css("marginTop", -500);
	$("#forlorn").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideForlorn() {	
	
	$("#forlorn").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#forlorn").hide();
		$("#forlorn").find(".content").hide();
	});

	$("#forlorn").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#forlorn").find(".closeBtn").hide();
	});
	
}

function showThao() {
	
	$("#thao").show();

	$("#thao").find(".content").show();
	$("#thao").find(".title").show();
	$("#thao").find(".closeBtn").show();
	
	$("#thao").find(".content").css("marginTop", -1000);
	$("#thao").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#thao").find(".closeBtn").css("marginTop", -500);
	$("#thao").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideThao() {	
	
	$("#thao").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#thao").hide();
		$("#thao").find(".content").hide();
	});

	$("#thao").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#thao").find(".closeBtn").hide();
	});
	
}

function showDalila() {
	
	$("#dalila").show();

	$("#dalila").find(".content").show();
	$("#dalila").find(".title").show();
	$("#dalila").find(".closeBtn").show();
	
	$("#dalila").find(".content").css("marginTop", -1000);
	$("#dalila").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#dalila").find(".closeBtn").css("marginTop", -500);
	$("#dalila").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideDalila() {	
	
	$("#dalila").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#dalila").hide();
		$("#dalila").find(".content").hide();
	});

	$("#dalila").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#dalila").find(".closeBtn").hide();
	});
	
}

function showSarai() {
	
	$("#sarai").show();

	$("#sarai").find(".content").show();
	$("#sarai").find(".title").show();
	$("#sarai").find(".closeBtn").show();
	
	$("#sarai").find(".content").css("marginTop", -1000);
	$("#sarai").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#sarai").find(".closeBtn").css("marginTop", -500);
	$("#sarai").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideSarai() {	
	
	$("#sarai").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#sarai").hide();
		$("#sarai").find(".content").hide();
	});

	$("#sarai").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#sarai").find(".closeBtn").hide();
	});
	
}

function showBaalath() {
	
	$("#baalath").show();

	$("#baalath").find(".content").show();
	$("#baalath").find(".title").show();
	$("#baalath").find(".closeBtn").show();
	
	$("#baalath").find(".content").css("marginTop", -1000);
	$("#baalath").find(".content").animate({
		"marginTop":29,
		"opacity":1
	}, 1500, 'easeOutExpo');

	$("#baalath").find(".closeBtn").css("marginTop", -500);
	$("#baalath").find(".closeBtn").animate({
		"marginTop":-80,
		"opacity":1
	}, 1500, 'easeOutExpo');
		
}

function hideBaalath() {	
	
	$("#baalath").find(".content").animate({
		"marginTop":-1000,
		"opacity":0
	}, 1500, 'easeInOutExpo', function() {
		$("#baalath").hide();
		$("#baalath").find(".content").hide();
	});

	$("#baalath").find(".closeBtn").animate({
		"marginTop":-500,
		"opacity":1
	}, 1500, 'easeInOutExpo', function() {
		$("#baalath").find(".closeBtn").hide();
	});
	
}