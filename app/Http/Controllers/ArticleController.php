<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class ArticleController extends Controller
{
    /**
     * Display a listing of the articles.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $articles = Article::all();
            return response()->json($articles);
        } catch (\Exception $e) {
            Log::error('Error fetching articles: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while fetching the articles.'], 500);
        }
    }

    /**
     * Store a newly created article in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'content' => 'required|string',
            ]);

            $article = Article::create($validatedData);

            return response()->json($article, 201);
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation failed', 'messages' => $e->errors()], 422);
        } catch (\Exception $e) {
            Log::error('Error storing article: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while creating the article.'], 500);
        }
    }

    /**
     * Update the specified article in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'sometimes|required|string|max:255',
                'content' => 'sometimes|required|string',
            ]);

            $article->update($validatedData);

            return response()->json($article, 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation failed', 'messages' => $e->errors()], 422);
        } catch (\Exception $e) {
            Log::error('Error updating article: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while updating the article.'], 500);
        }
    }

    /**
     * Remove the specified article from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        try {
            $article->delete();
            return response()->json(null, 204);
        } catch (\Exception $e) {
            Log::error('Error deleting article: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while deleting the article.'], 500);
        }
    }
}
