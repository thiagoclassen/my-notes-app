(function () {
    'use strict';

    angular
        .module('notes-module')
        .service('DataService', ['$http', function ($http) {

            var service = this;
            var notes = [];

            this.getNotes = function () {
                return $http.get('/myNotesApp/notes.json').success(function (data) {
                    notes = data;
                });
            };

            this.deleteNotes = function (index) {
                notes.splice(index, 1);
                service.updateNotes();
            };

            this.updateNotes = function () {
                $http.post('/myNotesApp/notes.json', notes).success(function () {
                    console.log('update OK!');
                }).error(function (error) {
                    console.log('update fail: '+error.toString());
                });
            };

            this.list = function () {                
                return notes;
            };

        }]);
})();