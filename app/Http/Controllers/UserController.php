<?php
// Example controller code (app/Http/Controllers/UserController.php)

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all(); // Retrieve all users from the database
        return $users;
    }

    public function setAdmin(User $user)
    {
        $user->update(['admin' => true]);
        return response()->json(['message' => 'User is now an administrator']);
    }
    
    public function removeAdmin(User $user)
    {
        $user->update(['admin' => false]);
        return response()->json(['message' => 'User is no longer an administrator']);
    }
    
}
