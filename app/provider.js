"use client"

import {SessionProvider} from "next-aut/react"

const Providers = (props) => {
  return <SessionProvider>{props.children}</SessionProvider>
};

export default Providers