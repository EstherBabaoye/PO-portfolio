<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;


class ContactController extends Controller
{
    public function send(Request $request)
    {

        Log::info('Received contact form submission');

        // ✅ Validate the form inputs
        $validated = $request->validate([
            'first_name' => 'required|string',
            'last_name'  => 'required|string',
            'email'      => 'required|email',
            'phone'      => 'nullable|string',
            'subject'    => 'required|string',
            'message'    => 'required|string',
        ]);

        // ✅ Format the email message
        $emailMessage = "
        From: {$validated['first_name']} {$validated['last_name']} <{$validated['email']}>
        Phone: {$validated['phone']}
        Subject: {$validated['subject']}

        Message:
        {$validated['message']}
        ";

        // ✅ Send the email
        Mail::raw($emailMessage, function ($mail) {
            $mail->to('stephenpraise4u@gmail.com')
                 ->subject('New Contact Message from Portfolio Site');
        });

        return response()->json(['message' => 'Email sent successfully!']);
    }
}
