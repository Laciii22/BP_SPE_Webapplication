<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AnswerController extends Controller
{
    /**
     * Display a listing of all answers along with the corresponding questions.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            // Load all answers along with the corresponding questions
            $answers = Answer::with('question')->get();

            return response()->json($answers);
        } catch (\Exception $e) {
            // Log the exception
            Log::error('Error fetching answers: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while fetching the answers.'], 500);
        }
    }

    /**
     * Display the specified answer along with the corresponding question details.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            // Validate the ID
            $validatedData = $this->validateId($id);

            // Load the specific answer along with the corresponding question details
            $answer = Answer::with('question')->findOrFail($validatedData['id']);

            return response()->json($answer);
        } catch (NotFoundHttpException $e) {
            // Log the exception
            Log::warning('Answer not found for ID: ' . $id);
            return response()->json(['error' => 'Answer not found.'], 404);
        } catch (ValidationException $e) {
            // Log the exception
            Log::warning('Invalid ID provided: ' . $id);
            return response()->json(['error' => 'Invalid ID provided.'], 400);
        } catch (\Exception $e) {
            // Log the exception
            Log::error('Error fetching answer for ID ' . $id . ': ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while fetching the answer.'], 500);
        }
    }

    /**
     * Validate the provided ID.
     *
     * @param  int  $id
     * @return array
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function validateId($id)
    {
        $validator = Validator::make(['id' => $id], [
            'id' => 'required|integer|exists:answers,id',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $validator->validated();
    }
}
