<?php

namespace App\Http\Controllers;

use App\Http\Resources\LikeResource;
use App\Models\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function like(Request $request, $post){
        $userIp = $request->ip();

        $existingLike = Like::where('post_id', $post)->where('user_ip', $userIp)->first();



        if ($existingLike) {
            $existingLike->delete();
        }else{
            $existingLike = Like::create([
                'post_id' => $post,
                'user_ip' => $userIp,
            ]);
        }

        return new LikeResource($existingLike);
    }

    public function isLike(Request $request, $post){
        $userIp = $request->ip();

        $existingLike = Like::where('post_id', $post)->where('user_ip', $userIp)->first();



        if ($existingLike) {
            return response()->json(['status' => true]);
        }else{
            return response()->json(['status' => false]);
        }
    }
}
