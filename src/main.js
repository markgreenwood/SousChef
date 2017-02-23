import angular from 'angular';
import './scss/main.scss';

const app = angular.module('sousChef', []);

app.value('apiUrl', process.env.APIURL || 'http://localhost:3000/api');