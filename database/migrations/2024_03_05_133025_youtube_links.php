<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class YoutubeLinks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('youtube_links', function (Blueprint $table) {
            $table->id();
            $table->string('link')->unique(); // unikátní odkaz na youtube
            $table->string('name')->nullable(); // volitelné jméno odkazu
            $table->timestamps(); // automaticky vytvořené časové značky pro created_at a updated_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('youtube_links');
    }
}
