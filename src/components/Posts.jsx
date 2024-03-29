import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Avatar,
} from "@nextui-org/react";
import { GetAllPosts, CreatePost, LikePost } from "../hooks/Posts";
import Cookies from "js-cookie";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState();
  const [newPostContent, setNewPostContent] = useState();
  const [refresh, setRefresh] = useState(false);

  const getPosts = async () => {
    const posts = await GetAllPosts(
      Cookies.get("userId"),
      Cookies.get("token")
    );
    setPosts(posts);
  };
  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    getPosts();
  }, [refresh]);
  console.log(posts);
  return (
    <div>
      <Card className="py-4 sticky">
        <CardHeader className="pb-0 pt-0 px-4 flex-col items-start">
          <h4 className="font-bold text-large">New Post</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Input
            type="text"
            label=""
            value={newPostContent}
            onChange={(e) => {
              setNewPostContent(e.target.value);
            }}
            placeholder="Write something..."
          ></Input>
          <Button
            className="mt-4 w-fit h-fit self-end"
            color="primary"
            onClick={() => {
              CreatePost(
                Cookies.get("userId"),
                newPostContent,
                Cookies.get("token")
              );
              setNewPostContent("");
              handleRefresh();
            }}
          >
            Post
          </Button>
        </CardBody>
      </Card>
      <h4 className="text-xl pt-4">{posts && posts.length} New Posts</h4>
      <div className="mt-2 overflow-scroll h-screen">
        {posts &&
          posts.map(function (data) {
            return (
              <Post
                postId={data.post_id}
                author={data.author}
                content={data.content}
                likes={data.likes}
                token={Cookies.get("token")}
                isLiked={data.is_liked}
                onRefresh={handleRefresh}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Posts;
