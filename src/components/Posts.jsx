import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Avatar,
} from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

import { FileUploader } from "react-drag-drop-files";

import { IoMdPhotos } from "react-icons/io";

import { GetAllPosts, CreatePost, LikePost } from "../hooks/Posts";
import Cookies from "js-cookie";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState();
  const [newPostContent, setNewPostContent] = useState();
  const [refresh, setRefresh] = useState(false);
  const [files, setFiles] = useState([]);
  const fileTypes = ["JPEG", "PNG", "GIF"];

  const handleChange = (fileList) => {
    const file = fileList[0];

    const fileInfo = {
      name: file.name,
      // You can add more properties as needed
    };

    const newFiles = [...files, fileInfo];
    setFiles(newFiles);
  };
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
  }, [refresh, files]);

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
          <div className="w-full flex items-center">
            {files &&
              files.map(function (data) {
                return (
                  <Image
                    className="mt-2 p-2 pl-0 rounded-3xl"
                    width={200}
                    alt="NextUI hero Image"
                    src={"../images/" + data.name}
                  />
                );
              })}
          </div>

          <div className="w-full flex items-center">
            <Popover placement="bottom" showArrow={true}>
              <PopoverTrigger>
                <Button
                  className="mt-4 mb-0 size-7"
                  startContent={<IoMdPhotos className="size-6" />}
                />
              </PopoverTrigger>
              <PopoverContent>
                <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                />
              </PopoverContent>
            </Popover>
            <Button
              className="mt-4 w-fit h-fit self-end"
              color="primary"
              onClick={() => {
                console.log(JSON.stringify(files));
                CreatePost(
                  Cookies.get("userId"),
                  newPostContent,
                  Cookies.get("token"),
                  JSON.stringify(files)
                );
                setNewPostContent("");
                handleRefresh();
              }}
            >
              Post
            </Button>
          </div>
        </CardBody>
      </Card>
      <h4 className="text-xl pt-4">{posts && posts.length} New Posts</h4>
      <div className="mt-2 overflow-scroll h-screen no-scrollbar">
        {posts &&
          posts.map(function (data) {
            return (
              <Post
                key={data.post_id}
                postId={data.post_id}
                author={data.author}
                content={data.content}
                likes={data.likes}
                token={Cookies.get("token")}
                isLiked={data.is_liked}
                onRefresh={handleRefresh}
                attachments={data.attachments}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Posts;
