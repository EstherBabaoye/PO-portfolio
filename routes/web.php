<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::post('/send-contact', [ContactController::class, 'send'])->name('contact.send');




Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
