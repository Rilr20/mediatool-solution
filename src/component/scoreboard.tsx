import React, { useEffect, useState } from 'react'

export default function Scoreboard(props: any) {
  const [highscores, setHighscores] = useState([{ name: "", score: "" }])
  useEffect(() => {
    getHighscore();
  }, [props])

  // console.log(props);
  function getHighscore() {
    // console.log(props.scores);
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
    <div>
      {
        highscores.map(function (score, i) {
          return <div key={i}>{i + 1} {score.name} {score.score}</div>
        })
      }
    </div>
  )
}
