<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Answer;
use Illuminate\Http\Request;

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

    /**
     * Uloží novú otázku a odpovede do databázy.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    /**
 * Uloží novú otázku a odpovede do databázy.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return \Illuminate\Http\Response
 */
public function store(Request $request)
{
    // Validácia požiadaviek
    $validatedData = $request->validate([
        'question' => 'required|string',
        'answers' => 'required|array|min:2', // Minimálne dve odpovede
        'answers.*.text' => 'string|required', // Text odpovede
        'answers.*.correct' => 'boolean|required', // Indikátor správnej odpovede
    ]);

    // Vytvorenie novej otázky
    $question = new Question();
    $question->question = $validatedData['question'];
    $question->save();

    // Vytvorenie odpovedí pre otázku
    foreach ($validatedData['answers'] as $answerData) {
        $answer = new Answer();
        $answer->answer_text = $answerData['text']; // Použite stĺpec answer_text namiesto answer
        $answer->correct_answer = $answerData['correct']; // Indikátor správnej odpovede
        $answer->question_id = $question->id;
        $answer->save();
    }

    return response()->json($question, 201); // 201 Created
}



    /**
     * Odstráni konkrétnu otázku z databázy.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question)
    {
        try {
            $question->delete();
            return response()->json([], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500); // 500 Internal Server Error
        }
    }
}
