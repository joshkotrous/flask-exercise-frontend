import { React, useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Avatar,
} from "@nextui-org/react";
import { LikePost } from "../hooks/Posts";
import Cookies from "js-cookie";

const Post = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card key={props.postId} className="mt-4 pt-4 pb-2">
      <CardHeader className="pb-0 pt-0 px-4 flex gap-2 items-center">
        <Avatar></Avatar>
        <h2 className="font-bold">{props.author}</h2>
      </CardHeader>
      <CardBody className="pl-5 overflow-visible py-2 ">
        <p className="">{props.content}</p>
        <div className="flex h-fit items-center pt-2">
          {props.isLiked || isHovered ? (
            <AiFillHeart
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="text-red-500 pt-1 size-6"
              onClick={() => {
                LikePost(Cookies.get("userId"), props.postId, props.token);
                props.onRefresh();
              }}
            />
          ) : (
            <AiOutlineHeart
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="pt-1 size-6"
            />
          )}
          <p className="text-sm self-center mt-1">{props.likes}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default Post;
