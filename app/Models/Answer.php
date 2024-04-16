<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
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
    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
