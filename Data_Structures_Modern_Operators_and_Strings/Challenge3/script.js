const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
    ]);

    const eventSet=new Set(gameEvents.values());
    console.log(eventSet);
    const events=[...eventSet.values()];
    console.log(events);
    gameEvents.delete(64);
    console.log(gameEvents);
    const time=[...gameEvents.keys()].pop();
    console.log(`An event happened, on
average, every ${time/gameEvents.size} minutes`);

for(const [time,event] of gameEvents){
    if(time<=45)
        console.log(`[FIRST HALF] ${time}:${event}`)
    else
        console.log(`[SECOND HALF] ${time}:${event}`)

}