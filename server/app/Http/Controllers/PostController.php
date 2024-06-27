<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller implements HasMiddleware
{


     /**
     * Get the middleware that should be assigned to the controller.
     */
    public static function middleware(): array
    {
        return [
            new Middleware('auth:sanctum', only: ['store', 'update', 'destroy']),
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->has('perPage')) {
            return PostResource::collection(Post::paginate($request->input("perPage")));
        }else{
            return PostResource::collection(Post::paginate(10));
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'string',
            'body' => 'required|string',
            'image' => 'nullable|file|mimes:jpg,jpeg,png,gif|max:2048',
        ]);

        $filteredData = collect($validate)->except(['image'])->toArray();

        $post = Post::create([
            ...$filteredData,
            'user_id' => 1
        ]);

        // $post->title = $request->title;
        // $post->description = $request->description;
        // $post->body = $request->body;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $post->image_path = $path;
        }

        $post->save();

        return new PostResource($post);

    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $validate = $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'body' => 'nullable|string',
            'image' => 'nullable|file|mimes:jpg,jpeg,png,gif|max:2048',
        ]);

        $filteredData = collect($validate)->except(['image'])->toArray();


        $post->update($filteredData);

        if ($request->hasFile('image')) {
            if ( Storage::disk('public')->exists($post->image_path) ) {
                Storage::disk("public")->delete($post->image_path);
            }
            $path = $request->file('image')->store('images', 'public');
            $post->image_path = $path;
        }

        $post->save();

        return new PostResource($post);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {

        try {
        if( Storage::disk('public')->exists($post->image_path) ){
            // unlink($post->image_path);
            Storage::disk("public")->delete($post->image_path);
         }
         $post->delete();

         return response()->json([
            'message' => 'Post deleted successfully',
        ], 200);
        } catch (Exception $e) {

            return response()->json([
                'message' => 'An error occurred while deleting the product',
                'error' => $e->getMessage(),
            ], 500);
    }
    }
}