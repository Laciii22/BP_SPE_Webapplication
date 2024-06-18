<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class VideoController extends Controller
{
    /**
     * Display a listing of all videos.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $videos = Video::all();
            return response()->json($videos);
        } catch (\Exception $e) {
            Log::error('Error fetching videos: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while fetching the videos.'], 500);
        }
    }

    /**
     * Display the details of a specific video.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $video = Video::findOrFail($id);
            return response()->json($video);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            Log::warning('Video not found for ID: ' . $id);
            return response()->json(['error' => 'Video not found.'], 404);
        } catch (\Exception $e) {
            Log::error('Error fetching video for ID ' . $id . ': ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while fetching the video.'], 500);
        }
    }

    /**
     * Store a newly created video in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
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

            return response()->json($video, 201); // 201 Created
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation failed', 'messages' => $e->errors()], 422);
        } catch (\Exception $e) {
            Log::error('Error storing video: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while creating the video.'], 500);
        }
    }

    /**
     * Remove the specified video from storage.
     *
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function destroy(Video $video)
    {
        try {
            $video->delete();
            return response()->json([], 204); // 204 No Content
        } catch (\Exception $e) {
            Log::error('Error deleting video: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while deleting the video.'], 500);
        }
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
        try {
            $request->validate([
                'link' => 'required|url',
                'name' => 'string|max:255',
            ]);

            $video->update([
                'link' => $request->link,
                'name' => $request->name,
            ]);

            return response()->json($video, 200); // 200 OK
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation failed', 'messages' => $e->errors()], 422);
        } catch (\Exception $e) {
            Log::error('Error updating video: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while updating the video.'], 500);
        }
    }
}
