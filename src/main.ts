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
        currentPopup = WA.ui.openPopup("npclabpop","Hello Wanderer! I see you too are looking for riches and adventure! Mountains of gold are waiting for you in the graveyard of ships. If you make it through the labyrinth...",[]);
        var mysound = WA.sound.loadSound("npc/lab.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npclabzone').subscribe(closePopup)
//NPC lab

//NPC art
WA.room.onEnterLayer('npcartzone').subscribe(() => {
    currentPopup = WA.ui.openPopup("npcartpop","Do you believe in magic? Neither did I, until the witch turned me into a skeleton. Help me break the curse by writing the magic symbol Sei.",[]);
    var mysound = WA.sound.loadSound("npc/art.mp3");
    mysound.play(config);
    WA.chat.sendChatMessage("Paint it black", "Skeleton")
})
WA.room.onLeaveLayer('npcartzone').subscribe(closePopup)
//NPC art

//NPC quokka
WA.room.onEnterLayer('npcquokkazone').subscribe(() => {
    currentPopup = WA.ui.openPopup("npcquokkapop","Hello, sailor! Can you answer my questions? Let's see if the salty wind has blown all the brains out of your head?",[]);
    var mysound = WA.sound.loadSound("npc/mouse.mp3");
    mysound.play(config);
})
WA.room.onLeaveLayer('npcquokkazone').subscribe(closePopup)
//NPC quokka

//NPC jack
WA.room.onEnterLayer('npcjackzone').subscribe(() => {
    currentPopup = WA.ui.openPopup("npcjackpop","Hello, sailor! I hid the treasure under a tree and forgot which one. Help me find it!",[]);
    var mysound = WA.sound.loadSound("npc/horse.mp3");
    mysound.play(config);
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
            WA.chat.sendChatMessage("Nothing here", "You")
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
