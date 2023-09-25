let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let level = user.level

    let role = (level % 4 == 0) ? 'Warrior III'
      : (level % 4 == 1) ? 'Warrior II'
      : (level % 4 == 2) ? 'Warrior I'
      : (level % 4 == 3) ? 'Elite III'
      : (level % 4 == 4) ? 'Elite II'
      : (level % 4 == 5) ? 'Elite I'
      : (level % 4 == 6) ? 'Master III'
      : (level % 4 == 7) ? 'Master II'
      : (level % 4 == 8) ? 'Master I'
      : (level % 4 == 9) ? 'Grandmaster VI'
      : (level % 4 == 10) ? 'Grandmaster III'
      : (level % 4 == 11) ? 'Grandmaster II'
      : (level % 4 == 12) ? 'Grandmaster I'
      : (level % 4 == 13) ? 'Epic V'
      : (level % 4 == 14) ? 'Epic VI'
      : (level % 4 == 15) ? 'Epic III'
      : (level % 4 == 16) ? 'Epic II'
      : (level % 4 == 17) ? 'Epic I'
      : (level % 4 == 18) ? 'Legend V'
      : (level % 4 == 19) ? 'Legend VI'
      : (level % 4 == 20) ? 'Legend III'
      : (level % 4 == 21) ? 'Legend II'
      : (level % 4 == 22) ? 'Legend I'
      : (level % 4 == 23) ? 'Mythic'
      : (level % 4 == 24) ? 'Mythic Honor'
      : (level % 4 == 25) ? 'Mythical Glory'
      : 'Mythical Immortal'

    user.role = role
    return true
}

export default handler
