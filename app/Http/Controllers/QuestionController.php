<?php

namespace App\Http\Controllers;

use App\Models\Question;

class QuestionController extends Controller
{
    /**
     * Zobrazí zoznam všetkých otázek spolu s odpověďmi.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Načtěte všechny otázky spolu s odpověďmi
        $questions = Question::with('answers')->get();
        
        return response()->json($questions);
    }

    /**
     * Zobrazí detaily konkrétne otázky spolu s odpověďmi.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Načtěte konkrétní otázku spolu s odpověďmi
        $question = Question::with('answers')->findOrFail($id);
        
        return response()->json($question);
    }
}
