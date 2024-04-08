const users = {
  user: [
  { _id: 1, name: 'Jane' },
  { _id: 2, name: 'Barry' },
  { _id: 3, name: 'Kim' },
],
  addUser: function (name: string) {
    let userId = this.getLastId()+1
    this.user.push({_id: userId, name: name})
    return userId
  },
  clearUsers: function() {
    this.user = []
  },
  getLastId: function() {
    if (this.user.length > 0) {
      return this.user[this.user.length - 1]._id
    } else {
      return 0
    }
  },
  getUser: function(userId: number) {
    return this.user.find(user => user._id == userId)?.name;
  },
  getUserId: function(name: string) {
    return this.user.find(user => user.name == name)?._id == undefined ? 0 : this.user.find(user => user.name == name)._id;
  }
}
export default users
