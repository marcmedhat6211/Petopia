<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class AuthController extends Controller
{
    public function register(Request $request)
   {
        $validatedData = $request->validate([
            'name'=>'required|max:55|min:3|alpha',
            'email'=>'email|required|unique:users',
            'password'=>'required|confirmed|min:6',
            'phone_number'=>'digits_between:11,13',
            'recommendation'=>'min:5|max2:500|alpha_num',
            'address'=>'min:3|max:250|alpha_num'
        ]);

        $validatedData['password'] = bcrypt($request->password);

        $user = User::create($validatedData);

        $accessToken = $user->createToken('authToken')->accessToken;

        return response(['user'=> $user, 'access_token'=> $accessToken]);
       
   }
}
