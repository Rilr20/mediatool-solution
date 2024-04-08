import { Table, Tbody, Th, Thead, Tr, Td, Box } from '@northlight/ui';
import React, { useEffect, useState } from 'react'

export default function Scoreboard(props: any) {
  const [highscores, setHighscores] = useState([{ name: "", score: "" }])
  useEffect(() => {
    getHighscore();
  }, [props])

  function getHighscore() {
    let highscore: any[] = []
    props.scores.score.forEach((score: { userId: number; score: number; }) => {
      if (highscore[score.userId] == null) {
        highscore[score.userId] = { name: props.users.getUser(score.userId), score: score.score }
      } else {
        highscore[score.userId].score = highscore[score.userId].score < score.score ? score.score : highscore[score.userId].score
      }
    });

    setHighscores(highscore.sort((a, b) => b.score - a.score))
  }

  return (
    <Box w="80%" m="auto">
      <Table>
        <Thead>
          <Tr>
            <Th fontWeight="bold"> Placement</Th>
            <Th fontWeight="bold"> Name</Th>
            <Th fontWeight="bold"> Score</Th>
          </Tr>
        </Thead>
        <Tbody>
      {
        highscores.map(function (score, i) {
          return <Tr key={i}> 
            <Td>#{i + 1}</Td>
            <Td>{score.name}</Td>
            <Td> {score.score}</Td>
          </Tr>
        })
      }
        </Tbody>
      </Table>
    </Box>
  )
}
