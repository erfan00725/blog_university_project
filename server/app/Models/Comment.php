<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $table = 'comment';

    protected $fillable = ["post_id","user_name","email","content"];


    public function post(){
        return $this->belongsTo(Post::class);
    }
}