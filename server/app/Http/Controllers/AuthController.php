<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string',
            'email'=> 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = User::create([$validate]);

        $token = $user->createToken('auth_token')->plainTextToken;

        // $token->expires_at = Carbon::now()->addMinutes(60)->timestamp;
        // $token->save();


        return new AuthResource([
            'user' => new UserResource($user),
            'token' => $token
        ]);
    }

    public function login(Request $request)
    {
        $validate = $request->validate([
            'email'=> 'required|email|exists:users',
            'password' => 'required|min:6',
        ]);

        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.']
            ]);
        }


        $user = Auth::user();

        $user->tokens()->delete();

        $token = $user->createToken('auth_token')->plainTextToken;





        // $token->expires_at = Carbon::now()->addMinutes(60)->timestamp;
        // $token->save();


        return new AuthResource((object)[
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function check(Request $request): JsonResponse
    {
        return response()->json(Auth::check());
    }

    public function logout(Request $request): JsonResponse
    {
        return response()->json($request->user()->currentAccessToken()->delete());
    }

}
