<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CorsMiddleware;

// Apply CORS to a group of routes
Route::middleware([CorsMiddleware::class])->group(function () {
    Route::post('/send-contact', [\App\Http\Controllers\ContactController::class, 'send']);
    // Add more API routes here
});
