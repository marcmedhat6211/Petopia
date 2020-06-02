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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

   
/* REGISTER ROUTES */
Route::post('/register','RegisterController@register');

/* LOGIN ROUTES */
Route::post('/login','LoginController@login');

/* LOGOUT ROUTES */
Route::post('/logout','LoginController@logout')->middleware('auth:sanctum');

/* SERVICE ROUTES */
Route::get('/services', 'API\ServiceController@index');
Route::get('/services/{service}', 'API\ServiceController@show');

/* RESERVATION ROUTES */
 Route::post('/reservations','API\ReservationController@store');

 /* AUTHENTICATED USER ROUTE */
 Route::get('/auth', function(){
    //  if(!Auth::check())
    //  {
    //      $user = App\User::find(2);
    //      Auth::login($user);
    //  }
    //  return response()->json(Auth::user()->id);

    // DB::table('personal_access_tokens')->where('tokenable_id',2)->pluck('tokenable_id');

    // return User::find()->where('id',Auth::id());
    return auth()->user();
 });
    

