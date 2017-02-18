import angular from 'angular';

const app = angular.module('sousChef', []);

app.value('apiUrl', process.env.APIURL || 'http://localhost:3000/api');