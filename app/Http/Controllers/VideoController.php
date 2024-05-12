<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    /**
     * Display a listing of all videos.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $videos = Video::all();
        return response()->json($videos);
    }

    /**
     * Display the details of a specific video.
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
    /**
     * Store a newly created video in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Data validation from the form
        $request->validate([
            'link' => 'required|url',
            'name' => 'string|max:255',
        ]);
    
        // Create a new record in the database
        $video = Video::create([
            'link' => $request->link,
            'name' => $request->name,
        ]);
    
        return response()->json($video, 201);
    }

    /**
     * Remove the specified video from storage.
     *
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function destroy(Video $video)
    {
        $video->delete();
    }

    /**
     * Update the specified video in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Video $video)
    {
        $request->validate([
            'link' => 'required|url',
            'name' => 'string|max:255',
        ]);

        $video->update([
            'link' => $request->link,
            'name' => $request->name,
        ]);

        return response()->json($video, 200);
    }   
}
