<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    public function reservations()
    {
        return $this->hasMany('App\Reservation');
    }

    public function boardings()
    {
        return $this->hasMany('App\Boarding');
    }

    public function consultations()
    {
        return $this->hasMany('App\Consultation');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
