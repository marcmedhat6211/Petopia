<?php

namespace App\Http\Controllers\API;

use App\Pet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PetsController extends Controller
{
    //
    public function add(Request $request)
    {    
        // dd(request());
        $pet = Pet::create([
            'name' => request()->name,
            'user_id' => request()->user_id,
            // 'species' => request()->species ? true:false ,
            'breed' => request()->breed,
            'color' => request()->color,
            'age' => request()->age,
            'weight' => request()->weight,
            'neutered'=> request()->neutered ? "yes":"no",
            'previous_problems' => request()->previous_problems,
            'drug_allergies' => request()->drug_allergies,
            'current_diet' => request()->current_diet,
            'current_medication'=> request()->current_medication,
            // 'birthdate'=> request()->birthdate,
            // 'color'=> request()->color,
            // 'previous_problems'=> request()->color,
            // 'drug_allergies'=> request()->color,
        ]);
        // Pet::create($request->all());

        return response()->json([
            'success'=>true, 
            'message'=>'pet added.', 
            'pet'=>$pet
        ]);
    }
}
