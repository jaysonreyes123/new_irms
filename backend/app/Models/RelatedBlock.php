<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RelatedBlock extends Model
{
    //

    public function blocks(){
        return $this->hasMany(Block::class,'id','block');
    }
}
