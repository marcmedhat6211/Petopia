<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserResource;
use Illuminate\Validation\ValidationExeption;
use Illuminate\Support\Facades\Auth;
class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name'=>'required|min:3|max:250|alpha',
            'email'=>'email|required|unique:users',
            'password'=>'required|min:6|confirmed|password:api',
            'phone_number'=>'unique:users',
            'recommendation'=>'',
            'address'=>''
        ]);

        
      $user= User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'recommendation'=>$request->recommendation,
            'phone_number'=>$request->phone_number,
            'address'=>$request->address,
            'password'=>Hash::make($request->password),
        ]);
       
       
        return UserResource::collection(
            User::find($user)
        );
       
    }
}
