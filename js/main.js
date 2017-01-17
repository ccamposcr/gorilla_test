(function($){
    //'use strict';

    $('.progress-indicator').progressIndicator({
    							initialValue:56,
    							target:125
    						});

    //You can set a new progress value following the next steps
    var progressIndicator1 = $('.progress-indicator').first().data('_progressIndicator');
    
    setTimeout(function(){
    	progressIndicator1.setProgress(78);
    },1000);

})(jQuery);