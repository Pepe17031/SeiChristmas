/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
//NPC lab
    WA.room.onEnterLayer('npclabzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npclabpop","QUEST TEXT",[]);
        var mysound = WA.sound.loadSound("npc/lab.wav");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npclabzone').subscribe(closePopup)
//NPC lab

//NPC art
WA.room.onEnterLayer('npcartzone').subscribe(() => {
    currentPopup = WA.ui.openPopup("npcartpop","QUEST TEXT",[]);
    var mysound = WA.sound.loadSound("npc/art.wav");
    mysound.play(config);
})
WA.room.onLeaveLayer('npcartzone').subscribe(closePopup)
//NPC art

//NPC Ghost
WA.room.onEnterLayer('qdoorzone').subscribe(() => {
    currentPopup = WA.ui.openPopup("npcdoorpop","QUEST TEXT",[]);
    var mysound = WA.sound.loadSound("npc/ghost.wav");
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

export {};
