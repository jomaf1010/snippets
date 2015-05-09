
$(function(){

	console.log("INITING");
	window.Pt || (window.Pt = {});
	Pt.Util || (Pt.Util = {});

	function Slider(element,delay,options){
		var d,el,defaultOptions,opt;
		
		return {
			init : initialize,
		};
		
		

		//////////////////////////////////////////

		function initialize (element,options){
			_setVariables( 
				element , 
				options, 
				function(){
					element.anythingSlider(opt);	
			});
			
		}

		

		// ensures we load everything before running the slider
		function _setVariables (element,options,callback) {
			
			try {
				el = element;
				defaultOptions = {
					theme               : "default",
					mode                : "horiz",
					resizeContents      : false,
					infiniteSlides		: true,
					autoPlay 			: true,
					startPanel			: 1,
					changeBy			: 1,
					delay 				: 3000,
					buildArrows         : false,
					buildNavigation     : false,
					buildStartStop      : false
				}
				opt =  options || defaultOptions;	
				callback(true);
			} catch(e){
				console.log('Error initializing slider');
				callback(false);
			}
		}
	}

	
	Pt.Util.Slider = new Slider;

});