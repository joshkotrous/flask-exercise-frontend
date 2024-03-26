import React from 'react'
import {Input, Button} from "@nextui-org/react";


export const CreateAccount = () => {
  return (
    <div className='flex flex-col gap-4'>
          <Input
        isClearable
        type="username"
        label="Username"
        variant="bordered"
        placeholder="Enter your username"
        onClear={() => console.log("input cleared")}
        className="max-w-xs"
        isRequired
        />
        <Input
        isClearable
        type="email"
        label="Email"
        variant="bordered"
        placeholder="Enter your email"
        onClear={() => console.log("input cleared")}
        className="max-w-xs"
        isRequired
        />
        <Input
        isClearable
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
        type="password"
        className="max-w-xs"
        isRequired
        />
        <Button color="primary">
            Create Account
        </Button>
    </div>
  )
}

