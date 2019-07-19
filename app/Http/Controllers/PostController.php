<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PostCollection;
use App\Models\Post;
class PostController extends Controller
{
    public function store(Request $request)
    {
        $post = new Post([
            'title' => $request->get('title'),
            'feeling' => $request->get('feeling'),
            'content' => $request->get('content')
        ]);

        $post->save();
        return response()->json('success added');
    }

    public function index(){
        $post = Post::all();
        return response()->json($post);
    }

    public function show($id){
        $post = Post::find($id);
        return response()->json($post);  
    }

    public function edit($id){
        $post = Post::find($id);
        return response()->json($post); 
    }

    public function update($id, Request $request){
        $post = Post::find($id);
        $post->update($request->all());
        return response()->json('success updated');
    }

    public function destroy($id){
        $post = Post::find($id);
        $post->delete();
        return response()->json('success delete');
    }

}
