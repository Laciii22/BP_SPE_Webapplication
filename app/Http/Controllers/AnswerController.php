<?php

namespace App\Http\Controllers;

use App\Models\Answer;

class AnswerController extends Controller
{
    /**
     * Zobrazí seznam všech odpovědí spolu s informacemi o příslušných otázkách.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Načtěte všechny odpovědi spolu s informacemi o příslušných otázkách
        $answers = Answer::with('question')->get();
        
        return response()->json($answers);
    }

    /**
     * Zobrazí detaily konkrétní odpovědi spolu s informacemi o příslušné otázce.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Načtěte konkrétní odpověď spolu s informacemi o příslušné otázce
        $answer = Answer::with('question')->findOrFail($id);
        
        return response()->json($answer);
    }
}
