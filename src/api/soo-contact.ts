import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { FormValueProp } from "../pages/contact"
import dotenv from "dotenv"
dotenv.config()

import fetch from "node-fetch"

export default async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  const formBody: FormValueProp = req.body

  if (
    formBody.name === "" ||
    formBody.email === "" ||
    formBody.message === "" ||
    formBody.subject === ""
  ) {
    res.status(400).send({ message: "Invalid form body" })
  } else {
    try {
      console.log(formBody)
      const formSubmitResponse = await fetch(
        process.env.FORM_SUBMIT_API || "",
        {
          method: "POST",
          body: JSON.stringify(formBody),
          headers: {
            Accept: "application/json",
          },
        }
      )
      console.log("Response==========")
      console.dir(formSubmitResponse)
      res.status(200).send(formSubmitResponse)
    } catch (error) {
      console.log("error==========")
      console.log(error)
      res.status(200).send(error)
    }
  }
}
