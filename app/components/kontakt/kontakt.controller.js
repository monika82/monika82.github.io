(function () {
    'use strict';

    angular.module('portfolio')
        .controller('kontaktController', kontaktController);

     function kontaktController(){
         var vm = this;

     	vm.title = 'Contact us';

     	vm.message = {
     		name: 'monikakowalczyk',
     		email: 'm.kowalczyk@kownet.info',
     		content: 'Some content here'
     	}

     	vm.submitMessage = submitMessage;

	     function submitMessage(message){
	     	console.log('message', message)
	     }


     }
    
})();