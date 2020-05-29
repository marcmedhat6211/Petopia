<?php

use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
    'as'            => config('admin.route.prefix') . '.',
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('home');

    /*USER ROUTE*/
    $router->resource('users', UserController::class);
    
    /*PET ROUTE*/
    $router->resource('pets', PetController::class);

    /*SERVICE ROUTE*/
    $router->resource('services', ServiceController::class);

    /*RESERVATION ROUTE*/
    $router->resource('reservations', ReservationController::class);

});
