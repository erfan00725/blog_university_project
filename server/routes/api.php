<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\LikesController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('post', PostController::class);
Route::prefix('post/{post}')->group(function(){
    Route::put('/like', [LikesController::class, 'like'])->name("post.like");
    Route::get('/isLike', [LikesController::class, 'isLike'])->name("post.isLike");

    Route::resource('comments', CommentController::class);
});


Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/check', [AuthController::class, 'check']);
    Route::get('/logout', [AuthController::class, 'logout/']);
});