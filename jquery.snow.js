/**
 * jquery.snow - jQuery Snow Effect Plugin
 *
 * Available under MIT licence
 *
 * @version 1 (21. Jan 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @params minSize - min size of snowflake, 10 by default
 * @params maxSize - max size of snowflake, 20 by default
 * @params newOn - frequency in ms of appearing of new snowflake, 500 by default
 * @params flakeColor - color of snowflake, #FFFFFF by default
 * @example $.fn.snow({ maxSize: 200, newOn: 1000 });
 */
 
 
 
 randflake = function() {
    var num = Math.random() * 100 % 4;
    if(num <= 1) {
      return "&#10052;";
    }
    else if (num <= 2) {
      return "&#10053;";
    }
    if(num <= 3) {
      return "&#10054;";
    }
  };
  
  randdir = function() {
    var num = Math.random() * 100 % 2;
    if(num <=1) {
      return "left";
    }
    else {
      return "right";
    }
  };
  
  rotate = function(num) {
    
      $('div').each(function() {
        if($(this).attr('dir') == "left") {
          var degrees = Math.floor($(this).attr('rotation')) + num;
        }
        else {
          var degrees = Math.floor($(this).attr('rotation')) - num;
        }
        $(this).attr('rotation', degrees);
        $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                   '-moz-transform' : 'rotate('+ degrees +'deg)',
                   '-ms-transform' : 'rotate('+ degrees +'deg)',
                   'transform' : 'rotate('+ degrees +'deg)'});
      });
    
  };
  
(function($){
  
	$.fn.snow = function(options){
			var $flake = $('<div id="flake" rotation="0" dir="' + randdir()  + '"/>').css({'position': 'absolute', 'top': '-50px'}).html(randflake()),
				documentHeight = $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									minSize		: 10,
									maxSize		: 20,
									newOn		: 500,
									flakeColor	: "#FFFFFF"
								},
				options			= $.extend({}, defaults, options);
				
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 100 + Math.random() * 200,
					durationFall		= documentHeight * 10 + Math.random() * 5000;
				$flake
					.clone()
					.appendTo('body')
					.css(
						{
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}
					)
					.animate(
						{
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					)
					.html(randflake())
					.attr('dir', randdir());
					rotate(2);
			}, options.newOn);
			
	
	};
	
})(jQuery);