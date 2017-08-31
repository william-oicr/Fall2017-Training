$(document).ready(function(){

	$(window).resize(function() {

        // For PC
        if ($(window).width() > 1050) {
            $('ul.box li').each(function() {
                if ($(this).children('a')[0].className == 'active') {
                
                    var holder = $(this).closest('.holder')[0];
                    $(holder).addClass('disabled');

                    var title = $(holder).prev()[0];
                    $(title).children('a').addClass('active');

                }
            });

            var events = $._data( $('.header_top')[0], 'events' );
            if(!events){
                $('ul#nav-header').NavDropDown({dropHolder:'div.holder:not(.disabled)'});
            }
            $('.header-nav, .holder').attr('style','');
        
        }else{

            //Disable NavDropDown events
            var events = $._data( $('.header_top')[0], 'events' ) || {};
            $('.header_top').each(function(i, e){ $(e).off(); });
            $('.holder div.box').attr('style','');

			var menu_state = 0;
			var ham_ev = $._data( $('.header-nav-hamburger')[0], 'events' );
			if(!ham_ev){
				$(".header-nav-hamburger").click(function(e) {
					e.preventDefault();
					$(".header-nav").css("left", "0");

					if (menu_state == 0) {
						$(".header-nav").animate({ height: "370px" }, 500);
						menu_state = 1;
					}
					else {
						$(".header-nav").animate({ height: "0px" }, 500);
						menu_state = 0;
					}
				});
			}

			var ttl_ev = $._data( $('.top-title a')[0], 'events' );
			
            if(!ttl_ev || !ttl_ev['click']){
				$(".top-title a").click(function(e) {
					if ($(window).width() <= 1050) {
						e.preventDefault();

						$(".top-title").hide();

						var topTitle = $(this).parent()[0];
						var holder = $(topTitle).next()[0];

						$(holder).animate({ left: "0", top: "0" }, 250);

						var box = $(holder).find("ul.box")[0];
						$(box).children()[0].remove();
						$(box).prepend("<li class='back-link'><a href='#'>◂ Back</a></li>"); // CHECK IF BACK ALREADY EXISTS

						$(".back-link").click(function(e) {
							e.preventDefault();
								
							$(".top-title").css("display", "inline");

							var holder = $(this).closest(".holder")[0];
							$(holder).animate({ left: "-100vw" });
						});
					}
				});
			}

		}
	});

    //omprn_bootstrap_unbind_mobile_menu, $is_home
    var isHome = $('body').hasClass('front');
    if (!isHome || $(window).width() <= 1050) {
        $('.header_top').off();
    }

    //omprn_bootstrap_hide_book_menu
    if ($('body').hasClass('page-node-676') || $('body').hasClass('page-node-678') ) { //Network Researcher or Research Providers
        $('div.book-navigation').hide();
    }
    else {
        $('.book-navigation a.page-previous').text('PREVIOUS');
        $('.book-navigation a.page-next').text('NEXT');
    }
    
	$(window).trigger('resize');

});