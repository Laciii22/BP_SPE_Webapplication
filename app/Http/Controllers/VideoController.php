<?php

namespace App\Http\Controllers;

use App\Models\Video;

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
     */
    public function show($id)
    {
        $video = Video::findOrFail($id);
        return response()->json($video);
    }
}
