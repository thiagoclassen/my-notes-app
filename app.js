(function () {
    'use strict';
    angular.module('myNotesApp', ['notes-module', 'modal-module']).controller('myNotesController', ['$http', 'DataService', 'modals', function ($http, DataService, modals) {
        var controller = this;

        controller.notes = [];

        this.newNote = function () {
            alert('newNote');
        };

        DataService.getNotes().then(function (data) {
            controller.notes = DataService.list();
        });
        
        this.promptSomething = function() {
                    // The .open() method returns a promise that will be either
                    // resolved or rejected when the modal window is closed.
                    var promise = modals.open(
                        "newNote"                        
                    );
                    promise.then(
                        function handleResolve( response ) {
                            controller.notes.push(response);
                        },
                        function handleReject( error ) {
                            console.warn( "Prompt rejected!" );
                        }
                    );
                };      

        /*$http.get('/myNotesApp/notes.json').success(function (data) {
            controller.notes = data;
        });*/
    }]);
})();