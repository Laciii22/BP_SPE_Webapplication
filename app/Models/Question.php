<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
     /**
     * Indikuje, či má byť vytvorený časový údaj (created_at, updated_at).
     *
     * @var bool
     */
    public $timestamps = false;
    /**
     * Vztah otázky k odpovědím.
     */
    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
