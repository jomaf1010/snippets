$(function(){
	console.log('document is ready and loaded!');
	var slider = window.Pt.Util.Slider;

	if(slider){
		slider.init($("#slider2"));
		slider.init($("#slider3"));
	}
});
