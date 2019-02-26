<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        'token', 'name', 'category', 'carat', 'weight', 'sold', 'selling_date'
    ];
}
