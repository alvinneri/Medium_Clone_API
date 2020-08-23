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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function () {
    Route::post('register', 'Api\AuthController@register')->name('register');
    Route::post('login', 'Api\AuthController@login')->name('login');

});

Route::namespace('Api\User')
    ->name('user.')
    ->middleware(['auth:api'])
    ->prefix('user')
    ->group(function(){
        Route::resource('article', 'ArticlesController');
        Route::get('article/get-articles-by-user/{user}', 'GetArticlesByUserController')->name('user.get-articles-by-user');
        Route::get('article/get-articles-by-user-count/{user}', 'GetArticlesByUserCountController')->name('user.get-articles-by-user-count');
    });