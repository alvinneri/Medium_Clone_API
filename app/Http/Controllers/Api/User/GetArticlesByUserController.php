<?php

namespace App\Http\Controllers\Api\User;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleResource;

class GetArticlesByUserController extends Controller
{
    public function __invoke(User $user)
    {
        return ArticleResource::collection($user->articles);
    }
}
