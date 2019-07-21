<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group([
    'middleware'=>'api',

],
function ($router) {

    Route::post('/auth/login', 'AuthController@login');
    Route::post('/logout', 'AuthController@logout');
    Route::post('/refresh', 'AuthController@refresh');
    Route::post('/me', 'AuthController@me');

}

);

Route::post('/post/create','PostController@store');
Route::get('/post/edit/{id}','PostController@edit');
Route::post('/post/update/{id}','PostController@update');
Route::post('/post/delete/{id}', 'PostController@destroy');
Route::get('/index','PostController@index');
Route::get('/index/show/{id}','PostController@show');