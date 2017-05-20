(function () {
    'use strict';

    angular
        .module('notes-module', [])
        .directive('note', function ($http, DataService) {
            return {
                restrict: 'E',                
                templateUrl: 'directives/note.html',
                controller: function () {
                    
                    var controller = this;
                    
                    this.edit = false;                    
                                       
                    this.deleteNote = function (index) {                        
                        DataService.deleteNotes(index);                        
                    };

                    this.editNote = function () {
                        controller.edit = true;
                    };    
                    
                    this.confirmEdit = function () {
                        controller.edit = false;
                        /*
                         * chama update!                        
                         */                       
                    };

                },
                controllerAs: 'noteCtrl'
            };
        });
})();