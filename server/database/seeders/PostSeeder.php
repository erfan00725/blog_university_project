<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{

      // const post = {
  //   id: 1,
  //   description:
  //     "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
  //   title: "Do Not Leave Tokyo Before Eating This Ramen",
  //   body: `Welcome to your blog post. Use this space to connect with your readers
  // and potential customers in a way that’s current and interesting. Think
  // of it as an ongoing conversation where you can share updates about
  // business, trends, news, and more.\n\n
  // <span class="font-normal text-2xl text italic border-l-2 border-secondery-color block pl-5">
  //   “Welcome to your blog post. Use this space to connect with your
  //   readers and potential customers in a way that’s current and
  //   interesting. Think of it as an ongoing conversation where you can
  //   share updates about business, trends, news, and more.”
  // </span>
  // \n
  // You’ll be posting loads of engaging content, so be sure to keep your
  // blog organized with Categories that also allow visitors to explore
  // more of what interests them.
  // \n
  // <h3 class="font-semibold text-2xl py-7">
  //   Create Relevant Content
  // </h3>
  // Writing a blog is a great way to position yourself as an authority in
  // your field and captivate your readers’ attention. Do you want to
  // improve your site’s SEO ranking? Consider topics that focus on
  // relevant keywords and relate back to your website or business. You can
  // also add hashtags (#vacation #dream #summer) throughout your posts to
  // reach more people, and help visitors search for relevant content.
  // \n\n
  // Blogging gives your site a voice, so let your business’ personality
  // shine through. Choose a great image to feature in your post or add a
  // video for extra engagement. Are you ready to get started? Simply
  // create a new post now.`,
  //   image_path: postImg,
  //   likes: 0,
  // };

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory([
            "description" => "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
            "title" => "Do Not Leave Tokyo Before Eating This Ramen",
            "body" => "Welcome to your blog post. Use this space to connect with your readers
        and potential customers in a way that’s current and interesting. Think
        of it as an ongoing conversation where you can share updates about
        business, trends, news, and more.\n\n
        <span class=\"font-normal text-2xl text italic border-l-2 border-secondery-color block pl-5\">
          “Welcome to your blog post. Use this space to connect with your
          readers and potential customers in a way that’s current and
          interesting. Think of it as an ongoing conversation where you can
          share updates about business, trends, news, and more.”
        </span>
        \n
        You’ll be posting loads of engaging content, so be sure to keep your
        blog organized with Categories that also allow visitors to explore
        more of what interests them.
        \n
        <h3 class=\"font-semibold text-2xl py-7\">
          Create Relevant Content
        </h3>
        Writing a blog is a great way to position yourself as an authority in
        your field and captivate your readers’ attention. Do you want to
        improve your site’s SEO ranking? Consider topics that focus on
        relevant keywords and relate back to your website or business. You can
        also add hashtags (#vacation #dream #summer) throughout your posts to
        reach more people, and help visitors search for relevant content.
        \n\n
        Blogging gives your site a voice, so let your business’ personality
        shine through. Choose a great image to feature in your post or add a
        video for extra engagement. Are you ready to get started? Simply
        create a new post now.",
            "image_path" => "E:\programming\blog_university_project\app\src\assets\images\c22c23_e3b5cb121db549fdbb1590f51d378b8c~mv2.png",
            "likes" => 0
        ])->count(10);
    }
}