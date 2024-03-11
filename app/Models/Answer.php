<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    /**
     * Vztah odpovědi k otázce.
     */
    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
