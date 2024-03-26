import React from 'react'
import {Button, Link} from "@nextui-org/react";


export const Home = () => {
  return (
            <div className="flex gap-4">
          <Link href="/login">
            <Button color="primary" >
            Login
            </Button>
          </Link>
          <Link href="/create-account">

            <Button color="default">
            Create Account
            </Button>
            </Link>

      </div>




  )
}


