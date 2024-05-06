<?php

use App\Http\Controllers\QuestionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\UserController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/videos', [VideoController::class, 'index']);

Route::delete('/videos/{video}', [VideoController::class, 'destroy'])->name('videos.destroy');

Route::get('/quiz', [QuestionController::class, 'index']);
Route::delete('/quiz/{question}', [QuestionController::class, 'destroy'])->name('quiz.destroy');

Route::post('/quiz', [QuestionController::class, 'store'])->name('quiz.store');

Route::get('/users', [UserController::class, 'index'])->name('users.index');
Route::put('/users/{user}/admin', [UserController::class, 'setAdmin']);
Route::put('/users/{user}/remove-admin', [UserController::class, 'removeAdmin']);

