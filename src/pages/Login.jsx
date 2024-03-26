import React from 'react'
import {Input, Button} from "@nextui-org/react";


export const Login = () => {
  return (
    <div className='flex flex-col gap-4'>
        <Input
        isClearable
        type="email"
        label="Email"
        variant="bordered"
        placeholder="Enter your email"
        onClear={() => console.log("input cleared")}
        className="max-w-xs"
        />
        <Input
        isClearable
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
        type="password"
        className="max-w-xs"
        />
        <Button color="primary">
            Login
        </Button>
    </div>

    
    )
}

