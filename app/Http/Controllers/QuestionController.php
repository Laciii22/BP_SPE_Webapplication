<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Answer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class QuestionController extends Controller
{
    /**
     * Display a listing of all questions along with their answers.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            // Load all questions along with their answers
            $questions = Question::with('answers')->get();
            return response()->json($questions);
        } catch (\Exception $e) {
            Log::error('Error fetching questions: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while fetching the questions.'], 500);
        }
    }

    /**
     * Display the details of a specific question along with its answers.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            // Load the specific question along with its answers
            $question = Question::with('answers')->findOrFail($id);
            return response()->json($question);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            Log::warning('Question not found for ID: ' . $id);
            return response()->json(['error' => 'Question not found.'], 404);
        } catch (\Exception $e) {
            Log::error('Error fetching question for ID ' . $id . ': ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while fetching the question.'], 500);
        }
    }

    /**
     * Store a newly created question and its answers in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            // Validate the request
            $validatedData = $request->validate([
                'question' => 'required|string|max:255',
                'answers' => 'required|array|min:2', // Minimum of two answers
                'answers.*.text' => 'required|string|max:255', // Answer text
                'answers.*.correct' => 'required|boolean', // Indicator of correct answer
            ]);

            // Create a new question
            $question = new Question();
            $question->question = $validatedData['question'];
            $question->save();

            // Create answers for the question
            foreach ($validatedData['answers'] as $answerData) {
                $answer = new Answer();
                $answer->answer_text = $answerData['text']; // Use column answer_text instead of answer
                $answer->correct_answer = $answerData['correct']; // Indicator of correct answer
                $answer->question_id = $question->id;
                $answer->save();
            }

            return response()->json($question, 201); // 201 Created
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Validation failed', 'messages' => $e->errors()], 422);
        } catch (\Exception $e) {
            Log::error('Error storing question: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while creating the question.'], 500);
        }
    }

    /**
     * Remove the specified question from storage.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question)
    {
        try {
            $question->delete();
            return response()->json([], 204); // 204 No Content
        } catch (\Exception $e) {
            Log::error('Error deleting question: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while deleting the question.'], 500);
        }
    }
}
