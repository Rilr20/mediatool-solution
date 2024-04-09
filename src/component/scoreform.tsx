import { Box, Button, Form, HStack, TextField } from '@northlight/ui';
import React, { useState } from 'react'
import scores from '../scores';

export default function Scoreform(props) {
  const [form, setForm] = useState([{name:"", score:""}]);

  function addNewScore (e) {
    setForm([...form, { name: e.target.form[0].value, score: e.target.form[1].value}])
  }

  return (
    <Box m="auto" w="50%">
      <Box>
        <p hidden={form == [{name:"", score:""}] ? "hidden" : "default"}>Preview </p>
        {
          form.map(function (items, i) {
            return <p key={i}>{items.name} {items.score}</p>
          })
        }
      </Box>
      <Form
        initialValues={{ name: "", score: "", multiple: "" }}
        onSubmit={(e) => {
          if (form.length > 1) {
            form.forEach(item => {
              if (item.name !== "") {
                scores.addScore(item.name, Number(item.score))
              }
              setForm([{ name: "", score: "" }])
            });
          } else {
            scores.addScore(e.name, Number(e.score))
            
          }
          props.setUpdated(true)
        }}
      >
        <HStack alignItems="end" w="100%">
          <TextField
            id="name"
            name="name"
            label="Name"
            isRequired={false}
          />
          <TextField
            id="score"
            name="score"
            label="Score"
            isRequired={false}
          />
        </HStack>
        <HStack my={4}>
        </HStack>
        <Button type="button" w="50%" onClick={addNewScore}>Add New Score</Button>
        <Button my={2} w="50%" type="submit">Submit</Button>
      </Form>
    </Box>
  )
}
