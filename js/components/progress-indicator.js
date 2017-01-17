function ProgressIndicator(el, options){
	this.settings = $.extend({
			initialValue: 0,
			target: 100
	}, options );

	this.$el = $(el);
	this.$indicator = this.$el.find('.indicator');
	this.$indicatorValue = this.$el.find('.indicator-value');
	this.progress = this.settings.initialValue;
	this.render();
	return this;
}


ProgressIndicator.prototype.setProgress = function(value){
	var THIS = this;

	THIS.progress = value || 0;
	THIS.render();
	
	return THIS;
}


ProgressIndicator.prototype.render = function(){
	var THIS = this,
		indicatorPercentage = 0;

	indicatorPercentage = (100 * THIS.progress) / THIS.settings.target;

	THIS.$indicator.css('width',indicatorPercentage+'%');
	THIS.$indicatorValue.text(THIS.progress);

	return THIS;
};


(function ( $ ) {
 
	$.fn.progressIndicator = function( options ) {
		var THIS = this;
		THIS.each( function(){
			var pgI = new ProgressIndicator(this, options);
			$(this).data('_progressIndicator', pgI);
		});
		return THIS;
	};
 
}( jQuery ));
