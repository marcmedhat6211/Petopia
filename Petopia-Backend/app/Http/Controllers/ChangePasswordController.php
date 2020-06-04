<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\ChangePasswordRequest;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;
use App\User;

class ChangePasswordController extends Controller
{
    public function process(ChangePasswordRequest $request){

        return $this->getPasswordResetTableRow($request)->count()>0 ?$this->changePassword($request):
        $this->tokenNotFoundResponse();
    }


    public function getPasswordResetTableRow($request){

        return DB::table('password_resets')->where([
            'email'=>$request->email,
            'token'=>$request->resetToken
        ]);
    }



    private function tokenNotFoundResponse(){
        return response()->json([
            'Token or Email is incorrect'
        ],
        Response::HTTP_UNPROCESSABLE_ENTITY
        );
    }


    private function changePassword($request){

        $user=User::whereEmail($request->email)->first();
        $user->update(['password'=>bcrypt($request->password)]);
        $this->getPasswordResetTableRow($request)->delete();
        return response()->json(['data'=>'password sucessfully changed'],Response::HTTP_CREATED);

    }
}
