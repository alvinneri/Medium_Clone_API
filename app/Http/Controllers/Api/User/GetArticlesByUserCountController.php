<?php

namespace App\Http\Controllers\Api\User;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GetArticlesByUserCountController extends Controller
{
    public function __invoke(User $user)
    {
        return $user->articles()->count();
    }
}
