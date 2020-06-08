<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([

    'middleware' => 'api',
    //'prefix' => 'auth'

], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPsswordResetLink','PsswordResetController@sendEmail');
    Route::post('resetPassword','ChangePasswordController@process');
    Route::post('reservations','API\ReservationController@store');
    Route::post('/pet/add','API\PetsController@add');
    Route::post('/boardings', 'API\BoardingController@add');
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

   
// /*REGISTER ROUTE*/
// Route::post('/register','RegisterController@register');

// /*LOGIN ROUTE */
// Route::post('/login','LoginController@login');

// /* LOGOUT ROUTE */
// Route::post('/logout','LoginController@logout')->middleware('auth:sanctum');

/* SERVICE ROUTES */
Route::get('/services', 'API\ServiceController@index');
Route::get('/services/{service}', 'API\ServiceController@show');


    // return User::find()->where('id',Auth::id());
    return auth()->user();
//  });
    
/*pet register */
Route::post('/pet/add','API\PetsController@add');

