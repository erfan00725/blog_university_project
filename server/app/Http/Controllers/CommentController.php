<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentCollection;
use App\Http\Resources\CommentsResource;
use App\Models\Comment;
use App\Models\Post;
use Exception;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($post)
    {
        $post = Post::with('comments')->findOrFail($post);


        return new CommentCollection($post->comments);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $post)
    {
        $validate = $request->validate([
            'user_name' => 'required|string|max:255',
            'email' => 'required|email',
            'content' => 'required|string'
        ]);

        $comment = Comment::create([
            ...$validate,
            'post_id' => $post
        ]);

        return new CommentsResource($comment);
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comments)
    {
        return new CommentsResource($comments);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comments)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comments, $comment)
    {
        try {
            $d = Comment::findOrFail((int)$comment)->delete();

            return response()->json([
                'message' => 'Post deleted successfully',
            ], 200);
        }
         catch (Exception $e) {
            return response()->json([
                'message' => 'An error occurred while deleting the product',
                'error' => $e->getMessage(),
            ], 500);        }
    }
}