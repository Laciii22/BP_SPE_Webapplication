<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;


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
        // Validácia dát z formulára
        $request->validate([
            'link' => 'required|url',
            'name' => 'string|max:255',
        ]);
    
        // Vytvorenie nového záznamu v databáze
        $video = Video::create([
            'link' => $request->link,
            'name' => $request->name,
        ]);
    
        // Návratová odpoveď pre Inertia.js
        return Redirect::back()->with('success', 'Video bolo úspešne uložené!');
    }

    public function destroy(Video $video)
    {
        $video->delete();
    }

public function update(Request $request, Video $video)
{
    // Validácia dát z formulára
    $request->validate([
        'link' => 'required|url',
        'name' => 'string|max:255',
    ]);

    // Aktualizácia existujúceho záznamu v databáze
    $video->update([
        'link' => $request->link,
        'name' => $request->name,
    ]);

    return Redirect::back()->with('success', 'Video bolo úspešne upravené!');
}

    
}