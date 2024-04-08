import { ExcelRow } from './excel-dropzone.jsx'
import users from './users.js'

const scores = {
    score: [{ userId: 1, score: 474 },
    { userId: 2, score: 592 },
    { userId: 1, score: 30 },
    { userId: 2, score: 48 },
    { userId: 2, score: 585 },
    { userId: 3, score: 465 },
    { userId: 1, score: 219 },
    { userId: 3, score: 974 },
    { userId: 3, score: 753 },
    { userId: 1, score: 988 },
    { userId: 3, score: 645 },
    { userId: 2, score: 53 },
    { userId: 3, score: 715 },
    { userId: 1, score: 626 },
    { userId: 3, score: 462 },
    { userId: 2, score: 210 },
    { userId: 1, score: 679 },
    { userId: 2, score: 742 },
    { userId: 1, score: 983 },
    { userId: 1, score: 163 },
    { userId: 3, score: 701 },],
    initScores: function (datalist: ExcelRow[]) {
        users.clearUsers()
        scores.clearScores()
        datalist.forEach(row => {
            this.addScore(row.name, row.score);
        });
    },
    addScore: function (name: string, score: number) {
        console.log("added");

        let userId = users.getUserId(name) == 0 ? users.addUser(name) : users.getUserId(name)

        this.score.push({ userId: userId, score: score })
    },
    clearScores: function() {
        this.score = []
    }
}

export default scores