import { Button, Form, HStack, TextField } from '@northlight/ui';
import React, { useState } from 'react'
import scores from '../scores';

export default function Scoreform(props) {
  return (
    <div>
      <Form
        initialValues={{ name: "", score: "" }}
        onSubmit={(e) => {
          console.log(e);
          scores.addScore(e.name, Number(e.score))
          props.setUpdated(true)
          e.name = ""
          e.score = ""
          console.log("submittfasdfasdfted");

        }}
      >
        <Button type="submit">Submit</Button>
        <HStack alignItems="end" w="300px">
          <TextField
            name="name"
            label="Name"
            isRequired={true}
          />
          <TextField
            name="score"
            label="Score"
            isRequired={true}
          />
        </HStack>
      </Form>
    </div>
  )
}
