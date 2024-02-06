<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
   public function index()
   {
      $users = DB::SELECT('SELECT Id, BatchNumber, TransactionDate, LotNumber FROM tbl_user_reports LIMIT 500000');
      return response()->json([
         'message' => 'Running from Laravel 10',
         'total' => COUNT($users),
         'data' => $users,
      ]);

      $users = Users::select('Id', 'BatchNumber', 'TransactionDate', 'LotNumber')->limit(500000)->get();
      return response()->json([
         'message' => 'Running from Laravel 10',
         'total' => $users->count(),
         'data' => $users,
      ]);
   }
}
