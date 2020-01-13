<?php

namespace App;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Outlet extends Model
{
    protected $guarded = [];

    public function user(){
    	return $this->hasMany(User::class,'id');
    }
}
