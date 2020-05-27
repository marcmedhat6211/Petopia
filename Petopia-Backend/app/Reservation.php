<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    public function boardings()
    {
        return $this->hasMany('App\Boarding');
    }

    public function consultations()
    {
        return $this->hasMany('App\Consultation');
    }
}
