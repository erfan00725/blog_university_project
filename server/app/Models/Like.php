<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    protected $fillable = ["post_id","user_ip"];

    protected $table = 'like';


    public function post(){
        return $this->belongsTo(Post::class);
    }

    public function isLiked($userIp, $postId){
        $existingLike = Like::where('post_id', $postId)->where('user_ip', $userIp)->first();

        return $existingLike ? true : false;
    }
}
