<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    /**
     * Zobrazí zoznam všetkých videí.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $videos = Video::all();
        return response()->json($videos);
    }

    /**
     * Zobrazí detaily konkrétneho videa.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     * @param  \Illuminate\Http\Request  $request
     */
    public function show($id)
    {
        $video = Video::findOrFail($id);
        return response()->json($video);
    }

    public function store(Request $request)
    {
        // Validace dat z formuláře
        $request->validate([
            'link' => 'required|url',
            'name' => 'string|max:255',
        ]);

        // Vytvoření nového záznamu v databázi
        $video = Video::create([
            'link' => $request->link,
            'name' => $request->name,
        ]);

        return;

        // Výpis vytvořeného záznamu pro ověření
        //dd($video);
    }


}
