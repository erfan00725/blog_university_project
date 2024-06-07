<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('post', PostController::class);
Route::put('post/{post}/like', [PostController::class, 'likeIncreament'])->name("post.like");


Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/check', [AuthController::class, 'check']);
    Route::get('/logout', [AuthController::class, 'logout/']);
});
