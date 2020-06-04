<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Reservation;
use App\Http\Requests\ReservationRequest;

class ReservationController extends Controller
{
    /**
     * STORE NEW RESERVATION FROM CLIENT 
     * @param ReservationRequest $request
     * @return response JSON
    */
    public function store(ReservationRequest $request)
    {
        $isExists = Reservation::where('user_id',$request->client_id)
            ->where('pet_id',$request->pet_id)
            ->where('service_id',$request->service_id)
            ->where('date',$request->date)->exists();
               
        if ($isExists) 
        {
            return response()->json(['status' => 'error','message' => 'You already have a reservation']);
        }  

        $reservation = new Reservation();
        $reservation->user_id = $request->client_id;
        $reservation->pet_id = $request->pet_id;
        $reservation->service_id = $request->service_id;
        $reservation->date = $request->date;
        $reservation->save();

        return response()->json(['reservation_id' => $reservation->id ,'status' => 'success' ]);
    }
}
