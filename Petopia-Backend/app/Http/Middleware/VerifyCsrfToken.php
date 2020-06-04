<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    protected $addHttpCookie = true;

    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        '/api/login',
        '/api/signup',
<<<<<<< HEAD
        '/api/pet/add' // TODO: to be removed

=======
        '/api/sendPsswordResetLink',
        '/api/resetPassword',
        '/api/me',
        '/api/reservations'
>>>>>>> 9de8059ede83799b3a5b63514d840ef1ee1a05d5
    ];
}
