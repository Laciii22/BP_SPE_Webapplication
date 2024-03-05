<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    /**
     * Názov tabuľky priradený modelu.
     *
     * @var string
     */
    protected $table = 'youtube_links';

    /**
     * Primárny kľúč tabuľky.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Atribúty, ktoré môžu byť hromadne priradené.
     *
     * @var array
     */
    protected $fillable = ['link', 'nazov_videa']; 

    /**
     * Ďalšie atribúty modelu...
     */
}
