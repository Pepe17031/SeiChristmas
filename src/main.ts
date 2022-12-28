/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;
let triggerMessage: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
//NPC lab
    WA.room.onEnterLayer('npclabzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npclabpop","Hello Wanderer! I see you are looking for treasures and adventures too! Mountains of Gold are waiting for you in the graveyard of ships. If you make it through the maze… ",[]);
        var mysound = WA.sound.loadSound("npc/lab.mp3");
        mysound.play(config);
        WA.chat.sendChatMessage("This legend is so mysterious, that actually no one knows anymore what it is about… No one remembers who is she and where she came from, but there is a Legend about this Legend that says - No-Named Lady guards the entrance to the maze and will do everything to not let you through on the other side. Dont listen to her and - RUN!!! Find the exit!", "No-Named Lady")
    })
    WA.room.onLeaveLayer('npclabzone').subscribe(closePopup)
//NPC lab

//NPC art
WA.room.onEnterLayer('npcartzone').subscribe(() => {
    currentPopup = WA.ui.openPopup("npcartpop","Do you believe in magic? Neither did I, until the witch turned me into a skeleton. Help me to break the curse by writing the magic symbol Sei.",[]);
    var mysound = WA.sound.loadSound("npc/art.mp3");
    mysound.play(config);
    WA.chat.sendChatMessage("Once upon a time there were Gods in the SeiVerse, and one of them - The God of the Content, known as The Lord of the Robots, has lost his inspiration, and since then no one saw even one single drawing from him… You have to help him to get back his talent! Please draw the SeiNetwork logo on one of the dashboards (dont forget to press the SPACE bar to be able to draw!). But HURRY UP - the boards will be closed in 30 minutes!", "Skeleton")
})
WA.room.onLeaveLayer('npcartzone').subscribe(closePopup)
//NPC art

//NPC quokka
WA.room.onEnterLayer('npcquokkazone').subscribe(() => {
    currentPopup = WA.ui.openPopup("npcquokkapop","Hello, Seilor! Can you answer my questions? Let's see if the salty wind has blown the brain out of your head.",[]);
    var mysound = WA.sound.loadSound("npc/mouse.mp3");
    mysound.play(config);
    WA.chat.sendChatMessage("Since the beginning of time, he was known as The Keen Eye - no one could hide from him, nothing could be hidden… He sees everyone and everything. His mission on SeiVerse is to find all the evil and destroy it. You will need to complete the quiz - answer 8 questions, if you do this right - you will pass this quiz. Remember about the saving boards - there are 8 boards where you can find all the hints… Good luck!", "Zaragoosa")
})
WA.room.onLeaveLayer('npcquokkazone').subscribe(closePopup)
//NPC quokka

//NPC jack
WA.room.onEnterLayer('npcjackzone').subscribe(() => {
    currentPopup = WA.ui.openPopup("npcjackpop","Hello, Seilor! I hid the treasure under the tree and forgot which one. Help me to find it!",[]);
    var mysound = WA.sound.loadSound("npc/horse.mp3");
    mysound.play(config);
    WA.chat.sendChatMessage("The other Legend, very old and quite depressive is about the famous Horse-Man - BoJack The Lost. No one remembers these days what actually happened, and there are a lot of rumors, but the fact is that he had a treasure, that he hid in the Ambassadors Jungle and now he cant remember where. So you need to help him to find it. Dig, seilor, DIG!", "BoJack")
})
WA.room.onLeaveLayer('npcjackzone').subscribe(closePopup)
//NPC jack

//NPC Klad
WA.room.onEnterLayer('kladzone').subscribe(() => {
    triggerMessage = WA.ui.displayActionMessage({
        message: "Press SPACE to dig",
        callback: () => {
            var mysound = WA.sound.loadSound("npc/klad.mp3");
            mysound.play(config);
            WA.chat.sendChatMessage("Nothing in here", "You")
        }
    });
})
WA.room.onLeaveLayer('kladzone').subscribe(closeTriger)
//NPC Klad

//NPC Klad
WA.room.onEnterLayer('kladwinzone').subscribe(() => {
    triggerMessage = WA.ui.displayActionMessage({
        message: "Press SPACE to dig",
        callback: () => {
            WA.nav.openCoWebSite('https://icodrops.com/wp-content/uploads/2022/06/SryHMGDk_400x400.jpg', true, "", 70, 1, true, false);
            var mysound = WA.sound.loadSound("npc/kladwin.mp3");
            mysound.play(config);
        }
    });
})
WA.room.onLeaveLayer('kladwinzone').subscribe(closeTriger)
//NPC Klad

//NPC Ghost
WA.room.onEnterLayer('qdoorzone').subscribe(() => {
    currentPopup = WA.ui.openPopup("npcdoorpop","The text of the four tombstones, the password to the treasure keeps.",[]);
    var mysound = WA.sound.loadSound("npc/ghost.mp3");
    mysound.play(config);
    WA.chat.sendChatMessage("There is a Legend about the Validator. He came to get the treasure. He was brave and strong. But the evil witch made him forget all he knew and he forgot about the updates for the node. Since then he is just a ghost of a validator, lost his power… Help him to find his peace! Answer the questions, get the code and open the door!", "Ghost of Validator")
})
WA.room.onLeaveLayer('qdoorzone').subscribe(closePopup)
//NPC Ghost

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}



function closeTriger(){
    if (triggerMessage !== undefined) {
        triggerMessage.remove();
        triggerMessage = undefined;
    }
}

//NPC SOUND
var config = {
    volume : 1,
    loop : false,
    rate : 1,
    detune : 1,
    delay : 0,
    seek : 0,
    mute : false
};

export {};
