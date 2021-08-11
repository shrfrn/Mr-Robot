const KEY = 'mrBitcoinUsers'
let gUsers = [
    {
        name: 'Mr. Robot',
        balance: 100,
        moves: [
            {
                toId: 'u101',
                toName: 'Mr. Puki',
                at: Date.now(),
                amount: 10,
            },
        ],
    },
]
gLoggedInUser = null;
_loadUsers()

export const userService = {
    signup,
    addMove,
    loggedInUser,
}
function signup(name){

    let user = gUsers.find(usr => usr.name === user.name)
    if(!user){
        user = { _id: _makeId(), name, balance: 100, moves: [] }
        gUsers.push(user)
        localStorage.setItem(KEY, JSON.stringify(gUsers))
    }
    return gLoggedInUser = user
}

function addMove(move){
    gLoggedInUser.moves.push(move)
    idx = gUsers.findIndex(usr => usr.name === gLoggedInUser.name)
    gUsers.splice(idx, 1, gLoggedInUser)
    return gLoggedInUser
}
function loggedInUser(){
    return gLoggedInUser
}

// Private functions

function _loadUsers() {
    let users = JSON.parse(localStorage.getItem(KEY))

    if(!users || users.length === 0){
        localStorage.setItem(KEY, JSON.stringify(gUsers))
    } else {
        gUsers = users
    }
}
function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }