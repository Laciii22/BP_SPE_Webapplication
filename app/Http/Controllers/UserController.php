<?php
// Example controller code (app/Http/Controllers/UserController.php)

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    /**
     * Display a listing of the users.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            // Retrieve all users from the database
            $users = User::all();
            return response()->json($users);
        } catch (\Exception $e) {
            Log::error('Error fetching users: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while fetching the users.'], 500);
        }
    }

    /**
     * Set the specified user as an administrator.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function setAdmin(User $user)
    {
        try {
            $user->update(['admin' => true]);
            return response()->json(['message' => 'User is now an administrator'], 200);
        } catch (\Exception $e) {
            Log::error('Error setting user as admin: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while setting the user as an administrator.'], 500);
        }
    }

    /**
     * Remove the administrator status from the specified user.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function removeAdmin(User $user)
    {
        try {
            $user->update(['admin' => false]);
            return response()->json(['message' => 'User is no longer an administrator'], 200);
        } catch (\Exception $e) {
            Log::error('Error removing user as admin: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong while removing the user as an administrator.'], 500);
        }
    }
}
